let type = env.get('type');
let entity = flow.get('$parent.entity');
const game = global.get('game');
const entityDifficulties = global.get(type + 'Difficulties')[game.language || "fr"];
const difficulties = ["easy", "medium", "hard"];
const difficulty = difficulties.indexOf(game.difficulty) + 1;

if(!entity){
    entity = JSON.parse(JSON.stringify(global.get(type)))[game.language || "fr"];
    flow.set('$parent.entity', entity);
}

let symboles = global.get('symboles');
let themes = Object.keys(entity).filter(theme => !theme.startsWith('_PERSO_') && theme.length && (entityDifficulties ? entityDifficulties[theme] === difficulty : true));

themes.sort(() => 0.5 - Math.random());
symboles.sort(() => 0.5 - Math.random());

if(themes.length < 4){
    const allThemes = Object.keys(entity).filter(theme => theme.length && !themes.includes(theme));
    for(let index = themes.length; index < 4; index++){
        const indexRandom = Math.ceil(Math.random() * allThemes.length);
        themes.push(allThemes[indexRandom]);
    }
}

flow.set('$parent.questions', undefined);

let sorter;
switch(type){
    case "quizz":
        if(game.settings.themes.length){
            themes.push(...Object.keys(entity).filter(theme => game.settings.themes.find(dossier => dossier === theme)).map(theme => theme.replace('_PERSO_', '').trim()));
            
            themes.sort((a, b) => game.settings.themes.map(theme => theme.replace('_PERSO_', '').trim()).includes(a) ? -1 : 1);
        }
        break;
    case "blindtest":
        if(game.settings.dossiers.length){
            themes.push(...Object.keys(entity).filter(theme => game.settings.dossiers.find(dossier => dossier === theme)).map(theme => theme.replace('_PERSO_', '').trim()));
            
            themes.sort((a, b) => game.settings.dossiers.map(theme => theme.replace('_PERSO_', '').trim()).includes(a) ? -1 : 1);
        }
        break;
}

msg.payload = [];
for(let i = 0; i < 4; i++){
    msg.payload[i] = {
        type: 'theme',
        value: themes[i],
        symbole: symboles[i],
    }
}

msg.topic = "COMMIT";
msg.name = "setThemes";

return msg;
