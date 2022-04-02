
db=getDatabase();

function getData(){set(ref(db, 'text/'), {
      texts: child(get(ref(db, 'text/')))+"<br>"+x
    });
getData();
}
function logout(){
  firebase.auth().signOut();
  location.replace('kwitter.html');
}

function create_room(){
      room_name = document.getElementById("room_name").value;
      set(ref(db,"room/"+room_name+'/'), {
      room_name: room_name
      });
      window.location='kwitter_room.html';
}