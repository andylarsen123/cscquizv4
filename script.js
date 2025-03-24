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
  const questionScreen = document.getElementById('question-screen');
  const resultsScreen = document.getElementById('results');
  const answersList = document.getElementById('answers-list');
  const restartButton = document.getElementById('restart-btn');
  
  // Set initial text for the first screen
  questionText.textContent = "Coastal Solutions Compendium: Choose an option";
  yesButton.textContent = "Interactive Tool";
  noButton.textContent = "View Full List of Tools (Section C)";
  
  // Hide results, question screen, and restart button initially
  resultsScreen.classList.add('hidden');
  questionScreen.classList.add('hidden');
  restartButton.classList.add('hidden');
  
  // Show quiz questions if the user clicks "Interactive Tool"
  yesButton.addEventListener('click', function () {
    questionScreen.classList.remove('hidden');
    questionText.classList.add('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    
    // Clear any existing content in questionScreen
    questionScreen.innerHTML = '';
    
    // Create and show the quiz form
    showQuestions();
  });

  // Redirect to full tool list if the user clicks "View Full List of Tools"
  noButton.addEventListener('click', function () {
    window.location.href = quizData[0].linkIfNo;
  });

  // Handle restart button click
  restartButton.addEventListener('click', function () {
    // Reset answers and hide results
    answersList.innerHTML = '';
    resultsScreen.classList.add('hidden');
    questionScreen.classList.add('hidden');
    restartButton.classList.add('hidden');
    
    // Show first screen again
    questionText.classList.remove('hidden');
    yesButton.classList.remove('hidden');
    noButton.classList.remove('hidden');
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
      div.innerHTML = `<label><input type="checkbox" name="q${i}"> ${quizData[i].question}</label>`;
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
        const input = form.querySelector(`input[name="q${i}"]`);
        if (input && input.checked) {
          quizData[i].answersIfYes?.forEach(answer => answers.add(answer));
        }
      }

      // Hide question screen and show results screen
      questionScreen.classList.add('hidden');
      resultsScreen.classList.remove('hidden');
      
      // Populate results list
      answersList.innerHTML = '';
      if (answers.size) {
        const resultsHeading = document.createElement('h2');
        resultsHeading.textContent = "Recommended Solutions:";
        answersList.appendChild(resultsHeading);
        
        Array.from(answers).forEach(answer => {
          const li = document.createElement('li');
          li.textContent = answer;
          answersList.appendChild(li);
        });
      } else {
        answersList.innerHTML = "<li>No recommendations based on your selections.</li>";
      }
      
      // Show restart button only after showing results
      restartButton.classList.remove('hidden');
    });
    
    questionScreen.appendChild(form);
  }
});




