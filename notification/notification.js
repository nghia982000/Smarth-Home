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
// --------------------------------------------------------------
firebase.database().ref("LightLV/").on("value",function(snapshot){
  var llv = snapshot.val();  
  document.getElementById("signalLV-1").innerHTML = llv;
});
firebase.database().ref("TelevisionLV/").on("value",function(snapshot){
  var tlv = snapshot.val();  
  document.getElementById("signalLV").innerHTML = tlv;
});
firebase.database().ref("FanLV/").on("value",function(snapshot){
  var flv = snapshot.val();  
  document.getElementById("signalLV-2").innerHTML = flv;
});
// --------------------------------------------------------
firebase.database().ref("TelevisionBE/").on("value",function(snapshot){
  var tbe = snapshot.val();  
  document.getElementById("signalBE").innerHTML = tbe;
});
firebase.database().ref("LightBE/").on("value",function(snapshot){
  var lbe = snapshot.val();  
  document.getElementById("signalBE-1").innerHTML = lbe;
});
firebase.database().ref("FanBE/").on("value",function(snapshot){
  var fbe = snapshot.val();  
  document.getElementById("signalBE-2").innerHTML = fbe;
});
firebase.database().ref("LampBE/").on("value",function(snapshot){
  var laBE = snapshot.val();  
  document.getElementById("signalBE-3").innerHTML = laBE;
});
firebase.database().ref("SpeakerBE/").on("value",function(snapshot){
  var sbe = snapshot.val();  
  document.getElementById("signalBE-4").innerHTML = sbe;
});
// --------------------------------------------------------------------------
firebase.database().ref("MicrowaveDI/").on("value",function(snapshot){
  var mdi = snapshot.val();  
  document.getElementById("signalDI").innerHTML = mdi;
});
firebase.database().ref("LightDI/").on("value",function(snapshot){
  var ldi= snapshot.val();  
  document.getElementById("signalDI-1").innerHTML = ldi;
});
firebase.database().ref("OvenDI/").on("value",function(snapshot){
  var odi = snapshot.val();  
  document.getElementById("signalDI-2").innerHTML = odi;
});
// ------------------------------------------------------------------
firebase.database().ref("HeaterBR/").on("value",function(snapshot){
  var hbr = snapshot.val();  
  document.getElementById("signalBR").innerHTML = hbr;
});
firebase.database().ref("LightBR/").on("value",function(snapshot){
  var lbr = snapshot.val();  
  document.getElementById("signalBR-1").innerHTML = lbr;
});
firebase.database().ref("FanBR/").on("value",function(snapshot){
  var fbr = snapshot.val();  
  document.getElementById("signalBR-2").innerHTML = fbr;
});
firebase.database().ref("BathtubBE/").on("value",function(snapshot){
  var bbr = snapshot.val();  
  document.getElementById("signalBR-3").innerHTML = bbr;
});
firebase.database().ref("SpeakerBR/").on("value",function(snapshot){
  var sbr = snapshot.val();  
  document.getElementById("signalBR-4").innerHTML = sbr;
});