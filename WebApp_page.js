var firebaseConfig = {
    apiKey: "AIzaSyDNsN4nv5O1aYswdadW648H_lbR2QCCx9k",
    authDomain: "chatbox-25f4d.firebaseapp.com",
    databaseURL: "https://chatbox-25f4d-default-rtdb.firebaseio.com",
    projectId: "chatbox-25f4d",
    storageBucket: "chatbox-25f4d.appspot.com",
    messagingSenderId: "1003133734426",
    appId: "1:1003133734426:web:9213b35f4c89658fc9cba3",
    measurementId: "G-N7Z2G63E4Z"
  };
  firebase.initializeApp(firebaseConfig);
  
  username = localStorage.getItem("UserName");
  room_name = localStorage.getItem("RoomName");
  document.getElementById("roomnameint").innerHTML = room_name;

  function logout() {
    localStorage.removeItem("UserName");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
  }

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        Like:0, Message:msg, Name:username,
      });
      document.getElementById("msg").value = "";
  }