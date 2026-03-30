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

// Hada howa l-code li kay-gérer l-click bach yft7 l-lien w maykhelich msg yji m3awd
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  let urlToOpen = "https://jfid0459-ai.github.io/brawl-stars/"; // Lien par défaut
  
  // Kanjbdou l-link mn Firebase Console
  if (event.notification.data && event.notification.data.FCM_MSG && event.notification.data.FCM_MSG.data && event.notification.data.FCM_MSG.data.link) {
      urlToOpen = event.notification.data.FCM_MSG.data.link;
  } else if (event.notification.data && event.notification.data.link) {
      urlToOpen = event.notification.data.link;
  }

  event.waitUntil(
    clients.openWindow(urlToOpen)
  );
});
