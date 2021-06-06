

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
  console.log(p.screenX);
  const w = window.innerWidth;
  console.log(window.innerWidth);
  console.log(window.screen.width);
  console.log(e.screenX);
  e.target.classList.add("active");
  if(e.screenX >=w*9/100  && e.screenX <= w*9/100 + 30){
      changespan.style.left = "4%";
  }else if (e.screenX >= w*27.5/100 && e.screenX <= w*29/100+ 30) {
    changespan.style.left = "23%";
  }else if (e.screenX >= w*46.6/100 && e.screenX <= w*49/100 + 30) {
    changespan.style.left = "42.5%";
  }else if (e.screenX >= w*65.6/100 && e.screenX <= w*69/100 + 30) {
    changespan.style.left = "61.5%";
  }else if (e.screenX >= w*85.4/100 && e.screenX <= w*89/100 + 30) {
    changespan.style.left = "81.5%";
  }

}
