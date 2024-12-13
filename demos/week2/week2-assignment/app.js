console.log("test");

//TODO: I want to store my images
const images = [
  { src: "url", alt: "a description of the image" },
  { src: "local relative path", alt: "a description of the image" },
  { src: "url", alt: "a description of the image" },
  { src: "local relative path", alt: "a description of the image" },
  { src: "url", alt: "a description of the image" },
];
//!commit your work!

//TODO: I want to create my thumbnail images
//STEP 1: Select the DOM element we are manipulating
//I need to select both the thumbnail container and the large image container

//Since creating the thumbnail images takes more than one step, what is the best way to write a block of code? A function!
//I want to resuse this function for all my images --> I need parameters

function createThumbnails(imagesArray) {
  //I need to create more than one thumbnail --> I can use a loop
  //You can use different ways to loop thorugh your array: for loop / forEach()
  //Inside the loop, we have a few steps to do:
  //create an image element
  //we need assign values to the image element properties
  //src = value
  //we also need to assign a value to the className property
  //we need add an event to the image elements we are creating here
  //we need to append the images to the thumbnail container
}
createThumbnails(images);

//!commit your work!

//TODO: I want to create my larger images
//The larger images will be created when the user triggers the thumbnail images event
//This function will be event handler for our images
function createLargeImagesHandler(largeImage) {
  //I want to remove the image that's in the full screen, and create a new image with new properties
  // largeImageContainer.innerHTML = null / ""
  //create an image element
  //assign values to the image element
  //add a className to style the large image
  //append the image to the largeImageContainer
}
//!we don't call the createLargeImagesHandler in here. It is an event handler!

//!commit your work!
