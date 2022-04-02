import { getDatabase, get, set, child, ref} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyABSkhLtLKzRFRfM9Muj-2mugkXYYB1WBg",
    authDomain: "kwitter-6f2ad.firebaseapp.com",
    databaseURL: "https://kwitter-6f2ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f2ad",
    storageBucket: "kwitter-6f2ad.appspot.com",
    messagingSenderId: "93269943874",
    appId: "1:93269943874:web:8a45709174f8303fc12fdb",
    measurementId: "G-HZDVLTH66C"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();
  ref(db,"messages").on("value", function(snapshot) {
	data=snapshot.val();
  });

function addUser(){
    user_name=document.getElementById("username").value;
    localStorage.setItem("user_name",user_name);
    set(ref(db,"/people")({
        user_names: data+"<br>"+localStorage.getItem("user_name")
    }));
   window.location='kwitter_room.html';
}