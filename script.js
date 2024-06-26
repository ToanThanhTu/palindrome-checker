// Getting references to the HTML elements
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result-text");
const resultDiv = document.getElementById("result");

// Regular expression to match alphanumeric characters (A-Z and 0-9)
const regex = /[A-Z0-9]/;

const checkForPalindrome = () => {
  // Check if the input field is empty and alert the user if it is
  if (textInput.value == "") {
    alert("Please input a value");
    return;
  }

  // Convert the input text to uppercase, split into characters, and filter out non-alphanumeric characters
  const alphanumericCharList = textInput.value.toUpperCase().split("").filter((c) => c.match(regex));

  // Join the filtered characters to form the processed text
  const alphanumericText = alphanumericCharList.join("");

  // Reverse the list of filtered characters and join to form the reversed text
  const reversed = alphanumericCharList.reverse().join("");

  // Logging intermediate results for debugging purposes
  // console.log(alphanumericCharList);
  // console.log(alphanumericText);
  // console.log(reversed);
  // console.log(textInput.value);
  // console.log(alphanumericText === reversed);

  // Update the result text based on whether the input is a palindrome or not
  resultText.innerHTML = alphanumericText === reversed
    ? `<b>${textInput.value}</b> is a palindrome.`
    : `<b>${textInput.value}</b> is not a palindrome.`;

  // Make the result div visible
  resultDiv.style.display = "block";
};

// Adding an event listener to the check button
checkButton.addEventListener("click", checkForPalindrome);
