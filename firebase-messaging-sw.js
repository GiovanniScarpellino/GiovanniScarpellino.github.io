importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    projectId: "site-gio",
    messagingSenderId: "308696927982",
    apiKey: "AIzaSyCp2oflepmzh_izJueitbWW6Pyy02pqnuU",
    appId: "1:308696927982:web:2c9d61b2330d180bf7edff",
});

firebase.messaging();