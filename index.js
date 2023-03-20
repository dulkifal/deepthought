// toggle down arrow on click
 
function toggleDownArrow() {
  var downArrow = document.getElementById('arrow');
  
  downArrow.classList.toggle('up');
}

 function expandthis(){
  var ul = document.getElementById('expand');
  ul.classList.toggle('expand');
  // hide the one with id one
  var one = document.getElementById('one')
  one.classList.toggle('hide');
 }