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
                    label: "Hub de Communication (Graal)",
                    description: "Développement d'une application web pour <b>centraliser et gérer les communications sortantes</b> (Courrier, Email, SMS). Mise en place de l'<b>intégration et du déploiement continus</b>.",
                    techs: ["Symfony", "PHP", "MySQL", "RabbitMQ", "Docker", "GitLab CI", "Deployer"]
                }, {
                    label: "PIM (Product Information Management)",
                    description: "Création d'un PIM <b>flexible et modulaire</b> pour <b>centraliser les informations produit</b>. <b>Conception de l'architecture</b> pour un déploiement simplifié et scalable.",
                    techs: ["TypeScript", "PostgreSQL", "Redis", "Elasticsearch", "Docker"]
                }, {
                    label: "Plateforme collaborative",
                    description: "Conception et développement d'une <b>application web collaborative</b> pour la production de catalogues. Mise en place d'<b>automatisations complexes</b> avec InDesign Server et <b>gestion de l'infrastructure auto-hébergée</b>, renforçant mon expertise en <b>DevOps</b>.",
                    techs: ["AngularJS", "NodeJS", "Postgresql", "InDesign Server"]
                }, {
                    label: "Preppy Sport",
                    description: "Développement d'une <b>marketplace mobile C2C</b> pour articles de sport. <b>Intégration avec un backend externe</b> (Origami) et un <b>CMS</b> (Strapi).",
                    techs: ["React Native", "Expo", "Strapi", "OneSignal"]
                }]
            },
            {
                society: "Auto entreprise, Lingolsheim, France",
                date: "Décembre 2019+",
                projects: [{
                    label: "Havas Voyages",
                    description: "Plateforme web pour trouver des spécialistes du voyage. <b>Moteur de recherche</b> et formulaires de contact.",
                    techs: ["WordPress", "PHP", "JavaScript", "SCSS"]
                }, {
                    label: "Zestfully",
                    description: "<b>Guide gastronomique intelligent</b> avec <b>recherche avancée</b> et <b>recommandations</b>.",
                    techs: ["NuxtJS", "PostgreSQL", "Elasticsearch"]
                }]
            },
            {
                society: "Syncodeo association, Haywards Heath, Angleterre",
                date: "Octobre 2018 - Mars 2019",
                projects: [{
                    label: "Syncodeo",
                    description: "<b>Plateforme d'e-learning</b> synchronisant vidéo et éditeur de code. <b>Déploiement sur Google Cloud Platform</b> et <b>mise en place du monitoring</b>.",
                    techs: ["React", "Hapi", "MySQL", "Elasticsearch", "Redis", "Google Cloud", "Grafana", "Prometheus"]
                }]
            }
        ],
        skills: [
            { name: 'Git', level: 5 },
            { name: 'Docker', level: 5 },
            { name: 'NodeJS', level: 5 },
            { name: 'VueJS', level: 5 },
            { name: 'React', level: 5 },
            { name: 'PostgreSQL', level: 5 },
            { name: 'MySQL', level: 5 },
            { name: 'Linux', level: 4 },
            { name: 'GitLab CI', level: 4 },
            { name: 'PHP', level: 4 },
            { name: 'Symfony', level: 4 },
            { name: 'Redis', level: 4 },
            { name: 'Elasticsearch', level: 4 },
            { name: 'Firebase', level: 3 },
            { name: 'RabbitMQ', level: 3 },
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