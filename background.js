// background.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js');

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig);

function saveEmailToFirebase(emailContent) {
    const db = firebase.database();
    const ref = db.ref('spam_emails');

    ref.push({
        text: emailContent,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        console.log("Email saved to Firebase.");
    }).catch((error) => {
        console.error("Error saving email: ", error);
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'saveEmail') {
        saveEmailToFirebase(request.emailContent);
        sendResponse({ status: 'success' });
    }
});
