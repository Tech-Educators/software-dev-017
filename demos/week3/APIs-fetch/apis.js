console.log("test");

//I want to get images from an external source (I don't have time to download them all) and I want them to be randomly selected

//I found an API. I read the documentation and I know where to find the data.
//This is the location (url) for the API data: https://randomfox.ca/floof/

//I need to connect with this API to get the data
async function getFoxes() {
  //fetch is a method whose argument is the location of the data
  const response = await fetch("https://randomfox.ca/floof/");
  //the response from the API takes longer than the browser takes to read my console log --> the browser gives me a promise!
  //To NOT get the promise, we need to tell the browser to wait until the response is ready, instead of throwing a promise
  console.log(response);
  //The Response we receive from the API needs translating (parsing) into a different structure --> JSON
  const data = await response.json();
  console.log(data);
  //Sometimes we might get too much data, and we need to filter it. This is called data wrangling!
  const wrangledData = data.image;
  console.log(wrangledData);
  //If you want to use this value outisde the function,
  return wrangledData;
}
getFoxes(); //it's a different picture for each call
getFoxes();

//===========================================
//You could use the data in the same way you used the data from your images array to create your thumbnails!
