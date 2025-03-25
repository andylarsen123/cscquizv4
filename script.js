document.addEventListener("DOMContentLoaded", function () {
  // Initialize quiz data
  const quizData = [
    { question: "<strong>Coastal Solutions Compendium:</strong><br>Choose an option", answersIfYes: ["Interactive Tool"], linkIfNo: "https://example.com/full-tool-list" },
    { question: "Is the shoreline <strong>elevated (bluffs, banks)?</strong>", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Bluff Protection"] },
    { question: "Are there <strong>bluffs</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Bluff Protection", "Dynamic Zoning"] },
    { question: "Is the shoreline <strong>sandy?</strong>", answersIfYes: ["Shoreline Setbacks", "Dynamic Zoning", "Armoring Prohibition"] },
    { question: "Are there <strong>dunes</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Dune Protection", "Shoreline Setbacks", "Dynamic Zoning", "Armoring Prohibition"] },
    { question: "Are there <strong>coarse sediment beaches </strong> along the shoreline?", answersIfYes: ["Shoreline Setbacks", "Armoring Prohibition"] },
    { question: "Is there <strong>bedrock</strong> along the shoreline?", answersIfYes: ["Shoreline Setbacks"] },
    { question: "Are there <strong>wetlands</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Wetlands Protection", "Shoreline Setbacks", "Armoring Prohibition", "Natural Shoreline Requirements", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Is the shoreline <strong>armored (seawalls, riprap, etc.)?</strong>", answersIfYes: ["Armoring Prohibition", "Retreat / Building Moving", "Impervious Surface Standards"] },
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
  const controlButtons = document.getElementById('control-buttons');
  
  // Add styles to prevent horizontal scrolling
  addScrollStyles();
  
  // Store all selected answers across all screens
  let allSelectedAnswers = new Set();
  
  // Hide restart button on load
  const existingRestartButton = document.getElementById('restart-btn');
  if (existingRestartButton) {
    existingRestartButton.style.display = 'none';
  }
  
  // Set up initial screen
  questionText.innerHTML = "<strong>Coastal Solutions Compendium:</strong><br>Choose an option";  
  resultsScreen.classList.add('hidden');
  questionScreen.classList.add('hidden');
  if (controlButtons) {
    controlButtons.classList.add('hidden');
  }
  
  // Event listeners for initial choice buttons
  yesButton.addEventListener('click', function () {
    // Reset answers when starting a new quiz
    allSelectedAnswers = new Set();
    
    questionText.style.display = 'none';
    quizControls.style.display = 'none';
    questionScreen.classList.remove('hidden');
    questionScreen.innerHTML = '';
    
    // Always hide restart button when starting/continuing the quiz
    if (existingRestartButton) {
      existingRestartButton.style.display = 'none';
    }
    if (controlButtons) {
      controlButtons.classList.add('hidden');
    }
    
    showQuestions(0);
  });

  noButton.addEventListener('click', function () {
    window.location.href = "https://example.com/full-tool-list";
  });

  // Function to add CSS styles that prevent horizontal scrolling
  function addScrollStyles() {
    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      /* Prevent horizontal scrolling in tables */
      table {
        width: 100%;
        table-layout: fixed;
      }
      
      /* Ensure cell content wraps instead of causing horizontal overflow */
      table th, table td {
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      
      /* Allow vertical scrolling but prevent horizontal */
      .results-container {
        overflow-y: auto;
        overflow-x: hidden;
      }
      
      /* Make table more responsive */
      @media (max-width: 768px) {
        table {
          font-size: 0.9em;
        }
      }
    `;
    document.head.appendChild(styleElement);
  }

   // Changed from 5 to 4 questions per page
    const startIndex = screenIndex * 4 + 1; // Skip the first entry which is the initial choice
    const endIndex = Math.min(startIndex + 4, quizData.length);
    const questionsToShow = quizData.slice(startIndex, endIndex);
    
    const heading = document.createElement('p');
    heading.textContent = "Select Yes or No (or Skip if Unsure) on the following:";
    heading.style.textAlign = 'center';
    heading.style.fontWeight = 'bold';
    heading.style.marginBottom = '14px';
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
      yesLabel.innerHTML = `<input type="radio" name="q${startIndex + i}" value="yes"> Yes`;
      
      const noLabel = document.createElement('label');
      noLabel.innerHTML = `<input type="radio" name="q${startIndex + i}" value="no"> No`;
      
      radioContainer.appendChild(yesLabel);
      radioContainer.appendChild(noLabel);
      
      div.appendChild(questionLabel);
      div.appendChild(radioContainer);
      
      form.appendChild(div);
    });
    
    // Create navigation buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'navigation-buttons';
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';
    
    // Next/Submit button (placed first/top)
    const submitButton = document.createElement('button');
    submitButton.textContent = (endIndex >= quizData.length) ? "Show Results" : "Next";
    submitButton.type = "submit";
    submitButton.className = "submit-btn";
    buttonsContainer.appendChild(submitButton);
    
    // Add a gap between buttons
    const spacer = document.createElement('div');
    spacer.style.height = '10px'; // 10px gap
    buttonsContainer.appendChild(spacer);
    
    // Add Back button for all screens, including the first question screen
    const backButton = document.createElement('button');
    backButton.textContent = "Back";
    backButton.type = "button";
    backButton.className = "back-btn";
    
    if (screenIndex > 0) {
      // For screens after the first question screen, go back to previous questions
      backButton.addEventListener('click', function() {
        questionScreen.innerHTML = '';
        
        // Make sure restart button is hidden when navigating back
        if (existingRestartButton) {
          existingRestartButton.style.display = 'none';
        }
        if (controlButtons) {
          controlButtons.classList.add('hidden');
        }
        
        showQuestions(screenIndex - 1);
      });
    } else {
      // For the first question screen, go back to the initial screen
      backButton.addEventListener('click', function() {
        // Return to initial screen
        questionScreen.classList.add('hidden');
        questionText.style.display = '';
        quizControls.style.display = '';
        
        // Make sure restart button is hidden
        if (existingRestartButton) {
          existingRestartButton.style.display = 'none';
        }
        if (controlButtons) {
          controlButtons.classList.add('hidden');
        }
      });
    }
    
    buttonsContainer.appendChild(backButton);
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
        
        // Make sure the results container has proper styling
        resultsScreen.className = 'results-container';
        if (!resultsScreen.classList.contains('hidden')) {
          resultsScreen.classList.remove('hidden');
        }
        
        if (allSelectedAnswers.size) {
          Array.from(allSelectedAnswers).sort().forEach(answer => {
            const li = document.createElement('li');
            li.textContent = answer;
            answersList.appendChild(li);
          });
        } else {
          answersList.innerHTML = "<li>No recommendations based on your selections.</li>";
        }
        
        // Only show restart button on results screen
        showRestartButton();
      }
    });
    
    questionScreen.innerHTML = ''; // Clear any existing content
    questionScreen.appendChild(form);
  }

function showRestartButton() {
  // Show the existing restart button only on the results screen
  if (controlButtons) {
    controlButtons.classList.remove('hidden');
  }
  
  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.style.display = 'block';
    
    // Make sure the event listener is attached
    restartBtn.onclick = function() {
      // Reset the quiz
      allSelectedAnswers = new Set();
      answersList.innerHTML = '';
      resultsScreen.classList.add('hidden');
      questionText.style.display = '';
      quizControls.style.display = '';
      questionScreen.classList.add('hidden');
      
      // Hide the control buttons (including restart button)
      if (controlButtons) {
        controlButtons.classList.add('hidden');
      }
      
      // Explicitly hide the restart button
      restartBtn.style.display = 'none';
     };
   }
 }
});
