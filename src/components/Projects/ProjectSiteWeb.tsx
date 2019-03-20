import React from 'react';

export default class ProjectSiteWeb extends React.Component {
    render() {
        return (
            <div id="site-web">
                <h1>Application React Native pour ce site</h1>
                <h3>Vidéo de démonstration</h3>
                <iframe
                    width={"100%"}
                    height={400}
                    src="https://www.youtube.com/embed/OJ01hJUK3FQ"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder={0}
                    allowFullScreen
                />
            </div>
        )
    }
}