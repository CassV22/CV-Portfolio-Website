/**Code for function to make the images on the abot page circle through; eventually modify to add animations
 * and remove the title for the last image in the sequence */

/**Function called carosuel gets all of the elements labeled abt_img, which is each image in the sequence; the elements
 * get stored in the array 'x'; for loop goes through each element and checks the display; if the display is currently 
 * set to none when the for loop reaches its position in the array, then the display will be changed to block */

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("abt_img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}