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
	x.innerHTML="Light ON"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"LightLV":"ON"})
}

function Turn_Off(){
	light.src = "../picture/light_off.png";
	var x = document.getElementById("snackbar");
	x.innerHTML="Light OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"LightLV":"OFF"
  })
	}

var tv = document.getElementById('tv');
function Turn_On_tv(){
	tv.src = "../picture/tv_on.png";
	var x = document.getElementById("snackbar");
		x.innerHTML="Television ON"
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		firebase.database().ref("/").update({"TelevisionLV":"ON"})
	}

function Turn_Off_tv(){
	tv.src = "../picture/tv_off.png";
	var x = document.getElementById("snackbar");
	x.innerHTML="Television OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	firebase.database().ref("/").update({"TelevisionLV":"OFF"})
	}

var fan = document.getElementById('fan');
function Turn_On_fan(){
	fan.src = "../picture/fan_on.png";
	var x = document.getElementById("snackbar");
	x.innerHTML="Fan ON"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	firebase.database().ref("/").update({"FanLV":"ON"})
	}

function Turn_Off_fan(){
	fan.src = "../picture/fan_off.png";
	var x = document.getElementById("snackbar");
	x.innerHTML="Fan OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	firebase.database().ref("/").update({"FanLV":"OFF"})
	}
// ------------------------------------------------------------------------------



