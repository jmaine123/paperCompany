alert('JavaScript is working')

function autoScroll(){
  var x = event.target.classList[0]
  console.log(x)
  var element = document.getElementsByClassName(x);
  console.log(element);
  element[1].scrollIntoView(true);

  var currentActive
}
