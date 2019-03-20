import './Chat.less';
import React from 'react';
import { Icon, Input, Form, message, Tooltip, Spin, } from 'antd';
import ResizeObserver from 'resize-observer-polyfill';
import { addMessage } from '../../controllers/messages';
import * as app from 'firebase/app';
import 'firebase/functions';
import 'firebase/database';
import Message from '../../../shared/interfaces/Message';
import { addEmailToUser, setActiveUser } from '../../controllers/users';

interface IProps {
    isMobile: boolean;
}

interface IState {
    userId: string;
    loadingEmail: boolean;
    loading: boolean;
    showChat: boolean;
    content: string;
    messages: Message[];
    heightTextArea: number;
    showEmail: boolean;
}

export default class Chat extends React.Component<IProps, IState> {

    refContent: HTMLDivElement;
    resizeObserver: ResizeObserver;

    myMessage: Message = {
        id: '',
        content: `Bonjour et merci beaucoup de venir visiter mon site !
Nous pouvons parler en direct depuis ici !
Vous pouvez fermer le navigateur et revenir plus tard, les messages seront conservés !
A très bientôt !😃`,
        position: 'left',
    }

    constructor(props: IProps) {
        super(props);

        this.state = {
            loadingEmail: false,
            loading: false,
            showChat: false,
            content: '',
            userId: localStorage.getItem('userId'),
            messages: [this.myMessage],
            heightTextArea: 0,
            showEmail: true,
        }
    }

    componentDidMount() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.setState({ heightTextArea: entries[0].contentRect.height });
            this.scrollContentToBottom();
        });
        this.resizeObserver.observe(document.getElementById('text-area'));
    }

    async componentWillUnmount() {
        this.resizeObserver.disconnect();
    }

    async componentWillMount() {
        // Actif sur le tab
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            if (localStorage.getItem('userId')) {
                setActiveUser(localStorage.getItem('userId'), false);
            }
        });
        this.listenNewMessages();
        if (localStorage.getItem('userId')) {
            await setActiveUser(localStorage.getItem('userId'), true);
        }
    }

    listenNewMessages = () => {
        let userId = localStorage.getItem('userId');
        if (userId) {
            app.database().ref('/users/' + userId).child('email').on('value', async snapshot => {
                if (snapshot.val()) this.setState({ showEmail: false });
            });
            app.database().ref('/users/' + userId).child('messages').on('value', async (snapshot) => {
                let data = snapshot.val();
                if (data) {
                    let messages: Message[] = [];
                    await Object.keys(data).forEach(key => {
                        let message = data[key];
                        messages.push({ id: key, content: message.content, position: message.position });
                    });
                    await this.setState({ messages: [this.myMessage, ...messages] });
                    this.scrollContentToBottom();
                }
            });
        }
    }

    scrollContentToBottom = () => {
        if (this.refContent) {
            this.refContent.scrollTo({ top: this.refContent.scrollHeight, behavior: 'smooth' });
        }
    }

    sendMessage = async () => {
        this.setState({ loading: true });
        const { content } = this.state;
        if (content) {
            let { data: userId } = await addMessage({ content }, localStorage.getItem('userId'));
            if (!localStorage.getItem('userId')) {
                localStorage.setItem('userId', userId);
                try {
                    await setActiveUser(localStorage.getItem('userId'), true);
                } catch{ }
                this.listenNewMessages();
            }
            this.setState({ content: '' });
        }
        this.setState({ loading: false });
    }

    render() {
        const { isMobile } = this.props;
        const { heightTextArea, messages, showChat } = this.state;

        return (
            <div id="chat">
                <div className="button-open-chat" onClick={() => {
                    this.setState({ showChat: !showChat });
                    setTimeout(this.scrollContentToBottom, 700);
                }}>
                    <Icon type={showChat ? 'close' : 'message'} className="message-icon" />
                </div>
                <div className={isMobile ? "body body-mobile" : "body"} style={{ height: showChat ? 500 : 0 }}>
                    <div className={isMobile ? "header header-mobile" : "header"}><h2 className="text">Envoyez moi un message 😃</h2></div>
                    {this.state.showEmail && (
                        <div className="input-message">
                            <Spin spinning={this.state.loadingEmail} indicator={<Icon type="loading" />}>
                                <Tooltip title=
                                    {<span>
                                        Renseignez votre email pour être avertis par mail de ma réponse !<br />
                                        <a onClick={() => this.setState({ showEmail: false })}>Je ne suis pas intéressé.</a>
                                    </span>
                                    }>
                                    <Input type="email" onPressEnter={this.handleSubmit} placeholder="Votre email" style={{ width: '100%' }} />
                                </Tooltip>
                            </Spin>
                        </div>
                    )}
                    <div ref={div => this.refContent = div} className={isMobile ? "content content-mobile" : "content"} style={{ height: `calc(425px - ${heightTextArea + 20}px)` }}>
                        {messages.map((message, index) => (
                            <div key={index} className={`bubble bubble-${message.position}`}>
                                <p>
                                    {message.content.split('\n').map((value, index) => <span key={index}>{value}<br /></span>)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={isMobile ? "send-message send-message-mobile" : "send-message"}>
                        <Input.TextArea
                            autoFocus
                            id="text-area"
                            value={this.state.content}
                            className="input"
                            placeholder={"Ecrire un message..."}
                            autosize={{ maxRows: 3 }}
                            onChange={e => this.setState({ content: e.currentTarget.value })}
                            onPressEnter={(e) => {
                                if (!e.shiftKey) {
                                    e.preventDefault();
                                    this.sendMessage();
                                }
                            }}
                        />
                        {this.state.loading ? (
                            <Icon type="loading" className="send-icon" />
                        ) :
                            <img src={require('../../medias/img/send.svg')} className="send-icon" onClick={this.sendMessage} />
                        }
                    </div>
                </div>
            </div >
        )
    }

    handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ loadingEmail: true });
        let email = event.currentTarget.value;

        try {
            const { data: userId } = await addEmailToUser(email, localStorage.getItem('userId'));
            localStorage.setItem('userId', userId);
            this.listenNewMessages();
            message.success("Votre email a bien été enregistré!");
            this.setState({ showEmail: false });
        } catch{
            message.error("Une erreur est survenue...");
        }

        this.setState({ loadingEmail: false });
    }
}