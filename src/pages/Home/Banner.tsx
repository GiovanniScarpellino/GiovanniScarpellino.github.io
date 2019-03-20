import React from 'react';
import { Button, Icon, Modal } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import posed, { PoseGroup } from 'react-pose';
import Particules from 'react-particles-js';
import particules from './particules.json';

interface IProps {
    id: string;
    onModalCV: (visible: boolean) => void;
}

interface IState {
    modalCvVisible: boolean;
}

const CV = posed.div({
    visible: {
        opacity: 1,
        height: '100vh',
    },
    hidden: {
        opacity: 0,
        height: 0,
    }
});

export default class Banner extends React.PureComponent<IProps, IState> {

    alreadyInitAnimation = false;
    screenLogo = React.createRef<HTMLImageElement>();
    divTextLogo = React.createRef<HTMLDivElement>();
    intervalTextLogo = 0;
    intervaleArrayTextLogo = 0;
    textLogo = ["> SCARPELLINO", "> Giovanni", "> ", "> "];

    constructor(props: IProps) {
        super(props);

        this.state = {
            modalCvVisible: false,
        };
    }

    writeAnimationText = () => {
        if (this.intervaleArrayTextLogo < this.textLogo.length && this.intervalTextLogo < this.textLogo[this.intervaleArrayTextLogo].length) {
            this.divTextLogo.current.innerHTML += this.textLogo[this.intervaleArrayTextLogo].charAt(this.intervalTextLogo);
            if (this.intervalTextLogo === this.textLogo[this.intervaleArrayTextLogo].length - 1) {
                this.intervalTextLogo = 0;
                this.intervaleArrayTextLogo++;
                if (this.intervaleArrayTextLogo !== this.textLogo.length) {
                    this.divTextLogo.current.innerHTML += "<br/>";
                }
            } else {
                this.intervalTextLogo++;
            }
            setTimeout(this.writeAnimationText, 100);
        } else {
            let a = true;
            setInterval(() => {
                a = !a;
                if (a) {
                    this.divTextLogo.current.innerHTML = this.divTextLogo.current.innerHTML.slice(0, -1);
                } else {
                    this.divTextLogo.current.innerHTML += "_";
                }
            }, 500);
        }
    }

    render() {
        const { id, } = this.props;
        const { modalCvVisible } = this.state;

        return (
            <div id={id} key={id} className="banner">
                <Particules params={particules as any} />
                <CV className="preview-cv" onClick={() => {
                    this.setState({ modalCvVisible: false });
                    this.props.onModalCV(false);
                }} pose={modalCvVisible ? 'visible' : 'hidden'}>
                    {<img width="50%" src={require('../../medias/img/CV.png')} />}
                </CV>
                <QueueAnim
                    key="QueueAnim"
                    type={['bottom', 'top']}
                    delay={200}
                    className="banner-text-wrapper"
                    onEnd={() => {
                        if (this.screenLogo.current && !this.alreadyInitAnimation) {
                            this.alreadyInitAnimation = true;
                            this.screenLogo.current.style.transform = "rotateX(0deg)";
                            setTimeout(() => {
                                this.divTextLogo.current.style.display = "block";
                                this.writeAnimationText();
                            }, 1200);
                        }
                    }}
                >
                    <div key="title" className="banner-title">
                        <div className="logo">
                            <img src={require('../../medias/img/screen.png')} ref={this.screenLogo} className="screen" width="100%" alt="img" />
                            <img src={require('../../medias/img/keyboard.png')} className="keyboard" width="100%" alt="img" />
                            <div className="texte" ref={this.divTextLogo}></div>
                        </div>
                    </div>
                    {/* <div key="content" className="banner-content">Un petit slogan</div> */}
                    <Button ghost key="button-1" className="banner-button" onClick={() => {
                        let element = document.getElementById('projets');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>Projets</Button>
                    <Button ghost key="button-2" className="banner-button" style={{ marginLeft: 15 }} onClick={() => {
                        this.setState({ modalCvVisible: true });
                        this.props.onModalCV(true);
                    }}>CV</Button>
                    <Button ghost key="button-3" className="banner-button" style={{ marginLeft: 15 }} onClick={() => {
                        let element = document.getElementById('faq');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        FAQ
                    </Button>
                </QueueAnim>
                <TweenOne
                    animation={{
                        y: '-=20',
                        yoyo: true,
                        repeat: -1,
                        duration: 1000,
                    }}
                    className="banner-icon"
                    key="icon"
                >
                    <Icon type="down" />
                </TweenOne>
            </div>
        );
    }
}
