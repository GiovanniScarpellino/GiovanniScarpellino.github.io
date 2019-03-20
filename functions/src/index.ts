import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemail from 'nodemailer';
const cors = require('cors')({ origin: true });
const serviceAccountKey = require('../serviceAccountKey.json');

let transporter = nodemail.createTransport({
    service: 'gmail',
    auth: {
        user: 'scarpellino.giovanni@gmail.com',
        pass: functions.config().email.pass,
    }
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    databaseURL: "https://site-gio.firebaseio.com",
});

const verifyAuth = async (authorization: string | undefined) => {
    if (!authorization) throw new functions.https.HttpsError('unauthenticated', "Your need to be login!");
    try {
        const data = await admin.auth().verifyIdToken(authorization.split('Bearer ')[1]);
        if (data.email !== functions.config().email.login) throw new functions.https.HttpsError('unauthenticated', "Your need to be login!");
    } catch{
        throw new functions.https.HttpsError('unauthenticated', "Your need to be login!");
    }
}

export const newMessage = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {

        const body: {
            userId: string;
            content: string,
            position: 'left' | 'right',
        } = req.body;

        if (body.position !== 'right') {
            await verifyAuth(req.headers.authorization);
        }

        let userId = body.userId;

        if (!userId) {
            const { key: _userId } = await admin.database().ref('/users').push();
            userId = _userId;
        };
        await admin.database().ref('/users/' + userId).child('messages').push({
            content: body.content,
            position: body.position,
            createdAt: Date.now(),
        });
        if (body.position === 'right') {
            await admin.database().ref('/token').on('value', async (snapshot) => {
                if (snapshot) {
                    await admin.messaging().sendToDevice(snapshot.val(), {
                        data: {},
                        notification: {
                            title: "Nouveau message!",
                            body: body.content,
                        }
                    });
                }
            });
        } else {
            admin.database().ref("/users/" + userId).child('email').on('value', async (snapshot) => {
                if (snapshot) {
                    let email = snapshot.val();
                    try {
                        await transporter.sendMail({
                            from: 'scarpellino.giovanni@gmail.com',
                            to: email,
                            subject: 'Nouvelle réponse de SCARPELLINO Giovanni!',
                            html: `Bonjour,<br/><br/>
Voici votre message précédent: ${req.body.lastMessage}<br/>
Voici ma réponse: ${req.body.content}<br/><br/>

Je vous remercie de m'avoir contacté! <br/>
Vous pouvez <a href='https://giovanniscarpellino.github.io'>cliquez-ici</a> pour visitez mon site web!
<br/><br/>
Cordialement,<br/>
SCARPELLINO Giovanni`,
                        });
                    } catch{ }
                }
            });
        }
        res.status(200).send(userId);
    });
});

export const addEmailToUser = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        if (!req.body.email) throw new functions.https.HttpsError('invalid-argument', "Email needs to be sent.");
        let userId = req.body.userId;
        if (userId) {
            await admin.database().ref('/users/' + userId).update({ email: req.body.email, });
        } else {
            const { key } = await admin.database().ref('/users').push({ email: req.body.email });
            userId = key;
        }
        res.status(200).send(userId);
    });
});

export const updateDeviceToken = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        await verifyAuth(req.headers.authorization);
        let fcmToken = req.body.fcmToken;
        if (!fcmToken) throw new functions.https.HttpsError('invalid-argument', "fcmToken needs to be sent.");
        await admin.database().ref('/token').set(fcmToken);
        res.status(200).send();
    });
});

export const newQuestion = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        if (!req.body.question) {
            throw new functions.https.HttpsError('invalid-argument', 'Question needs to be sent.');
        }
        await admin.database().ref('/faq').push({ question: req.body.question, response: '', email: req.body.email });
        await admin.database().ref('/token').on('value', async (snapshot) => {
            if (snapshot) {
                await admin.messaging().sendToDevice(snapshot.val(), {
                    data: {},
                    notification: {
                        title: "Nouvelle quéstion!",
                        body: req.body.question,
                    }
                });
            }
        });
        res.status(200).send();
    });
});

export const answerQuestion = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        await verifyAuth(req.headers.authorization);

        if (!req.body.id || !req.body.response || !req.body.question || req.body.visibleOnWeb === null) {
            throw new functions.https.HttpsError('invalid-argument', "Id, response, question and visibleOnWeb needs to be sent.");
        }
        await admin.database().ref('/faq/' + req.body.id).set({
            email: req.body.email,
            question: req.body.question,
            response: req.body.response,
            visibleOnWeb: req.body.visibleOnWeb,
        });
        if (req.body.email) {
            try {
                await transporter.sendMail({
                    from: 'scarpellino.giovanni@gmail.com',
                    to: req.body.email,
                    subject: 'Nouvelle réponse de SCARPELLINO Giovanni!',
                    html: `Bonjour,<br/><br/>
Voici votre précédente question: ${req.body.question}<br/>
Voici ma réponse: ${req.body.response}<br/><br/>

Je vous remercie de m'avoir contacté! <br/>
${req.body.visibleOnWeb ? `Vous pourrez voir votre question dans la FAQ de <a href='https://giovanniscarpellino.github.io'>mon site internet.</a>` :
                            `Vous pouvez <a href='https://giovanniscarpellino.github.io'>cliquez-ici</a> pour visitez mon site web!`}
<br/><br/>
Cordialement,<br/>
SCARPELLINO Giovanni`,
                });
            } catch{ }
        }
        res.status(200).send();
    });
});

export const setActiveUser = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        if (!req.body.id || req.body.state === null) {
            throw new functions.https.HttpsError('invalid-argument', "Id and state needs to be sent.");
        }
        await admin.database().ref('/users/' + req.body.id).update({ active: req.body.state });
        res.status(200).send();
    });
});