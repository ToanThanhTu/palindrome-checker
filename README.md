# Palindrome Checker

## Description

The Palindrome Checker is a simple web application that allows users to input text and check if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring punctuation, case, and spacing).

## Features

- User-friendly interface for inputting text
- Real-time palindrome checking
- Clear display of results indicating whether the input text is a palindrome
- Helpful hint explaining what a palindrome is

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup Instructions

1. **Clone the repository.**
1. **Navigate to the project directory:**  
`cd palindrome-checker`
1. **Open index.html in your web browser:**  
- You can simply double-click on the `index.html` file, or
- Open it through a web server for local development (e.g., using the Live Server extension in Visual Studio Code).

## File Structure

    palindrome-checker/
    │
    ├── index.html        # The main HTML file
    ├── styles.css        # The CSS file for styling
    └── script.js         # The JavaScript file for functionality

## Usage

1. Open the application in your web browser.
1. Enter text in the input field provided.
1. Click the `Check` button to determine if the entered text is a palindrome.
1. The result will be displayed below the input field, indicating whether the text is a palindrome.

## Code Explanation

### HTML (index.html)

The HTML file structures the content and elements of the Palindrome Checker application. Key elements include:
- Input field for text entry
- Button to trigger the palindrome check
- Area to display results
- Hint section to explain what a palindrome is

### CSS (styles.css)

The CSS file provides styling for the application, including:
- Custom color variables
- Layout and positioning
- Styling for input fields, buttons, and result display
- Responsive design adjustments

### JavaScript (script.js)

The JavaScript file handles the functionality of the application. It includes:
- Event listener for the check button
- Function to check if the input text is a palindrome
- Logic to filter, process, and compare the text
- Display logic for the result