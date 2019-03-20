import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

interface IProps {
    id: string;
}

interface IState { }

export default class Footer extends React.Component<IProps, IState> {

    render() {
        const { id } = this.props;
        return (
            <div id={id} key={id} className="home-page-wrapper footer-wrapper">
                <OverPack className="footer" playScale={0.01}>
                    <TweenOne
                        animation={{ y: '+=30', opacity: 0, type: 'from' }}
                        key="copyright"
                        className="copyright-wrapper"
                    >
                        <div className="home-page">
                            <div className="copyright">
                                <span>
                                    ©2019 by <a href="https://giovanniscarpellino.github.io">SCARPELLINO Giovanni</a> All Rights Reserved
                                </span>
                            </div>
                        </div>
                    </TweenOne>
                </OverPack>
            </div>
        );
    }
}
