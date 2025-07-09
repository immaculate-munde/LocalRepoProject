// Step 1: Add event listener to the "Add" button
document.getElementById("add-button").addEventListener("click", addItem);

// Step 2: Define the addItem function
function addItem() {
    // Get the input value
    const input = document.getElementById("input-text");
    const inputValue = input.value.trim(); // Trim to remove whitespace

    // Check if input is not empty
    if (inputValue !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        
        // Set the text of the list item
        listItem.textContent = inputValue;
        
        // Append the new list item to the list container
        document.getElementById("list-container").appendChild(listItem);
        
        // Clear the input field
        input.value = "";
    }
}
