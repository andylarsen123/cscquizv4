document.addEventListener("DOMContentLoaded", function () {
  // Initialize quiz data
  const quizData = [
    { question: "Coastal Solutions Compendium: Choose an option", answersIfYes: ["Interactive Tool"], linkIfNo: "https://example.com/full-tool-list" },
    { question: "Is the shoreline elevated (bluffs, banks)?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Bluff Protection"] },
    { question: "Are there bluffs along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Bluff Protection", "Dynamic Zoning"] },
    { question: "Is the shoreline sandy?", answersIfYes: ["Shoreline Setbacks", "Dynamic Zoning", "Armoring Prohibition"] },
    { question: "Are there dunes along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Dune Protection", "Shoreline Setbacks", "Dynamic Zoning", "Armoring Prohibition"] },
    { question: "Are there coarse sediment beaches along the shoreline?", answersIfYes: ["Shoreline Setbacks", "Armoring Prohibition"] },
    { question: "Is there bedrock along the shoreline?", answersIfYes: ["Shoreline Setbacks"] },
    { question: "Are there wetlands along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Wetlands Protection", "Shoreline Setbacks", "Armoring Prohibition", "Natural Shoreline Requirements", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Is the shoreline armored (seawalls, riprap, etc.)?", answersIfYes: ["Armoring Prohibition", "Retreat / Building Moving", "Impervious Surface Standards"] },
    { question: "Are there sensitive environmental areas along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Sensitive Environmental Areas", "Shoreline Setbacks", "Armoring Prohibition", "Temporary Shoreline Protections", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards"] },
  ];

  // Get DOM elements
  const yesButton = document.getElementById('yes-btn');
  const noButton = document.getElementById('no-btn');
  const questionText = document.getElementById('question-text');
  const quizControls = document.getElementById('quiz-controls');
  const questionScreen = document.getElementById('question-screen');
  const resultsScreen = document.getElementById('results');
  const answersList = document.getElementById('answers-list');
  const restartButton = document.getElementById('restart-btn');
  
  // Force remove the restart button from DOM initially
  if (restartButton && restartButton.parentNode) {
    restartButton.parentNode.removeChild(restartButton);
  }
  
  // Set initial text for the first screen
  questionText.textContent = "Coastal Solutions Compendium: Choose an option";
  
  // Hide results and question screen initially
  resultsScreen.classList.add('hidden');
  questionScreen.classList.add('hidden');
  
  // Show quiz questions if the user clicks "Interactive Tool"
  yesButton.addEventListener('click', function () {
    // Completely hide the first screen elements
    questionText.style.display = 'none';
    quizControls.style.display = 'none';
    
    // Show the questions screen
    questionScreen.classList.remove('hidden');
    questionScreen.innerHTML = ''; // Clear any existing content
    
    // Create and show the quiz form
    showQuestions();
  });

  // Redirect to full tool list if the user clicks "View Full List of Tools"
  noButton.addEventListener('click', function () {
    window.location.href = quizData[0].linkIfNo;
  });

function showQuestions() {
  const form = document.createElement('form');
  form.id = 'quiz-form';
  
  // Create a heading for the questions screen
  const heading = document.createElement('h2');
  heading.textContent = "What is your coastal resilience priority?";
  form.appendChild(heading);
  
  // Skip the first question (which was the initial choice)
  for (let i = 1; i < quizData.length; i++) {
    const div = document.createElement('div');
    div.className = 'question-item';
    
    // Create the question text
    const questionLabel = document.createElement('span');
    questionLabel.textContent = quizData[i].question;
    
    // Create radio button container for yes/no options
    const radioContainer = document.createElement('div');
    radioContainer.className = 'radio-options';
    
    // Create the Yes option
    const yesLabel = document.createElement('label');
    yesLabel.innerHTML = '<input type="radio" name="q' + i + '" value="yes"> Yes';
    
    // Create the No option
    const noLabel = document.createElement('label');
    noLabel.innerHTML = '<input type="radio" name="q' + i + '" value="no"> No';
    
    // Add radio buttons to container
    radioContainer.appendChild(yesLabel);
    radioContainer.appendChild(noLabel);
    
    // Append question text and radio options to the question item
    div.appendChild(questionLabel);
    div.appendChild(radioContainer);
    
    form.appendChild(div);
  }
  
  const submitButton = document.createElement('button');
  submitButton.textContent = "Submit Answers";
  submitButton.type = "submit";
  submitButton.className = "submit-btn";
  form.appendChild(submitButton);
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const answers = new Set();
    
    // Skip the first question (which was the initial choice)
    for (let i = 1; i < quizData.length; i++) {
      const input = form.querySelector(`input[name="q${i}"]:checked`);
      if (input && input.value === 'yes') {
        quizData[i].answersIfYes?.forEach(answer => answers.add(answer));
      }
    }

    // Hide question screen and show results screen
    questionScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    // Populate results list
    answersList.innerHTML = '';
    if (answers.size) {
      Array.from(answers).forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        answersList.appendChild(li);
      });
    } else {
      answersList.innerHTML = "<li>No recommendations based on your selections.</li>";
    }
    
    // Create and add the restart button only after showing results
    createRestartButton();
  });
  
  questionScreen.appendChild(form);
}
  
  // Function to create and append the restart button
  function createRestartButton() {
    // Create a new restart button
    const newRestartBtn = document.createElement('button');
    newRestartBtn.id = 'restart-btn';
    newRestartBtn.textContent = 'Restart Quiz';
    
    // Create a container for the button if it doesn't exist
    let controlButtons = document.getElementById('control-buttons');
    if (!controlButtons) {
      controlButtons = document.createElement('div');
      controlButtons.id = 'control-buttons';
      controlButtons.className = 'buttons-container';
      document.body.appendChild(controlButtons);
    } else {
      // Clear any existing content in the control buttons container
      controlButtons.innerHTML = '';
    }
    
    // Add the button to the container
    controlButtons.appendChild(newRestartBtn);
    
    // Add event listener to the new button
    newRestartBtn.addEventListener('click', function() {
      // Remove the restart button
      if (newRestartBtn.parentNode) {
        newRestartBtn.parentNode.removeChild(newRestartBtn);
      }
      
      // Reset answers and hide results
      answersList.innerHTML = '';
      resultsScreen.classList.add('hidden');
      
      // Restore the first screen
      questionText.style.display = '';
      quizControls.style.display = '';
    });
  }
});
