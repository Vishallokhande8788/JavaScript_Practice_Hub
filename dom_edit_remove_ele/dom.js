// // type 1

// function addLanguage(langName) {
//   const li = document.createElement("li"); // Create an "li" element
//   li.innerHTML = `${langName}`; // Insert language text into the "li"
//   document.querySelector(".language").appendChild(li); // Append to the list

//   console.log(language);
// }

// // Example function calls
// addLanguage("Python");
// addLanguage("Java");
                

        // OR

// Type 2

function addOptiLanguage(langName) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName));
    document.querySelector(".language").appendChild(li);
    console.log(langName);
    }   

    // Example function calls
    addOptiLanguage("Python");
    addOptiLanguage("Java");
    
    
    // OR