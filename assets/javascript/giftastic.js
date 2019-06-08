// In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.



// 1. Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.

// Array of verbs
var topics = ["sleeping", "running", "eating", "dancing", "fencing", "dodging", "flying"];


// API Key
var APIKey = "tQLmPdwEqwf6dfzOmnOS7LG2gama5VvN"

// API URL
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=&api_key=tQLmPdwEqwf6dfzOmnOS7LG2gama5VvN&limit=5"

// Testing to make sure array prints to console
console.log(" <<<<<<*-*-*-*-*-*-*-*-*-*-*-*-*-* Test Area *-*-*-*-*-*-*-*-*-*-*-*-*-*>>>>>>> ")
console.log(" --------------------------- Verbs Array --------------------------- ")
console.log(topics);


// Function that allows HTML to load fully before loading JavaScript/jQuery
$(document).ready(function () {
    createButtons(topics,'searchButton','#gifButtons');
    console.log("Page Loaded!");
})

//  Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

// !! modify page html to generate buttons for topics.

function createButtons(topics,classToAdd,areaToAddTo) {

    $(areaToAddTo).empty();

    for (var i=0;i<topics.length;i++) {

        // Generates new button element for each item in array
        var b=$("<button>");

        // Adds class of gif to each button
        b.addClass(classToAdd);

        // Adds data type to button elements matching the label on button
        b.attr('data-type',topics[i]);

        // Applies text to buttons to match array item names
        b.text(topics[i]);

        // Appends gif buttons to gifButtons div
        $(areaToAddTo).append(b);

    }
}

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// !! on(click) function for buttons that have names of topics on them. Use api to pull down results. set api result limit to 10 results. results should be static and non-animated. .append the results to the page.


// Click event listener function
$(document).on('click','.searchButton',function(){
    $('#searchResults').empty();
    // console.log(" --------------------------- API Response JSON --------------------------- ");
    var type=$(this).data('type');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+type+"&api_key=tQLmPdwEqwf6dfzOmnOS7LG2gama5VvN&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);
        for(var i=0;i<response.data.length;i++){
            var searchDiv =$('<div class="search-item">');
            var rating =response.data[i].rating;
            var p =$("<p>").text('Rating: ' +rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $("<img>");
            image.attr("src", still);
            image.attr("data-still", still);
            image.attr("data-animated", animated);
            image.attr("data-state", "still");
            image.addClass("searchImage");
            searchDiv.append(p);
            searchDiv.append(image);
            $("#searches").append(searchDiv);
        }

    })



})














// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// check api for setting to make gif animate when clicked, and stop when clicked again.



// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.









// 7. Deploy your assignment to Github Pages.



// ### Bonus Goals

// 1. Ensure your app is fully mobile responsive.

// 2. Allow users to request additional gifs to be added to the page.
//    * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.