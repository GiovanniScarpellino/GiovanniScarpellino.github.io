let now = new Date();
let age = now.getFullYear() - 1997;

if(now.getMonth() <= 5 && now.getDate() < 19)
    age--;

const i18n = new VueI18n({
    locale: 'en-US',
    messages: {
      'en-US': {
        developper: "developper",
        years: 'years',
        profil: "Motivated, polyvalent and self-taught developer, new challenges et innovations passionate me. I love develop to help others, and move the world forward.",
        education: "education",
        phone: 'Phone',
        website: 'Website',
        linkedin: 'Go to my Linkedin',
        address: 'Address',
        projects: 'Projects',
        languages: 'Languages',
        english: 'English',
        skills: 'Skills',

        dut: 'End of DUT internship (ESDI - Belfort)',
        syncodeo: 'Website aims to regroup codes and videos in the same platform to learn code easier.',
        zestfully: 'Guide which select only best restaurants for best moments. First in london, then in all over the world.',
        bretzel_games: 'A lot of board game in real time website.',
        unity: 'Video games with pathfinding to move the player',
        qrun: 'Mobile App of treasure hunt. User scan a Qr code and the app give him an advice and tell  if the user is near of the hunted object or not.',
        flutter: 'Mobile App aims to answer to people who send me a message on',
        
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

        dut_list_1: 'Interactive app build by Unity displayed in real time employe informations of company in an 3D environment.',
        dut_list_2: 'We can move in the world with an Android App.',

        unity_video_game: 'Unity video game',
        app_qrun: 'Qrun Android Application',
        flutter_messages: 'Flutter messaging application',
      },
      'fr-FR': {
        developper: "développeur",
        years: 'ans',
        profil: "Dévelopeur informatique motivioné, polyvalent et autodidacte. La découverte et l'innovation me passionnent. J'aime relever des défis et répondre aux problématiques de demain.",
        education: "formations",
        phone: 'Téléphone',
        website: 'Site web',
        linkedin: 'Se rendre sur mon linkedin',
        address: 'Adresse',
        projects: 'Projets',
        languages: 'Langues',
        english: 'Anglais',
        skills: 'Compétences',

        dut: 'Stage de fin de DUT Informatique (ESDI - Belfort)',
        syncodeo: 'Plateforme web permettant de regrouper code et vidéo dans une même plateforme dans le but de rendre l\'apprentissage du code plus accessible.',
        zestfully: 'Guide des meilleurs restaurants pour toutes les occasions. Premièrement à Londres, puis à travers le monde!',
        bretzel_games: 'Plusieurs jeux de plateau refait en web et en temps réel.',
        unity: 'Jeu vidéo avec du Pathfinding pour déplacement de personnes.',
        qrun: 'Application de chasse au trésor. L\'utilisateur scanne un QR code et l\'application lui donne un indice et indique à combien de mètre est l\'objet à récupérer.',flutter: 'Application mobile permettant de répondre aux personnes qui envoient un message sur',

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
      }
    }
});

var app = new Vue({
    el: '#app',
    i18n,
    data: {
        age: age,
    }
});