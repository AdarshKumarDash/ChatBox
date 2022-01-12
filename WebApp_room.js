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
document.getElementById("usernamedisplay").innerHTML = "Welcome &nbsp;" + username + "!";

function addroom() {
  roomname = document.getElementById("input_roomname").value;
  firebase.database().ref("/").child(roomname).update({
    Purpose: "Adding Room"
  });
  localStorage.setItem("RoomName", roomname);
  window.location = "WebApp_page.html";
}

function getroom() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      room_names = childKey;
      row = "<div class = 'room_name' id = "+room_names+" onclick = 'redirectToRoomName(this.id)'>" +room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getroom();

function redirectToRoomName (name) {
  localStorage.setItem("Room Name - ", name);
  window.location = "WebApp_page.html";
}

function logout() {
  localStorage.removeItem("UserName");
  localStorage.removeItem("RoomName");
  window.location = "index.html";
}