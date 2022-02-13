// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    projectId: "site-gio",
    messagingSenderId: "308696927982",
    apiKey: "AIzaSyCp2oflepmzh_izJueitbWW6Pyy02pqnuU",
    appId: "1:308696927982:web:2c9d61b2330d180bf7edff",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = { body: payload.notification.body, icon: '/logo.png' };

    self.registration.showNotification(notificationTitle, notificationOptions);
});