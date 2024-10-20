function calculateLifetimeSupply() {
    // Get input values
    const dailyAmount = document.getElementById("daily-amount").value;
    const currentAge = document.getElementById("current-age").value;
    const lifeExpectancy = document.getElementById("life-expectancy").value;

    // Validate inputs
    if (!dailyAmount || !currentAge || !lifeExpectancy) {
        alert("Please fill all fields with valid numbers.");
        return;
    }

    // Calculate remaining years
    const remainingYears = lifeExpectancy - currentAge;

    // Ensure that the remaining years is not negative
    if (remainingYears < 0) {
        alert("Your life expectancy is less than your current age! Please enter valid values.");
        return;
    }

    // Calculate lifetime supply
    const lifetimeSupply = dailyAmount * 365 * remainingYears;

    // Display result
    document.getElementById("result-value").textContent = lifetimeSupply.toLocaleString();
}
