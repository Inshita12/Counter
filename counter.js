// function dee(){
// var i=0;
// var interval=setInterval(function(){
//   var b=document.getElementById('write').value;
//   if(i>=b){
//     clearInterval(interval);
//   }
//   var a=document.querySelector('#abc').innerHTML=i;
//   i=i+1;
// },1000);
// }
{
  var outer=document.getElementById('current');
  var next=document.querySelector('.next');
  var i=1;
  function startCounter(){
    i=1;
      var a=document.querySelector('#abc').innerHTML=i-1;

    var interval=setInterval(function(){
      var b=document.getElementById('write').value;
      if(i>=b){
        clearInterval(interval);
      }
      var a=document.querySelector('#abcone').innerHTML=i;
      i=i+1;
      animate();
    },1000);
  }
  function animate(){
    next.classList.add('animate');
     // next.animate
    setTimeout(function(){

      var a=document.querySelector('#abc').innerHTML=i-1;
      next.classList.remove('animate');
    },500);
  }
}
