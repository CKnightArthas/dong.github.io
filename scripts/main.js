let myImage = document.querySelector('img');
myImage.onclick = function(){
   let mySrc = myImage.getAttribute('src');
   if (mySrc == 'images/ipmc.png') {
       myImage.setAttribute('src', 'images/mozilla.png');
   } else {
       myImage.setAttribute('src', 'images/ipmc.png');
   }
}