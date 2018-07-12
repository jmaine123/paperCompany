
function autoScroll(){
  var x = event.target.classList[0]
  console.log(x)
  var elements = document.getElementsByClassName(x);
  var div = document.getElementsByClassName('container')[0];
  var topPos = elements[1].offsetTop;
  console.log(elements[1].offsetTop);
  div.scrollTo({left:0,top:topPos-125, behavior: 'smooth'});


  var currentActive = document.getElementsByClassName('active');
  currentActive[0].classList.remove('active');
  elements[0].classList.add('active');
}

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');

document.getElementsByTagName('h5').innerHTML = "Thank You " + firstName + " "+lastName + " we will be in touch!";
