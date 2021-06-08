

function clock(){
  var Hours = document.getElementById("Hours");
  var Minutes = document.getElementById("Minutes");
  var Seconds = document.getElementById("Seconds");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  Hours.innerHTML = h;
  Minutes.innerHTML = m;
  Seconds.innerHTML = s;

}
var interval = setInterval(clock,1000);


const switchbtn = document.getElementById("switch");

switchbtn.addEventListener("click", ()=>{
  if(switchbtn.checked == true){
    document.body.setAttribute("data-theme","dark");
  }else{
    document.body.setAttribute("data-theme", "");
  }
});


$(window).on("load",()=>{
  $(".loader-wrapper").fadeOut("slow");
});




$(document).ready(function(){
  $('#menu-icon').click(function(){
    $(this).toggleClass('open');
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
  });
});


//bottom fixed nav bar

function active(e){
  let selected = document.querySelector(".wrapper i.active");
  let changespan = document.querySelector(".wrapper span");

  if(selected != null){
    selected.classList.remove("active");
  }
  const p = document.querySelector(".wrapper");
  const w = window.innerWidth;

  // console.log(window.innerWidth);
  // console.log(window.screen.width);
  // console.log(e.screenX);
  var position = "";
  if(e.toElement.classList.length > 2){

    e.target.classList.add("active");
     position = e.toElement.classList[2];
    console.log(e.toElement.classList,e,e.value);
  }
  if(position == "house"){
      changespan.style.left = "4%";
  }else if (position == "search") {
    changespan.style.left = "23%";
  }else if (position == "circle") {
    changespan.style.left = "42.5%";
  }else if (position == "heart") {
    changespan.style.left = "61.5%";
  }else if (position =="person") {
    changespan.style.left = "81.5%";
  }

}
