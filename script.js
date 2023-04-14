function addButtons() {
    const questionBoxes = document.querySelectorAll('.question');
    let currentIndex = 0;
  
    showQuestion(currentIndex);
  
    function showQuestion(index) {
      questionBoxes.forEach((questionBox, i) => {
        if (i === index) {
          questionBox.style.display = 'block';
        } else {
          questionBox.style.display = 'none';
        }
      });
    }
  
    function nextQuestion(event) {
      event.preventDefault(); // prevent default button behavior
      if (currentIndex < questionBoxes.length - 1) {
        currentIndex++;
        showQuestion(currentIndex);
        updateButtons();
      }
    }
  
    function previousQuestion(event) {
      event.preventDefault(); // prevent default button behavior
      if (currentIndex > 0) {
        currentIndex--;
        showQuestion(currentIndex);
        updateButtons();
      }
    }
  
    function updateButtons() {
        const nextButton = document.querySelector(`.next-button-${currentIndex}`);
        const previousButton = document.querySelector(`.previous-button-${currentIndex}`);
      
        if (currentIndex === 0) {
          previousButton.style.display = 'none';
        } else {
          previousButton.style.display = 'block';
        }
      
        if (currentIndex === questionBoxes.length - 1) {
          nextButton.style.display = 'none';
      
          const doneButton = document.querySelector(`.done-button-${currentIndex}`);
          if (!doneButton) {
            const newDoneButton = document.createElement('button');
            newDoneButton.innerHTML = 'Klaar';
            newDoneButton.setAttribute('type', 'button'); // add type="button" to prevent form submission
            newDoneButton.classList.add(`done-button-${currentIndex}`);
            newDoneButton.addEventListener('click', () => {
              questionBoxes[currentIndex].style.display = 'none'; // hide current question box
              document.querySelector('#user-info').style.display = 'block';
            });
            questionBoxes[currentIndex].appendChild(newDoneButton);
          }
        } else {
          nextButton.style.display = 'block';
          const doneButton = document.querySelector(`.done-button-${currentIndex}`);
          if (doneButton) {
            doneButton.remove();
          }
        }
      }
           
      
    // Hide #user-info initially
    document.querySelector('#user-info').style.display = 'none';

    const previousInfoButton = document.createElement('button');
previousInfoButton.innerHTML = 'Vorige';
previousInfoButton.setAttribute('type', 'button');
previousInfoButton.addEventListener('click', () => {
    showQuestion(currentIndex);
    updateButtons();
    document.querySelector('#user-info').style.display = 'none';
  });
const lastButton = document.querySelector('.last-button')
lastButton.parentNode.insertBefore(previousInfoButton, lastButton);
  
    questionBoxes.forEach((questionBox, index) => {
      const nextButton = document.createElement('button');
      nextButton.innerHTML = 'Volgende';
      nextButton.classList.add(`next-button-${index}`);
      nextButton.addEventListener('click', nextQuestion);
  
      const previousButton = document.createElement('button');
      previousButton.innerHTML = 'Vorige';
      previousButton.classList.add(`previous-button-${index}`);
      previousButton.addEventListener('click', previousQuestion);
  
      if (index === 0) {
        previousButton.style.display = 'none';
      }
  
      questionBox.appendChild(previousButton);
      questionBox.appendChild(nextButton);
    });
  }

// Functions for radio inputs
const formRadios = document.querySelectorAll('input[type="radio"]');

function saveFormRadios() {
  formRadios.forEach((input) => {
    let inputName = input.name;
    let inputValue = input.value;
    if (input.checked) {
      localStorage.setItem(inputName, inputValue);
    }
  });
}

function loadFormRadios() {
  formRadios.forEach((input) => {
    const inputName = input.name;
    const storedValue = localStorage.getItem(inputName);
    if (storedValue !== null && input.value === storedValue) {
      input.checked = false;
    } else {
      input.checked = true;
    }
  });
}

formRadios.forEach((input) => {
  input.addEventListener('change', saveFormRadios);
});

loadFormRadios();

// Functions for normal inputs
const formInputs = document.querySelectorAll(
  'input[type="text"], input[type="number"]',
);

const saveInput = () => {
  formInputs.forEach((input) => {
    const inputName = input.name;
    const inputValue = input.value;
    localStorage.setItem(inputName, inputValue);
  });
};

const loadInput = () => {
  formInputs.forEach((input) => {
    const inputName = input.name;
    let storedValue = localStorage.getItem(inputName);
    if (storedValue) {
      input.value = storedValue;
    }
  });
};

formInputs.forEach((input) => {
  input.addEventListener('input', saveInput);
});
const input = document.querySelector('#student-nummer');
const message = document.querySelector('#student-nummer-message');

input.addEventListener('input', () => {
  if (input.value.length !== 9) {
    input.setCustomValidity('Het moet een 9 cijferig nummer zijn');
    message.textContent = 'Het moet een 9 cijferig nummer zijn';
  } else {
    input.setCustomValidity('');
    message.textContent = '';
  }
});


// checkAllRadios();
loadInput();
addButtons();