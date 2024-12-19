console.log("This is connected correctly");

// We have to store some global values!
let cookieCount = 0;
let cookiesPerSecond = 0;
//You can start your game with having no cookies added to you total each second, OR you can start with adding 1 cookie per secong. Its up to you!

let gameData = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};

//You can also store these values inside a neat and tidy object that contains all your game data!

const shopUpgradesArray = [];
//This is an empty array! Hoo-array! Maybe we should fill it with the upgrades from our API?!?!?!

//DOM manipulation
// Select the DOM elements (buttons, imgs, p, ...)

//Let's come up with a way to retrieve and display the upgrades from Joe's API!

const upgradesContainer = document.getElementById("upgrade-shop-container");
// https://cookie-upgrade-api.vercel.app/api/upgrades
async function getShopUpgrades() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  // We now need to translate the data we recieve from JSON to something we can use!
  //   const data = await [FINISH THIS CODE]
  //   return [FINISH THIS CODE]

  //We need to *PUSH* the upgrade times that we got from our fetch, into our empty array!
  //Remember that the upgrades that we fetched will be known by a variable name that you have set on line 30/31 ^
}

async function renderShopUpgrades() {
  const getShopItems = await getShopUpgrades();
  // Now that we have our upgrade items inside an array we can perorm array method on them! Just like we did for images in the WK2 gallery submission!

  getShopItems.forEach(function (upgrade) {
    //This is where you should go back to your WK2 gallery loop and apply the same logic to this loop!
    // const upgradeName = [FINISH THIS CODE]
    // const upgradeCost = [FINISH THIS CODE]
    // const upgradeCPSIncrease = [FINISH THIS CODE]
    //These elements should be ones that just display text...
    //These are brand new elements that don't cantain any content so we need to assign content to them. Exactly the same strategy as when you assigned a src and alt to the thumbnail images in WK2...
    //These values come from the upgrade objects inside our array (the ones we just pushed in there from our API)
    // instead of giving these elements a src and alt we want to give them some *TEXTCONTENT* <--- BREADCRUMB TO FOLLOW
    // Append these elements into the relevant container in the same way as you appended your imgs into the thumbnail container in WK2...
    //This is a decent place to also create a button element and attach an event listener to it! You will then need to create a handler function for the button that you create!
  });
}
renderShopUpgrades();

// We want our upgrades to actually do something! We need to give each upgrade a button and attach an event listener to those buttons!

function handleUpgradeClick() {
  //The logic for the upgrade button event handler to only deal with the vaules of the specific upgrade it was create for is the same logic as the event handler for the creation of the large image element in the week 2 submission.
  // Here is a great place to include some logic that checks a CONDITIONAL to see if you have enough cookies in cookieCount to be able to afford the price of the upgrade. If you cant afford and upgrade, how can you give this feedback to your user?
}

setInterval(function () {
  // We want our timer to increase the value of cookieCount by the value of cookiesPerSecond every second.
  // We want to update the cookieCount value on our page as it changes
  // I want to store this value in local storage so that my user can resume the game with their game data intact.
}, 1000);

// It is perfectly fine to perform all of the actions that we want our setInterval function to do with external functions, then you can callback those functions inside the setInterval function.
