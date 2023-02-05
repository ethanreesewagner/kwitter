var firebaseConfig = {
  apiKey: "AIzaSyABSkhLtLKzRFRfM9Muj-2mugkXYYB1WBg",
  authDomain: "kwitter-6f2ad.firebaseapp.com",
  databaseURL: "https://kwitter-6f2ad-default-rtdb.firebaseio.com",
  projectId: "kwitter-6f2ad",
  storageBucket: "kwitter-6f2ad.appspot.com",
  messagingSenderId: "93269943874",
  appId: "1:93269943874:web:8a45709174f8303fc12fdb",
  measurementId: "G-HZDVLTH66C"
};

firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
