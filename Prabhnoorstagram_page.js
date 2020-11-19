var firebaseConfig = {
      apiKey: "AIzaSyDO-Lsavn0AmfeSCEtvP-tBTA4n1U1YJww",
      authDomain: "prabhnoorstagram.firebaseapp.com",
      databaseURL: "https://prabhnoorstagram.firebaseio.com",
      projectId: "prabhnoorstagram",
      storageBucket: "prabhnoorstagram.appspot.com",
      messagingSenderId: "512481391020",
      appId: "1:512481391020:web:8c7522fd6b60c3abed8a09",
      measurementId: "G-D7Z0KGS5HM"
};
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            Name: user_name,
            Message: message,
            Like: 0
      });
      document.getElementById("message").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}