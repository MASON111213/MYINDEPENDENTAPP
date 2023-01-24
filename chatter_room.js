const firebaseConfig = {
    apiKey: "AIzaSyAQKZ5-F2dkeUuDiF0dh32z58lA_4zDPSw",
    authDomain: "chatter-f095a.firebaseapp.com",
    databaseURL: "https://chatter-f095a-default-rtdb.firebaseio.com",
    projectId: "chatter-f095a",
    storageBucket: "chatter-f095a.appspot.com",
    messagingSenderId: "567831942212",
    appId: "1:567831942212:web:be2454686fa15392eb1811",
    measurementId: "G-T876MK1ZY0"
  };

  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "chatter_page.html";
}
