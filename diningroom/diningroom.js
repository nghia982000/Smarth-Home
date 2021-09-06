var firebaseConfig = {
    apiKey: "AIzaSyCH556rK1wbE0Xw1AbDw25RMYqXaK9xngE",
    authDomain: "smarthome-604f2.firebaseapp.com",
    databaseURL: "https://smarthome-604f2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smarthome-604f2",
    storageBucket: "smarthome-604f2.appspot.com",
    messagingSenderId: "1045127815633",
    appId: "1:1045127815633:web:3b441eaefeb1337bce80f0",
    measurementId: "G-6RDP24BEYZ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var back=document.getElementById("back");
back.onclick=function(){
	window.location.href="../home.html";
}






var light = document.getElementById('light');
function Turn_On(){
light.src = "../picture/light_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Light ON";
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"LightDI":"ON"
  })
}
function Turn_Off(){
light.src = "../picture/light_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Light OFF";
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"LightDI":"OFF"
  })
}
var microwave = document.getElementById('microwave');
function Turn_On_microwave(){
microwave.src = "../picture/microwave_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Microwave ON";
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"MicrowaveDI":"ON"
  })
}
function Turn_Off_microwave(){
microwave.src = "../picture/microwave_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Microwave OFF";
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"MicrowaveDI":"OFF"
  })
}
var oven = document.getElementById('oven');
function Turn_On_oven(){
oven.src = "../picture/oven_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Oven ON";
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"OvenDI":"ON"
  })
}
function Turn_Off_oven(){
oven.src = "../picture/oven_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Oven OFF";
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"OvenDI":"OFF"
  })
}