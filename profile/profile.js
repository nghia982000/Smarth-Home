var logout=document.getElementById("logout");
var noidung1=document.getElementById("noidung1");
var noidung2=document.getElementById("noidung2");
var noidung3=document.getElementById("noidung3");
var noidung4=document.getElementById("noidung4");
var noidung5=document.getElementById("noidung5");

logout.onclick=function(){
	window.location.href="../home.html";
}
noidung1.onclick=function(){
	var x = document.getElementById("snackbar");
	x.innerHTML="Family Members"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
noidung2.onclick=function(){
	var x = document.getElementById("snackbar");
	x.innerHTML="Clip Storage"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
noidung3.onclick=function(){
	var x = document.getElementById("snackbar");
	x.innerHTML="Personal Information"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
noidung4.onclick=function(){
	var x = document.getElementById("snackbar");
	x.innerHTML="Security & Others"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
noidung5.onclick=function(){
	var x = document.getElementById("snackbar");
	x.innerHTML="Support Center"
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}