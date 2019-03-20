import './less/antMotionStyle.less';
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { RouteComponentProps } from 'react-router';

// Components
import Banner from './Banner';
import Projects from './Projects';
import Footer from './Footer';
import FAQ from './FAQ';
import Chat from '../../components/Chat/Chat';

interface IProps extends RouteComponentProps { }

interface IState {
    isMobile: boolean;
    show: boolean;
    modalCvVisible: boolean;
}

export default class Home extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            isMobile: false,
            show: !window.location.port,
            modalCvVisible: false
        };
    }

    onModalCV = (visible: boolean) => {
        this.setState({ modalCvVisible: visible });
    }

    componentDidMount() {
        enquireScreen((b) => { this.setState({ isMobile: b !== undefined }); });

        if (location.port) {
            setTimeout(() => {
                this.setState({ show: true, });
            }, 500);
        }
    }

    render() {
        const { show, modalCvVisible, isMobile } = this.state;
        const children = [
            <Banner id="banner" key="banner" onModalCV={this.onModalCV} />,
            <Projects id="projets" key="projects" isMobile={isMobile} />,
            <FAQ id="faq" key="faq" />,
            <Footer id="footer" key="footer" />,
        ];
        return (
            <div className="templates-wrapper" style={{ overflow: modalCvVisible ? 'hidden' : 'auto', height: modalCvVisible ? '100vh' : null }}>
                {this.state.show && (
                    <>
                        <Chat isMobile={isMobile} />
                        {children}
                    </>
                )}
            </div>
        );
    }
}
