// In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

// **Hit the GIPHY API**.
//    * Fool around with the GIPHY API. [Giphy API](https://developers.giphy.com/docs/).
//    * Be sure to read about these GIPHY parameters (hint, hint):
//      * `q`
//      * `limit`
//      * `rating`



// 1. Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.

var topics = ["sleeping", "running", "eating", "dancing", "fencing", "dodging", "birds" 

];

//    * We chose animals for our theme, but you can make a list to your own liking.

// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

modify page html to generate buttons for topics.

could possibly use a for loop to loop through the array and create a button for(each)




// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

on(click) function for buttons that have names of topics on them. Use api to pull down results. set api result limit to 10 results. results should be static and non-animated. .append the results to the page.



// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

check api for setting to make gif animate when clicked, and stop when clicked again.



// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.



// ### Bonus Goals

// 1. Ensure your app is fully mobile responsive.

// 2. Allow users to request additional gifs to be added to the page.
//    * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.