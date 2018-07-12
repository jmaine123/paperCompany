alert('JavaScript is working')

function autoScroll(){
  var x = event.target.classList[0]
  console.log(x)
  var elements = document.getElementsByClassName(x);
  var div = document.getElementsByClassName('container')[0];
  var topPos = elements[1].offsetTop;
  console.log(elements[1].offsetTop);
  div.scrollTo(0,topPos-100);

  var currentActive = document.getElementsByClassName('active')
  currentActive[0].classList.remove('active')

  elements[0].classList.add('active')
}


// var title ="Munder Difflin Paper"
//
// typeWriter(){
// for(i =0 i < title.length; i++){
//   document.getElementById('sectionOne').innerHTML += title[i];
// }
// }
