// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA0ZuS8wTVo1P8q9qOy0QScpI2el6wnRN8",
  authDomain: "counion-22627.firebaseapp.com",
  databaseURL: "https://counion-22627-default-rtdb.firebaseio.com",
  projectId: "counion-22627",
  storageBucket: "counion-22627.appspot.com",
  messagingSenderId: "417520532568",
  appId: "1:417520532568:web:223ca36c568bce02879e2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//codeing part

// let's code 
var datab = firebase.database().ref('users');

const auth = firebase.auth();


// ..........................
// sending email from user to counionofficial
function sendmail() {

  var name = $('#iname').val();
  var email = $('#iemail').val();


  var body = '<center> CO_UNION ❤️ </center> <br><br><br><b>Name 👨 : </b> ' + name + '<br><br><b>Email 📧 :</b> ' + email + '<br><br><b> you have been registerd successfully to counion </center>';

  Email.send({
    SecureToken: "25267947-f0e7-4c31-922b-999d78e162bc ",
    To: email,
    From: "counionofficial@gmail.com",
    Subject: "THANK YOU FOR REGISTERING CO-UNION✔️  : " + name,
    Body: body,
  }).then(

    message => {
      if (message == 'OK') {

        // swal("check your mail 👍", "thank you for registering as a co-union member", "success");
        UserRegister();
        return false;
      }
    }
  ).catch((error) => {
    console.error(error);
    swal("Oops..... ❎", "you have enterd a wrong email", "error");

  });
}



//validation for signup forn input
function valid() {

  var UserName = document.getElementById('iname').value;
  var Email = document.getElementById('iemail').value;
  var password = document.getElementById('ipassword').value;
  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
  var Namevalid = /^[A-Za-z]{3,30}[0-9]{0,3}$/;
  var Emailvalid = /^[A-Za-z\._\-[0-9]+[@][A-Za-z]+[\.]["com","co","in",\.,"edu",org]{2,6}$/;


  if (UserName.replace(" ").length <= 0) {
    document.getElementById('iname').style.border = "red";
    swal("Empty Field❎", "All Fields  Mandatory   Please Enter a required details", "error");
    return false;
  }
  if (Email.replace(" ").length <= 0) {
    swal("Empty Field❎", "All Fields  Mandatory   Please Enter a required details", "error");
    return false;
  } if (password.replace(" ").length <= 0) {
    swal("Empty Field❎", "All Fields  Mandatory   Please Enter a required details", "error");
    return false;
  }
  if (!Email.match(Emailvalid)) {
    swal("Invalid Email❎", "Enter a Valid Email", "error");
    return false;
  }

  if (password.length <= 7) {
    swal("Password should be above 8 characters", "Enter a valid Phone Number", "warning");
    return false;
  }

  if (!UserName.match(Namevalid)) {
    swal("Invalid UserName❎", "Enter a valid UserName", "error");
    return false;
  }
  else {

    sendmail();

  }
}


//storing data to firebase real time database function
function datasaver() {

  document.getElementById('form').addEventListener('submit', (e) => {
    var name = document.getElementById("iname").value;
    e.preventDefault();
    var userInfo = datab.push("");
    userInfo.set({
      name: getId('iname'),
      email: getId('iemail'),
      password: getId('ipassword')
    });
    swal("Thank you 🤝" + name, "Successfully Registerd", "success");

    container.classList.remove("sign-up-mode");
    document.getElementById('form').reset();



  });
  function getId(id) {
    return document.getElementById(id).value;
  }

}

//validation for login forn input

// ......................
//signup function

function UserRegister() {

  var email = document.getElementById('iemail').value;
  var password = document.getElementById('ipassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    datasaver();

  })
    .catch((error) => {
      var errorcode = error.code;
      var errormsg = error.message;
      swal("your are a member of counion", "Please Check your credentials " + errorcode, "success");

    });



}


//signin function
function SignIn() {
  var uname = document.getElementById('iname').value;
  var email = document.getElementById('iemail1').value;
  var password = document.getElementById('ipassword1').value;
  if (email.replace(" ").length <= 0) {
    swal("Empty Field❎", "All Fields  Mandatory   Please Enter a required details", "error");
    return false;
  }
  if (password.replace(" ").length <= 0) {
    swal("Empty Field❎", "All Fields  Mandatory   Please Enter a required details", "error");
    return false;
  }
  // console.log(email);
  auth.signInWithEmailAndPassword(email, password)

    .then(() => {

      swal("Welcome🤝 " + email, "Successfully LogdIn", "success");
      var eemail= window.sessionStorage.setItem('Useremail',email)
      setTimeout(() => {
        window.location.replace("http://localhost/COUNION%20PROJECT/html/select.html");
        // window.localStorage.clear();
      }, 3000)

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      swal("📵" + errorMessage, "Please Check your credentials", "error");
      mail();

      function mail() {

        // var name = $('#iname').val();
        var email = $('#iemail1').val();


        var body =  '<br><br><b>Email 📧 :</b> ' + email + '<br><br><b> user enterd wrong password </center>';

        Email.send({
          SecureToken: "25267947-f0e7-4c31-922b-999d78e162bc ",
          To: "counionusers@gmail.com",
          From: "counionofficial@gmail.com",
          Subject: "Enterd wrong password✔️  : " + email,
          Body: body,
        }).then(

          message => {
            if (message == 'OK') {
              swal("wrong password", "your email may be blocked temporarly", "error");
            }
          }
        ).catch((error) => {
          console.error(error);
          swal("Oops..... ❎", "you have enterd a wrong email", "error");

        });
      }


    });

}
// twitter sigup
function twitterup() {
  // var provider = new firebase.auth.TwitterAuthProvider();
  // firebase.auth().useDeviceLanguage();
  // firebase.auth().signInWithPopup(provider).then(function (result) {

  //   var token = result.credential.accessToken;
  //   // console.log(token);
  //   var secret = result.credential.secret;
  //   // console.log(secret);
  //   // The signed-in user info.

  //   var user = result.user;
  //   console.log(user.email);

  // });
  swal("Welcome🤝 " , "Successfully sigup from twitter", "success");
  container.classList.remove("sign-up-mode");
}

// twitter sigin
function twitterin(){
  // var provider = new firebase.auth.TwitterAuthProvider();
  // firebase.auth().useDeviceLanguage();
  // firebase.auth().signInWithPopup(provider).then(function (result) {
    
    
    swal("Welcome🤝 ", "Successfully logdin from twitter", "success");
   
    setTimeout(() => {
      window.location.replace("http://localhost/COUNION%20PROJECT/html/select.html");
    
    }, 3000)
    
  // });
}


//google sigin
function google1(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  swal("SignUp succesfull🤝 ", "Successfully login from from google", "success");
  container.classList.remove("sign-up-mode");
}

//google sigin
function google(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // console.log(credential);

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // console.log(token);
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  swal("Welcome🤝 " , "Successfully login from from google", "success");
  setTimeout(() => {
    window.location.replace("http://localhost/COUNION%20PROJECT/html/select.html");
    
  }, 3000)

}


// firebase   facebook auth()
// facebook signup
function facebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile,email');
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then((result) => {
    var token = result.credential.accessToken;

    var user = result.user;
    console.log(user);
    console.log(user.email)
    var username = user.displayName;
    swal("Welcome🤝 " + username, "Successfully signup from facebook", "success");
    container.classList.remove("sign-up-mode");

  });
}

function facebooklogin() {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile,email');
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then((result) => {
    var token = result.credential.accessToken;

    var user = result.user;
    console.log(user);
    console.log(user.email)
    var username = user.displayName;
    swal("Welcome🤝 " + username, "Successfully logdin from facebook", "success");
    container.classList.remove("sign-up-mode");
     window.sessionStorage.setItem("facebookimage", user.photoURL);
     window.sessionStorage.setItem("facebookemail", user.email);
    window.sessionStorage.setItem("facebookdisplayname", user.displayName);
     window.sessionStorage.setItem("facebookprofile", user.public_profile);

    setTimeout(() => {
      window.location.replace("http://localhost/COUNION%20PROJECT/html/select.html");
      // window.localStorage.clear();
    }, 3000)
  });
}