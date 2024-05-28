const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result-text");
const resultDiv = document.getElementById("result");

const regex = /[A-Z0-9]/;

const checkForPalindrome = () => {
  if (textInput.value == "") {
    alert("Please input a value");
    return;
  }

  const alphanumericCharList = textInput.value.toUpperCase().split("").filter((c) => c.match(regex));
  const alphanumericText = alphanumericCharList.join("");
  const reversed = alphanumericCharList.reverse().join("");

  console.log(alphanumericCharList);
  console.log(alphanumericText);
  console.log(reversed);
  console.log(textInput.value);

  console.log(alphanumericText === reversed);

  resultText.innerHTML = alphanumericText === reversed ? 
    `<b>${textInput.value}</b> is a palindrome.` : `<b>${textInput.value}</b> is not a palindrome.`;

  resultDiv.style.display = "block";
};

checkButton.addEventListener("click", checkForPalindrome);
