import React from 'react';

export default class ProjectQRun extends React.Component {
    render() {
        return (
            <div id="qrun">
                <h1>QRun</h1>
                <p>Vidéo de présentation avec la voix de monsieur PENELON Pierre.</p>
                <iframe
                    width={"100%"}
                    height={400}
                    src="https://www.youtube.com/embed/7h78NaebtZ8"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder={0}
                    allowFullScreen
                />
            </div>
        )
    }
}