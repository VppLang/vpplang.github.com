// Title: Main.js Author: WittySmrik 

//First takes in the evt and pageName parameters to open the tab
function openTab(evt, pN){
  var i, tC, tL;
  tC = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tC.length; i++) {
    tC[i].style.display = "none";
  }
  tL = document.getElementsByClassName("tablinks");
  for (i = 0; i < tL.length; i++) {
    tL[i].className = tL[i].className.replace(" active", "");
  }
  document.getElementById(pN).style.display = "block";
  evt.currentTarget.className += " active";
}