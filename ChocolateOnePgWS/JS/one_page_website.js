//this function opens the modal when one of the photos is clicked.

//Ultimately it comes down to creating an entire new element that contains the slideshow of images. 
//The CSS and JS change the display property of this new element (a modal) from none to block when it's open and the opposite when we want to close it. 
//Then the same goes for each slide (image) within the modal as the user presses the buttons or dots. I hope that helps clarify it a little. 

function openModal() {
    document.getElementById("myModal").style.display = "block"; //go in to the html document and get the element called "myModal". Change the style
    //of the element to filling the entire line. 
  }
  
  //this function closes the modal when the cross symbol is clicked. 

  function closeModal() {
    document.getElementById("myModal").style.display = "none"; //go in to html document and get element called "myModal" and don't display the modal
  }
  
  var slideIndex = 1; //declaring a variable called "slideIndex" and assigning it the value of "1"
  showSlides(slideIndex); // calling the function "show slide", and showing the first slide.
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  //this function shows the slide

  function showSlides(n) {
    var i; //declaring a variable called "i" (usually means "iteration")
    var slides = document.getElementsByClassName("mySlides"); //declaring a variable called "slides" and making it equal to the html element
    //called "mySlides" which is the photo with the number ie 1/4 in the corner
    var dots = document.getElementsByClassName("demo"); //declaring another variable called "dots" and making it equal to the html element
    //called "demo". This is the thumbnail photo.
    var captionText = document.getElementById("caption"); //declaring another variable called "captionText" and making it equal to the element
    //that has the "caption" ID.
    if (n > slides.length) {slideIndex = 1} //if the slide number is greater than the slide length, make the slide Index equal to the first slide.
    if (n < 1) {slideIndex = slides.length} //if the slide number is less than the slide length, make the slide index equal the slide length (4)
    for (i = 0; i < slides.length; i++) {//assigning the variable i (iteration to value 0). If i is less than the slides length (4) do the following:
        slides[i].style.display = "none"; //get the slide in the array with the value 0 and hide the slide.
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //replace the active string with an empty class name
    }
    slides[slideIndex-1].style.display = "block"; //display the slide as a "block element" (starts a new line and uses the full width of page)
    dots[slideIndex-1].className += " active"; // make the variable dots className equal to "active"
    captionText.innerHTML = dots[slideIndex-1].alt; // this instruction tells computer to change the html element with the ID "caption"
    // to the "alt" value (eg "mole") of the slide.
    
  }