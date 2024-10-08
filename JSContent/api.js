// //first js will convert json to js object to understand and gives the output
// // this json is an array of objects & word:example is one object, so we use data[0] to access.
// const data = [
//     {
//         "word": "example",
//         "phonetics": [
//             {
//                 "text": "/ɪɡˈzɑːmpəl/",
//                 "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/example-us.mp3"
//             },
//             {
//                 "text": "/ɪɡˈzæmpəl/",
//                 "audio": ""
//             }
//         ],
//         "meanings": [
//             {
//                 "partOfSpeech": "noun",
//                 "definitions": [
//                     {
//                         "definition": "A thing characteristic of its kind or illustrating a general rule."
//                     }
//                 ]
//             }
//         ]
//     }
// ];
// //display js object
// console.log("js object is:",data);

// // Accessing the first phonetic representation
// const firstPhonetic = data[0].phonetics[0];
// console.log("First Phonetic:", firstPhonetic);

// // Accessing the second phonetic representation
// const secondPhonetic = data[0].phonetics[1];
// console.log("Second Phonetic:", secondPhonetic);

// // Accessing the part of speech
// const partOfSpeech = data[0].meanings[0].partOfSpeech;
// console.log("Part of Speech:", partOfSpeech);

// // Accessing the definition
// const definition = data[0].meanings[0].definitions[0].definition;
// console.log("Definition:", definition);


// Get elements from the HTML
const input = document.querySelector("#input"); // Input field
const searchBtn = document.querySelector("#search"); // Search button
const wordDisplay = document.querySelector(".word"); // Word display
const meaningDisplay = document.querySelector(".meaning"); // Meaning display
const fetchingMessage = document.querySelector("#fetchingMessage"); // Fetching message display

// Function to create a delay
function delay(milisecond) {
    return new Promise(resolve => setTimeout(resolve, milisecond)); //return a promise
}

// Function to get the word's definition using async/await
async function getDefinition(word) {
    fetchingMessage.innerText = "Fetching definition..."; // Display fetching message
    //function call
    await delay(3000); // Wait for 3 seconds before fetching the definition

    try {
        // Passing parameter i.e. word in the URL
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        // Check if the response is okay (status code 200-299)
        if (!response.ok) { // built-in => response.ok
            //throw is keyword & new error() is constructor function call that creates object
            throw new Error("Word not found. Please try again."); // Throw an error if the response is not ok
        }

        let data = await response.json(); //convert json to js object

        // Clear fetching message
        fetchingMessage.innerText = ""; 
        
        // Display word and meaning
        wordDisplay.innerText = word;
        meaningDisplay.innerText = data[0].meanings[0].definitions[0].definition;
    } catch (error) {
        // Clear fetching message and display error message
        fetchingMessage.innerText = ""; 
        wordDisplay.innerText = ""; 
        meaningDisplay.innerText = error.message; // .message is a built-in property
    }
}

// Function to handle the search button click
async function handleSearch() {
    // input.value is property that holds the value entered.
    const word = input.value; // Get word from input
    if (word) { //if value entered
        //call function and pass value as argument to function where created.
        await getDefinition(word);
    }
}

// Add event listener to the search button
searchBtn.addEventListener("click", handleSearch);
