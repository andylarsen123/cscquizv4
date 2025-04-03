document.addEventListener("DOMContentLoaded", function () {
  // Initialize quiz data
const quizData = [
    { question: "<strong>Coastal Solutions Compendium:</strong><br>Choose an option", answersIfYes: [{ text: "Interactive Tool", link: "https://example.com/interactive-tool" }], linkIfNo: "https://example.com/full-tool-list" },
      { question: "Is the shoreline elevated, such as by bluffs?", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Bluff Protection Overlay", link: "https://example.com/bluff-protection" }
    ]},
    { question: "Is the shoreline sandy?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Greenbelt Requirements", link: "https://example.com/dynamic-zoning" }
    ]},
    { question: "Are there dunes along the shoreline?", answersIfYes: [
        { text: "Bluff Protection Overlay", link: "https://example.com/natural-features-setbacks" },
        { text: "Dune Protection Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Greenbelt Requirements", link: "https://example.com/dynamic-zoning" }
    ]},
    { question: "Are there coarse sediment beaches along the shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" },
        { text: "Wetland Protection Overlay", link: "https://example.com/dynamic-zoning" }
    ]},
    { question: "Is there bedrock along the shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" }
    ]},
    { question: "Are there wetlands along the shoreline?", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Permitting State-Designated Areas", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/bluff-protection" }   
    ]},
    { question: "Is the shoreline armored (seawalls, riprap, etc.)?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" },
        { text: "Nonconformities and Variance Standards", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Greenbelt Requirements", link: "https://example.com/dynamic-zoning" },
        { text: "Impervious Surface Standards", link: "https://example.com/armoring-prohibition" }
    ]},
    { question: "Are there state-designated critical dunes, sensitive environmental areas, or high-risk erosion areas along the shoreline?", answersIfYes: [
        { text: "Permitting State-Designated Areas", link: "https://example.com/natural-features-overlay" }
    ]},
    { question: "Are there designated floodplains along the shoreline?", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Floodplain Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Impervious Surface Standards", link: "https://example.com/armoring-prohibition" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/bluff-protection" }   
    ]},
    { question: "Is the character of the shoreline similar across your community?", answersIfYes: [
        { text: "Shoreline District", link: "https://example.com/shoreline-district" }
    ]},
    { question: "Do you have more than one zoning district along your shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" },
        { text: "Shoreline Overlay District", link: "https://example.com/armoring-prohibition" }
    ]},
    { question: "Do you have capacity to implement and review discretionary standards in order to make zoning more flexible?", answersIfYes: [
        { text: "Design Guidelines", link: "https://example.com/impervious-surface-standards" },
        { text: "PUDs and Cluster Development", link: "https://example.com/stormwater-management" }
    ]},
    { question: "Do you have any land along your shoreline which may be platted or divided?", answersIfYes: [
        { text: "Land Division Regulations", link: "https://example.com/nonconformities-variance-standards" },
        { text: "Platting Review", link: "https://example.com/armoring-prohibition" },
        { text: "Site Condominium Standards", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Keyhole / Funneling Standards", link: "https://example.com/retreat-building-moving" }
    ]},
    { question: "Does development already exist within 100 feet of the shoreline?", answersIfYes: [
        { text: "Nonconformities and Variance Standards", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" }
    ]},
    { question: "Do you anticipate new development or redevelopment within 100 feet of your shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" },
        { text: "Shoreline District", link: "https://example.com/shoreline-district" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Open Space Requirements", link: "https://example.com/bluff-protection" },
        { text: "Impervious Surface Standards", link: "https://example.com/armoring-prohibition" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/bluff-protection" }   
    ]},
    { question: "Is there shoreline property which is experiencing erosion?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" }
    ]},
    { question: "Is there shoreline property which is experiencing flooding?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" },
        { text: "Impervious Surface Standards", link: "https://example.com/armoring-prohibition" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/bluff-protection" }   
    ]},
    { question: "Are there existing or desired shoreline-specific uses, such as marinas?", answersIfYes: [
        { text: "Shoreline District", link: "https://example.com/shoreline-district" },
        { text: "Special Shoreline Use Regulations (e.g. Marinas)", link: "https://example.com/shoreline-district" }
    ]},
    { question: "Is your community concerned about invasive plant or animal species?", answersIfYes: [
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/bluff-protection" }   
    ]},
    { question: "Is your community concerned about water quality?", answersIfYes: [
        { text: "Greenbelt Requirements", link: "https://example.com/shoreline-setbacks" },
        { text: "Impervious Surface Standards", link: "https://example.com/armoring-prohibition" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/bluff-protection" } 
    ]},
    { question: "Is it a priority for your community to preserve or create access to the shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://example.com/shoreline-setbacks" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/bluff-protection" },
        { text: "Open Space Requirements", link: "https://example.com/bluff-protection" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/bluff-protection" } 
    ]}
]

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

function showQuestions(screenIndex) {
    const form = document.createElement('form');
    form.id = 'quiz-form';

    // Define our custom groupings
    const groupings = [
        { startIndex: 1, count: 5 },
        { startIndex: 6, count: 4 },
        { startIndex: 10, count: 4 },
        { startIndex: 14, count: 5 },
        { startIndex: 19, count: 3 }
    ];

    // Define headers for each grouping
    const headers = [
        "Physical Characteristics (1/2)",
        "Physical Characteristics (2/2)",
        "Zoning",
        "Development",
        "Priorities"
    ];

    if (screenIndex >= groupings.length) {
        showResults();
        return;
    }

    const currentGroup = groupings[screenIndex];
    const startIndex = currentGroup.startIndex;
    const questionsToShow = quizData.slice(startIndex, startIndex + currentGroup.count);
    const endIndex = startIndex + currentGroup.count;

    // Add section header
    const header = document.createElement('h2');
    header.textContent = headers[screenIndex];
    header.style.textAlign = 'center';
    header.style.marginBottom = '14px';
    form.appendChild(header);

    const heading = document.createElement('p');
    heading.textContent = "Check all that apply (or leave blank if unsure):";
    heading.style.textAlign = 'center';
    heading.style.fontWeight = 'bold';
    heading.style.marginBottom = '14px';
    form.appendChild(heading);

    // Create questions for this screen
    questionsToShow.forEach((data, i) => {
        const div = document.createElement('div');
        div.className = 'question-item';

        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        questionContainer.style.display = 'flex'; // Align checkbox and text in a row
        questionContainer.style.alignItems = 'center'; // Vertically align checkbox and text

        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.name = `q${startIndex + i}`;
        checkboxInput.value = 'yes';
        checkboxInput.style.marginRight = '10px'; // Space between checkbox and text

        const questionLabel = document.createElement('span');
        questionLabel.innerHTML = data.question; 

        questionContainer.appendChild(checkboxInput);
        questionContainer.appendChild(questionLabel);
        div.appendChild(questionContainer);
        form.appendChild(div);
    });

    // Buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    // Continue button
    const continueButton = document.createElement('button');
    continueButton.type = 'submit';
    continueButton.textContent = 'Continue';
    continueButton.className = 'continue-btn';
    buttonsContainer.appendChild(continueButton);

    // Back button
    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.textContent = 'Back';
    backButton.className = 'back-btn';

    if (screenIndex > 0) {
        backButton.addEventListener('click', function() {
            questionScreen.innerHTML = '';
            showQuestions(screenIndex - 1);
        });
    } else {
        backButton.addEventListener('click', function() {
            questionScreen.classList.add('hidden');
            questionText.style.display = '';
            quizControls.style.display = '';
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
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Process checked answers
        questionsToShow.forEach((data, i) => {
            const questionIndex = startIndex + i;
            const input = form.querySelector(`input[name="q${questionIndex}"]:checked`);
            if (input && data.answersIfYes) {
                data.answersIfYes.forEach(answer => allSelectedAnswers.add(answer));
            }
        });

        questionScreen.innerHTML = '';
        if (endIndex < quizData.length) {
            showQuestions(screenIndex + 1);
        } else {
            showResults();
        }
    });

    questionScreen.innerHTML = '';
    questionScreen.appendChild(form);
}



  function showResults() {
    resultsScreen.classList.remove('hidden');
    answersList.innerHTML = '';
    
    // Make sure the results container has proper styling
    resultsScreen.className = 'results-container';
    
    if (allSelectedAnswers.size) {
      // Create a Set to store unique answers
      const uniqueAnswers = new Set();
      
      Array.from(allSelectedAnswers)
        .filter(answer => answer && typeof answer === 'object' && answer.text && answer.link)
        .sort((a, b) => a.text.localeCompare(b.text))
        .forEach(answer => {
          // Use the text as the unique identifier
          if (!uniqueAnswers.has(answer.text)) {
            uniqueAnswers.add(answer.text);
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = answer.link;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = answer.text;
            li.appendChild(a);
            
            answersList.appendChild(li);
          }
        });
    } else {
      answersList.innerHTML = "<li>No recommendations based on your selections.</li>";
    }
    
    // Only show restart button on results screen
    showRestartButton();
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
