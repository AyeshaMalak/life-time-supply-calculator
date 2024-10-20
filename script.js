function calculateLifetimeSupply() {
    // Get user inputs
    var favSnacks = document.getElementById("snack").value;
    var currentAge = document.getElementById("current-age").value;
    var maxAge = document.getElementById("max-age").value;
    var perDay = document.getElementById("per-day").value;

    // Validation: Ensure that all inputs are provided
    if (!favSnacks || !currentAge || !maxAge || !perDay) {
        alert("Please fill in all the fields with valid data.");
        return;
    }

    // Convert inputs to numbers (currentAge, maxAge, and perDay should be numbers)
    currentAge = parseInt(currentAge);
    maxAge = parseInt(maxAge);
    perDay = parseInt(perDay);

    // Ensure valid age range
    if (currentAge < 0 || maxAge < 0 || currentAge > maxAge) {
        alert("Please enter valid age values. Current age must be less than or equal to maximum age.");
        return;
    }

    // Calculate the lifetime supply
    var lifetimeSupply = (maxAge - currentAge) * perDay * 365;

    // Display the result
    var resultMessage = "Favourite Snack: " + favSnacks + "<br>" + 
                        "Current Age: " + currentAge + "<br>" + 
                        "Estimated Maximum Age: " + maxAge + "<br>" + 
                        "Amount of Snacks per day: " + perDay + "<br>" + 
                        "You will need " + lifetimeSupply + " " + favSnacks + 
                        " to last you until the ripe old age of " + maxAge + ".";

    // Show the result
    document.getElementById("result").innerHTML = resultMessage;
}
