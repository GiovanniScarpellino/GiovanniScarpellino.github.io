import React, { IframeHTMLAttributes } from 'react';

interface IProps { }

interface IState { }

export default class ProjectGameJam extends React.Component<IProps, IState> {

    refIFrame = React.createRef<HTMLIFrameElement>();

    render() {
        return (
            <div id="game-jam">
                <h1>Game jam</h1>
                <p><a href="/gamejam">Cliquez ici pour essayer le jeu!</a></p>
                <iframe
                    width={"100%"}
                    height={400}
                    src="https://www.youtube.com/embed/irUHvsfppvU"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder={0}
                    allowFullScreen
                />
            </div>
        )
    }
}