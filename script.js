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
    { question: "Are there <strong>sensitive environmental areas</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Sensitive Environmental Areas", "Shoreline Setbacks", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards"] },
    { question: "Are there <strong>high risk erosion areas</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "High Risk Erosion Area Protection", "Shoreline Setbacks", "Dynamic Zoning", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards"] },
    { question: "Are there <strong>designated floodplains</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Floodplain Overlay District", "Shoreline Setbacks", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Is the <strong>character of the shoreline</strong> similar across your community?", answersIfYes: ["Shoreline Setbacks", "Shoreline District", "Natural Shoreline Requirements", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Does development <strong>already exist</strong> within 50ft of the shoreline?", answersIfYes: ["Nonconformities and Variance Standards", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Retreat / Building Moving"] },
    { question: "Do you <strong>anticipate new development or redevelopment</strong> within 50 feet of your shoreline?", answersIfYes: ["Shoreline Setbacks", "Site Condos", "Armoring Prohibition", "Retreat / Building Moving"] },
    { question: "Is there shoreline property which is experiencing <strong>erosion</strong>?", answersIfYes: ["Shoreline Setbacks", "Dynamic Zoning", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving"] },
    { question: "Is there shoreline property which is experiencing <strong>flooding</strong>?", answersIfYes: ["Shoreline Setbacks", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure", "Open Space Requirements"] },
    { question: "Are there <strong>existing or desired shoreline-specific uses</strong>, such as marinas?", answersIfYes: ["Shoreline Setbacks", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure", "Open Space Requirements"] },
    { question: "Is your community concerned about <strong>invasive plant or animal species</strong>", answersIfYes: ["Invasive Species Prohibition"] },
    { question: "Is your community concerned about <strong>water quality?</strong>", answersIfYes: ["Natural Shoreline Requirements", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Is it a priority for your community to <strong>preserve or create access to the shoreline?</strong>", answersIfYes: ["Shoreline Setbacks", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Stormwater Management Requirements / Green Infrastructure", "Open Space Requirements"] }
  ];

  const yesButton = document.getElementById('yes-btn');
  const noButton = document.getElementById('no-btn');
  const questionText = document.getElementById('question-text');
  const quizControls = document.getElementById('quiz-controls');
  const questionScreen = document.getElementById('question-screen');
  const resultsScreen = document.getElementById('results');
  const answersList = document.getElementById('answers-list');
  
  // Store all selected answers across all screens
  let allSelectedAnswers = new Set();
  
  // Remove any existing restart button on load
  const existingRestartButton = document.getElementById('restart-btn');
  if (existingRestartButton && existingRestartButton.parentNode) {
    existingRestartButton.parentNode.removeChild(existingRestartButton);
  }
  
  // Set up initial screen
  questionText.textContent = "Coastal Solutions Compendium: Choose an option";
  resultsScreen.classList.add('hidden');
  questionScreen.classList.add('hidden');
  
  // Event listeners for initial choice buttons
  yesButton.addEventListener('click', function () {
    // Reset answers when starting a new quiz
    allSelectedAnswers = new Set();
    
    questionText.style.display = 'none';
    quizControls.style.display = 'none';
    questionScreen.classList.remove('hidden');
    questionScreen.innerHTML = '';
    questionScreen.classList.add('scrollable');
    showQuestions(0);
  });

  noButton.addEventListener('click', function () {
    window.location.href = quizData[0].linkIfNo;
  });

  function showQuestions(screenIndex) {
    const form = document.createElement('form');
    form.id = 'quiz-form';
    
    // Calculate which questions to show on this screen (6 per page)
    const startIndex = screenIndex * 6 + 1; // Skip the first entry which is the initial choice
    const endIndex = Math.min(startIndex + 6, quizData.length);
    const questionsToShow = quizData.slice(startIndex, endIndex);
    
    const heading = document.createElement('h2');
    heading.textContent = "Check Yes or No on the following:";
    form.appendChild(heading);
    
    // Create questions for this screen
    questionsToShow.forEach((data, i) => {
      const div = document.createElement('div');
      div.className = 'question-item';
      
      const questionLabel = document.createElement('span');
      questionLabel.innerHTML = data.question; // Using innerHTML to support the <strong> tags
      
      const radioContainer = document.createElement('div');
      radioContainer.className = 'radio-options';
      
      const yesLabel = document.createElement('label');
      yesLabel.innerHTML = `<input type="radio" name="q${startIndex + i}" value="yes" required> Yes`;
      
      const noLabel = document.createElement('label');
      noLabel.innerHTML = `<input type="radio" name="q${startIndex + i}" value="no" required> No`;
      
      radioContainer.appendChild(yesLabel);
      radioContainer.appendChild(noLabel);
      
      div.appendChild(questionLabel);
      div.appendChild(radioContainer);
      
      form.appendChild(div);
    });
    
    // Create navigation buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'navigation-buttons';
    
    // Add Back button if not the first screen
    if (screenIndex > 0) {
      const backButton = document.createElement('button');
      backButton.textContent = "Back";
      backButton.type = "button";
      backButton.className = "back-btn";
      backButton.addEventListener('click', function() {
        questionScreen.innerHTML = '';
        showQuestions(screenIndex - 1);
      });
      buttonsContainer.appendChild(backButton);
    }
    
    // Next/Submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = (endIndex >= quizData.length) ? "Show Results" : "Next";
    submitButton.type = "submit";
    submitButton.className = "submit-btn";
    buttonsContainer.appendChild(submitButton);
    
    form.appendChild(buttonsContainer);
    
    // Form submission handler
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Process current page answers
      questionsToShow.forEach((data, i) => {
        const questionIndex = startIndex + i;
        const input = form.querySelector(`input[name="q${questionIndex}"]:checked`);
        if (input && input.value === 'yes' && data.answersIfYes) {
          // Add all answers for this question to the overall set
          data.answersIfYes.forEach(answer => allSelectedAnswers.add(answer));
        }
      });
      
      questionScreen.innerHTML = '';
      
      // Determine if there are more questions or show results
      if (endIndex < quizData.length) {
        showQuestions(screenIndex + 1);
      } else {
        // Show results
        resultsScreen.classList.remove('hidden');
        answersList.innerHTML = '';
        
        if (allSelectedAnswers.size) {
          Array.from(allSelectedAnswers).sort().forEach(answer => {
            const li = document.createElement('li');
            li.textContent = answer;
            answersList.appendChild(li);
          });
        } else {
          answersList.innerHTML = "<li>No recommendations based on your selections.</li>";
        }
        
        createRestartButton();
      }
    });
    
    questionScreen.appendChild(form);
  }

  function createRestartButton() {
    const newRestartBtn = document.createElement('button');
    newRestartBtn.id = 'restart-btn';
    newRestartBtn.textContent = 'Restart Quiz';
    newRestartBtn.className = 'restart-btn';
    
    let controlButtons = document.getElementById('control-buttons');
    if (!controlButtons) {
      controlButtons = document.createElement('div');
      controlButtons.id = 'control-buttons';
      controlButtons.className = 'buttons-container';
      resultsScreen.appendChild(controlButtons);
    } else {
      controlButtons.innerHTML = '';
    }
    
    controlButtons.appendChild(newRestartBtn);
    
    newRestartBtn.addEventListener('click', function() {
      // Clean up and reset
      allSelectedAnswers = new Set();
      
      if (newRestartBtn.parentNode) {
        newRestartBtn.parentNode.removeChild(newRestartBtn);
      }
      
      answersList.innerHTML = '';
      resultsScreen.classList.add('hidden');
      questionText.style.display = '';
      quizControls.style.display = '';
      questionScreen.classList.add('hidden');
    });
  }
});
