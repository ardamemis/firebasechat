$(document).ready(function(){

    var firebaseConfig = {
        apiKey: "AIzaSyD8fzmX1SQK261tilmjZoqapUADsib_2UQ",
        authDomain: "ninthapp-aae3d.firebaseapp.com",
        databaseURL: "https://ninthapp-aae3d.firebaseio.com",
        projectId: "ninthapp-aae3d",
        storageBucket: "ninthapp-aae3d.appspot.com",
        messagingSenderId: "370611217911",
        appId: "1:370611217911:web:fff0b912fbd5f121f83af2"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


    $("#registerBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
                        window.location.href = "index.html";
                    })

            }).catch(function(error){
                alert(error.message);
        })

    })


})
