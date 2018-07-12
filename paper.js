alert('JavaScript is working')

function autoScroll(){
  var x = event.target.classList[0]
  console.log(x)
  var element = document.getElementsByClassName(x);
  console.log(element);
  element[1].scrollIntoView({behavior:"smooth"});

  var currentActive = document.getElementsByClassName('active')
  currentActive.classList.remove('active')

  element[0].classList.add('active')
}


// var title ="Munder Difflin Paper"
//
// typeWriter(){
// for(i =0 i < title.length; i++){
//   document.getElementById('sectionOne').innerHTML += title[i];
// }
// }
