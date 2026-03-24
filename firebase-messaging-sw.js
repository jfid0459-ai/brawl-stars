importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAnqXUdPWtXJKoxfV29xapEjwV-FsQzEas",
  authDomain: "brwsl-stars-landingue-pages.firebaseapp.com",
  projectId: "brwsl-stars-landingue-pages",
  storageBucket: "brwsl-stars-landingue-pages.firebasestorage.app",
  messagingSenderId: "554122864381",
  appId: "1:554122864381:web:f6487c4a551ebc8e3fc094"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
