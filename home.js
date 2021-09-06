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

var notificatione=document.getElementById("notification");
var profile =document.getElementById("profile");
var livingroom=document.getElementById("livingroom");
var bedroom=document.getElementById("bedroom");
var diningroom=document.getElementById("diningroom");
var bathroom=document.getElementById("bathroom");

var today= new Date();
var  date = 'Ngày '+today.getDate()+' tháng '+(today.getMonth()+1)+' năm '+today.getFullYear();
document.getElementById("date").innerHTML=date;



notification.onclick=function(){
	window.location.href="./notification/notification.html";
}
profile.onclick=function(){
	window.location.href="./profile/profile.html";
}
livingroom.onclick=function(){
	window.location.href="./livingroom/livingroom.html";
}
bedroom.onclick=function(){
  window.location.href="./bedroom/bedroom.html";
}
diningroom.onclick=function(){
  window.location.href="./diningroom/diningroom.html";
}
bathroom.onclick=function(){
  window.location.href="./bathroom/bathroom.html";
}

// -----------------------------------------------------------------------
firebase.database().ref("TemperatuneTP/").on("value",function(snapshot){
  var ndtp = snapshot.val();  
  document.getElementById("temp").innerHTML = ndtp;
});
firebase.database().ref("Temperatune/").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("sensible").innerHTML = nd;
});
firebase.database().ref("Humidity/").on("value",function(snapshot){
  var da = snapshot.val();  
  document.getElementById("humidity").innerHTML = da;
});
// -------------------------------------------------------------------