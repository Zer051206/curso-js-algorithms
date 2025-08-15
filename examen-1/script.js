const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');



function checkPalindrome() {
  const inputValue = input.value;

  if (inputValue.trim() === "") {
    alert("Please input a value.");
    return;
  }

  const cleanValueInput = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "")

  const reverseValueInput = cleanValueInput.split("").reverse().join("");

  if(cleanValueInput === reverseValueInput) {
    result.innerText = `${inputValue} is a palindrome`;
    result.style.color = "green";
  } else {
    result.innerText = `${inputValue} is not a palindrome`;
    result.style.color = "orange";
  }

}

button.addEventListener("click", checkPalindrome)
