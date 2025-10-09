let now = new Date();
let age = now.getFullYear() - 1997;

if ((now.getMonth() <= 5) || (now.getMonth() <= 5 && now.getDate() < 19))
    age--;

var app = new Vue({
    el: '#app',
    data: {
        age: age,
        experiences: [
            {
                society: "Reymann / Sprey, Illkirch, France",
                date: "Juin 2019 - Septembre 2025",
                projects: [{
                    label: "Plateforme collaborative",
                    description: "Application Web qui vise à faciliter la collaboration pour créer des catalogues papier.",
                    techs: ["AngularJS", "NodeJS", "Postgresql"]
                }, {
                    label: "Plateforme collaborative",
                    description: "Application Web qui vise à faciliter la collaboration pour créer des catalogues papier.",
                    techs: ["AngularJS", "NodeJS", "Postgresql"]
                }, {
                    label: "Electron App",
                    description: "Application MacOS et Windows qui vise à ouvrir facilement le lien du serveur et à exécuter Javascript pour InDesign et PhotoShop.",
                    techs: ["NodeJS", "TypeScript", "VueJS"]
                }, {
                    label: "Discord Bot",
                    description: "Un bot Discord pour gérer l'application de messagerie de l'entreprise.",
                    techs: ["NodeJS"]
                }]
            },
            {
                society: "Auto entreprise, Lingolsheim, France",
                date: "Décembre 2019+",
                projects: [{
                    label: "Havas Voyage",
                    description: "Site Web qui référence des spécialistes et les filtre par lieu ou par spécialités.",
                    techs: ["Wordpress", "HTML", "Javascript", "SCSS"]
                }, {
                    label: "Zestfully",
                    description: "Guide des meilleurs restaurants pour toutes les occasions.",
                    techs: ["NuxtJS", "NodeJS", "Postgresql", "Elasticsearch"]
                }]
            },
            {
                society: "Syncodeo association, Haywards Heath, Angleterre",
                date: "Octobre 2018 - Mars 2019",
                projects: [{
                    label: "Syncodeo",
                    description: "Plateforme web permettant de regrouper code et vidéo dans une même plateforme dans le but de rendre l'apprentissage du code plus accessible.",
                    techs: ["React", "Express", "Postgresql", "Elasticsearch"]
                }]
            }
        ],
        skills: [
            { name: 'Git', level: 5 },
            { name: 'NodeJS', level: 5 },
            { name: 'VueJS', level: 5 },
            { name: 'React/React native', level: 5 },
            { name: 'PostgreSQL', level: 5 },
            { name: 'MySQL', level: 5 },
            { name: 'WordPress', level: 5 },
            { name: 'PHP', level: 4 },
            { name: 'Symfony', level: 4 },
            { name: 'Docker', level: 4 },
            { name: 'Linux', level: 4 },
            { name: 'Java', level: 3 },
            { name: 'C#', level: 3 },
            { name: 'Python', level: 3 },
        ]
    },
    computed: {
        sortedSkills() {
            return [...this.skills].sort((a, b) => b.level - a.level);
        }
    }
});