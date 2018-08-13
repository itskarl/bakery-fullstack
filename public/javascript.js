var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById('btn1').classList.remove('invis');
  document.getElementById('btn1').classList.add('animated');
  document.getElementById('btn1').classList.add('bounceInDown');

  setTimeout(function() {
    document.getElementById('btn2').classList.remove('invis');
    document.getElementById('btn2').classList.add('animated');
    document.getElementById('btn2').classList.add('bounceInDown');
  }, 500);

  setTimeout(function() {
    document.getElementById('btn3').classList.remove('invis');
    document.getElementById('btn3').classList.add('animated');
    document.getElementById('btn3').classList.add('bounceInDown');
  }, 1000);

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

    document.getElementById('btn1').classList.add('invis');
    document.getElementById('btn1').classList.remove('animated');
    document.getElementById('btn1').classList.remove('bounceInDown');

    document.getElementById('btn2').classList.add('invis');
    document.getElementById('btn2').classList.remove('animated');
    document.getElementById('btn2').classList.remove('bounceInDown');

    document.getElementById('btn3').classList.add('invis');
    document.getElementById('btn3').classList.remove('animated');
    document.getElementById('btn3').classList.remove('bounceInDown');

  }


}