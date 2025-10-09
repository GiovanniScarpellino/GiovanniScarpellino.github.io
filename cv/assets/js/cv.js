let now = new Date();
let age = now.getFullYear() - 1997;

if((now.getMonth() <= 5) || (now.getMonth() <= 5 && now.getDate() < 19))
    age--;

const i18n = new VueI18n({
    locale: 'fr-FR',
    messages: {
      'en-US': {
        'self-employed': 'Self-employed',
        developper: "Fullstack developer",
        years: 'years',
        title_profile: 'Profile',
        profile: "Motivated, polyvalent and self-taught developer, new challenges and innovations passionate me. I love develop to help others, and move the world forward.",
        education: "education",
        phone: 'Phone',
        website: 'Website',
        linkedin: 'Go to my Linkedin',
        address: 'Address',
        projects: 'Projects',
        languages: 'Languages',
        english: 'English',
        england: 'England',
        french: 'French',
        skills: 'Skills',

        native: 'Native',
        upper_intermediate: 'Upper Intermediate',

        plateform: 'Web application that aims to make the collaboration easier to create paper catalogs.',
        desktop: 'MacOS and Window application that aims to easily open server link and execute Javascript for InDesign and PhotoShop.',
        dut: 'End of DUT internship (ESDI - Belfort)',
        syncodeo: 'A web application that aims to regroup codes and videos in the same platform to learn code easier.',
        zestfully: 'Guide which select only best restaurants for best moments.',
        bretzel_games: 'A lot of board game in real time website.',
        unity: 'Procedurally generated world with A* path finding implementation for player and ennemies movement.',
        qrun: 'Mobile App of treasure hunt. User scan a Qr code and the app give him an advice and tell  if the user is near of the hunted object or not.',
        flutter: 'Mobile App aims to answer to people who send me a message on',
        discord: 'A Discord bot to manage the company message application.',
        havas: 'Web site that reference specialists and filter them by location or specialities.',
        
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',

        dut_list_1: 'Interactive app powered by Unity displayed in real time employe informations of company in an 3D environment.',
        dut_list_2: 'We can move in the world with an Android App.',

        unity_video_game: 'Unity video game',
        app_qrun: 'Qrun Android Application',
        flutter_messages: 'Flutter messaging application',

        collaborative_plateform: 'Collaborative platform',
      },
      'fr-FR': {
        'self-employed': 'Auto entreprise',
        developper: "Fullstack développeur",
        years: 'ans',
        title_profile: 'Profil',
        profile: "Développeur informatique motivé, polyvalent et autodidacte. La découverte et l'innovation me passionnent. J'aime relever des défis et répondre aux problématiques de demain.",
        education: "formations",
        phone: 'Téléphone',
        website: 'Site web',
        linkedin: 'Se rendre sur mon linkedin',
        address: 'Adresse',
        projects: 'Projets',
        languages: 'Langues',
        english: 'Anglais',
        england: 'Angleterre',
        french: 'Français',
        skills: 'Compétences',

        native: 'Natif',
        upper_intermediate: 'C1',

        plateform: 'Application Web qui vise à faciliter la collaboration pour créer des catalogues papier.',
        desktop: 'Application MacOS et Windows qui vise à ouvrir facilement le lien du serveur et à exécuter Javascript pour InDesign et PhotoShop.',
        dut: 'Stage de fin de DUT Informatique (ESDI - Belfort)',
        syncodeo: 'Plateforme web permettant de regrouper code et vidéo dans une même plateforme dans le but de rendre l\'apprentissage du code plus accessible.',
        zestfully: 'Guide des meilleurs restaurants pour toutes les occasions.',
        bretzel_games: 'Plusieurs jeux de plateau refait en web et en temps réel.',
        unity: 'Monde généré de manière procédurale avec une implémentation de recherche de chemin A * pour le mouvement des joueurs et des ennemis.',
        qrun: 'Application de chasse au trésor. L\'utilisateur scanne un QR code et l\'application lui donne un indice et indique à combien de mètre est l\'objet à récupérer.',flutter: 'Application mobile permettant de répondre aux personnes qui envoient un message sur',
        discord: 'Un bot Discord pour gérer l\'application de messagerie de l\'entreprise.',
        havas: 'Site Web qui référence des spécialistes et les filtre par lieu ou par spécialités.',

        january: 'Janvier',
        february: 'Février',
        march: 'Mars',
        april: 'Avril',
        may: 'Mai',
        june: 'Juin',
        july: 'Juillet',
        august: 'Août',
        september: 'Septembre',
        october: 'Octobre',
        november: 'Novembre',
        december: 'Décembre',

        dut_list_1: 'Création d\'une application interactive sous Unity affichant en temps réel les informations des employés de l\'entreprise dans un environnement 3D.',
        dut_list_2: 'Possibilité d\'interaction avec une application Android.',

        unity_video_game: 'Jeu vidéo avec Unity',
        app_qrun: 'Application android QRun',
        flutter_messages: 'Application Flutter de messagerie',

        collaborative_plateform: 'Plateforme collaborative',
      }
    }
});

var app = new Vue({
    el: '#app',
    i18n,
    data: {
        age: age,
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