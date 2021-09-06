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
var slider = document.getElementById("slider01");
var light01 = document.getElementById("light01");
var slide_val = document.getElementById("slide_val")
function Turn_On(){
light.src = "../picture/light_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Light ON"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"LightBR":"ON"
  })
}
function Turn_Off(){
light.src = "../picture/light_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Light OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"LightBR":"OFF"
  })
}
var heater = document.getElementById('heater');
function Turn_On_heater(){
heater.src = "../picture/heater_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Heater ON"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"HeaterBR":"ON"
  })
}
function Turn_Off_heater(){
heater.src = "../picture/heater_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Heater OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"HeaterBR":"OFF"
  })
}
var fan = document.getElementById('fan');
function Turn_On_fan(){
fan.src = "../picture/fan_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Fan ON"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"FanBR":"ON"
  })
}
function Turn_Off_fan(){
fan.src = "../picture/fan_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Fan OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"FanBR":"OFF"
  })
}
slider.oninput = function() {
light01.style.opacity = slider.value/10;
slide_val.innerHTML = slider.value;
};

var bathtub = document.getElementById('bathtub');
function Turn_On_bathtub(){
bathtub.src = "../picture/bathtub_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Bathtub ON"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"BathtubBR":"ON"
  })
}
function Turn_Off_bathtub(){
bathtub.src = "../picture/bathtub_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Bathtub OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"BathtubBR":"OFF"
  })
}
var speaker = document.getElementById('speaker');
function Turn_On_speaker(){
speaker.src = "../picture/speaker_on.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Speaker ON"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"SpeakerBR":"ON"
  })
}
function Turn_Off_speaker(){
speaker.src = "../picture/speaker_off.png";
var x = document.getElementById("snackbar");
	x.innerHTML="Speaker OFF"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 	firebase.database().ref("/").update({"SpeakerBR":"OFF"
  })
}