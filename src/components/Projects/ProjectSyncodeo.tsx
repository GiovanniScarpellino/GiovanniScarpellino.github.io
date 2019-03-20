import React from 'react';

export default class ProjectSyncodeo extends React.Component {
    render() {
        return (
            <div id="syncodeo">
                <h1>Syncodéo</h1>
                <span><a href="https://syncodeo.io" target="_blank">Cliquez ici pour visiter le site!</a></span>
                <p>
                    Syncodéo est un platforme web permettant de regrouper code et vidéo dans une même platforme.<br />
                    Cette platforme a été developpé avec une autre personne (PENELON Pierre).<br />
                </p>
                <h2>Technologies utilisées</h2>
                <img width={'50%'} style={{ marginLeft: '8%' }} src={require("../../medias/img/syncodeo-techs.png")} />
            </div>
        )
    }
}