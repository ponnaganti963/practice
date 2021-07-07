
function clicked(){
  var l = document.querySelector('#btn');
   l.innerHTML = (+l.innerHTML) + 1;
}

var l = '4';
var a =  ['1','2','3','6','9','8','7','4'];
var b =  ['1','2','3','6','9','8','7','4'];

var rotate = ()=>{
  for(let i= 7;i>0;i--){
    a[i] = a[i-1];
  }
  a[0] = l;
  l = a[7];

  for(let j=0; j<8; j++){
    document.querySelector('#btn'+ b[j]).innerHTML = a[j];

  }
}

var opr = "";
var screen = document.querySelector(".res");

screen.value = "";

var btnclick = document.querySelectorAll('.btnss button');
console.log(btnclick);
for(let v of btnclick){

  v.addEventListener("click", (e)=>{
    console.log(v.id,v.innerHTML);
    if(v.id != "btnClr" && v.id != "btnEql"){
      screen.value += v.innerHTML;

      if(v.id != "btn0" && v.id != "btn1"){
        opr = v.innerHTML;
      }
      console.log(screen.value);
    }else if (v.id == "btnEql") {
      var str = screen.value.split(opr);
      var op1 = str[0];
      var op2 = str[1];

      screen.value = (~~eval(parseInt(op1,2)+opr +  parseInt(op2,2))).toString(2);
      opr = "";
    }else if (v.id == "btnClr") {
      screen.value = "";
      opr = "";
    }


  })
}

//
// for(let v of btnclick){
//   if(v.id != "btnClr" && v.id != "btnEql"){
//     screen.innerHTML += v.innerHTML;
//
//     if(v.id != "btn0" && v.id != "btn1"){
//       opr = v.innerHTML;
//     }
//   }else if (v.id == "btnEql") {
//     var str = screen.innerHTML.split(opr);
//     var op1 = str[0];
//     var op2 = str[1];
//
//     screen.innerHTML = (~~eval(parseInt(op1,2)+opr +  parseInt(op2,2))).toString(2);
//     opr = "";
//   }else if (v.id == "btnClr") {
//     screen.innerHTML = "";
//     opr = "";
//   }
//
//
//
// }

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
