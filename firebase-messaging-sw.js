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

// 1. Hna kanchddou l-msg o kantsn3ou l-notification
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  
  const notificationOptions = {
    body: payload.notification.body,
    // HADI HIYA LI NA9SA 3NDK (katjbd l-link o katkhb3o f notification)
    data: payload.data 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 2. Hna kan-gérer l-click 3la l-notification
self.addEventListener('notificationclick', function(event) {
  // Sed l-notification fach kykliqui 3liha l-user
  event.notification.close();

  // Kanjbdou l-link li khba3na f l-khatwa 1, awla kandiro lien par défaut
  let urlToOpen = "https://jfid0459-ai.github.io/brawl-stars/"; // Lien par défaut
  
  if (event.notification.data && event.notification.data.link) {
      urlToOpen = event.notification.data.link;
  }

  // Kanft7ou l-page fl-navigateur f tab jdida
  event.waitUntil(
    clients.openWindow(urlToOpen)
  );
});
