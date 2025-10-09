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
                    description: "Développement d'une application web pour centraliser et gérer les communications sortantes (Courrier, Email, SMS). Mise en place de l'intégration et du déploiement continus.",
                    techs: ["Symfony", "PHP", "MySQL", "RabbitMQ", "Docker", "GitLab CI", "Deployer"]
                }, {
                    label: "PIM (Product Information Management)",
                    description: "Création d'un PIM flexible et modulaire pour centraliser les informations produit. Conception de l'architecture pour un déploiement simplifié et scalable.",
                    techs: ["TypeScript", "PostgreSQL", "Redis", "Elasticsearch", "Docker"]
                }, {
                    label: "Plateforme collaborative",
                    description: "Conception et développement d'une application web collaborative pour la production de catalogues. Mise en place d'automatisations complexes avec InDesign Server et gestion de l'infrastructure auto-hébergée, renforçant mon expertise en DevOps.",
                    techs: ["AngularJS", "NodeJS", "Postgresql", "InDesign Server"]
                }, {
                    label: "Preppy Sport",
                    description: "Développement d'une marketplace mobile C2C pour articles de sport. Intégration avec un backend externe (Origami) et un CMS (Strapi).",
                    techs: ["React Native", "Expo", "Strapi", "OneSignal"]
                }]
            },
            {
                society: "Auto entreprise, Lingolsheim, France",
                date: "Décembre 2019+",
                projects: [{
                    label: "Havas Voyages",
                    description: "Plateforme web pour trouver des spécialistes du voyage. Moteur de recherche et formulaires de contact.",
                    techs: ["WordPress", "PHP", "JavaScript", "SCSS"]
                }, {
                    label: "Zestfully",
                    description: "Guide gastronomique intelligent avec recherche avancée et recommandations.",
                    techs: ["NuxtJS", "PostgreSQL", "Elasticsearch"]
                }]
            },
            {
                society: "Syncodeo association, Haywards Heath, Angleterre",
                date: "Octobre 2018 - Mars 2019",
                projects: [{
                    label: "Syncodeo",
                    description: "Plateforme d'e-learning synchronisant vidéo et éditeur de code. Déploiement sur Google Cloud Platform et mise en place du monitoring.",
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