// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyB4Pfj-ETDoShEomPgJLwhAieqxX5jxNVw",
  authDomain:        "borreguito-push.firebaseapp.com",
  projectId:         "borreguito-push",
  storageBucket:     "borreguito-push.appspot.com",
  messagingSenderId: "1050243032967",
  appId:             "1:1050243032967:web:778188baaa30fbd1fcd522",
  vapidKey:          "BMswRbiMiMM4fR6CKmDvPMi12Fh56coE-Z_aOJYwZQeIyybyYFqaywcv6dpcCONTH07C_CcljvvjiPNmM26yB0c"
});

const messaging = firebase.messaging();

// Opcional: mostrar notificaciones personalizadas en segundo plano
messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: icon
  });
});
