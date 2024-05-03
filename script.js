const element = document.querySelector("span");
const wordsList = ["Developer", "Coder", "Student"];

function autoTyping(element, wordsList) {
  let wordIndex = 0;
  let characterIndex = 0;
  let reverseType = false;

  setInterval(() => {
    if (characterIndex === wordsList[wordIndex].length) {
      reverseType = true;
    }

    if (!reverseType) {
      element.innerText += wordsList[wordIndex][characterIndex++];
    } else {
      element.innerText = element.innerText.slice(
        0,
        element.innerText.length - 1
      );
    }

    if (element.innerText.length === 0 && reverseType) {
      wordIndex++;
      characterIndex = 0;
      reverseType = false;
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0;
    }
  }, 200);
}

// Function Calling
autoTyping(element, wordsList);
