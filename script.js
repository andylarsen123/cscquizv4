document.addEventListener("DOMContentLoaded", function () {
  // Initialize quiz data
const quizData = [
    { question: "<strong>Coastal Solutions Compendium:</strong><br>Choose an option", answersIfYes: [{ text: "Interactive Tool", link: "https://example.com/interactive-tool" }], linkIfNo: "https://example.com/full-tool-list" },
      { question: "Is the shoreline elevated, such as by bluffs?", answersIfYes: [
        { text: "Natural Features Setbacks", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Bluff Protection", link: "https://example.com/bluff-protection" }
    ]},
    { question: "Is the shoreline sandy?", answersIfYes: [
        { text: "Natural Features Setbacks", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Bluff Protection", link: "https://example.com/bluff-protection" },
        { text: "Dynamic Zoning", link: "https://example.com/dynamic-zoning" }
    ]},
    { question: "Are there dunes along the shoreline?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Dynamic Zoning", link: "https://example.com/dynamic-zoning" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" }
    ]},
    { question: "Are there coarse sediment beaches along the shoreline?", answersIfYes: [
        { text: "Natural Features Setbacks", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Dune Protection", link: "https://example.com/dune-protection" },
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Dynamic Zoning", link: "https://example.com/dynamic-zoning" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" }
    ]},
    { question: "Is there bedrock along the shoreline?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" }
    ]},
    { question: "Are there wetlands along the shoreline?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" }
    ]},
    { question: "Is the shoreline armored (seawalls, riprap, etc.)?", answersIfYes: [
        { text: "Natural Features Setbacks", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Wetlands Protection", link: "https://example.com/wetlands-protection" },
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" }
    ]},
    { question: "Are there state-designated critical dunes, sensitive environmental areas, or high-risk erosion areas along the shoreline?", answersIfYes: [
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" }
    ]},
    { question: "Are there designated floodplains along the shoreline?", answersIfYes: [
        { text: "Natural Features Setbacks", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Sensitive Environmental Areas", link: "https://example.com/sensitive-environmental-areas" },
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" }
    ]},
    { question: "Is the character of the shoreline similar across your community?", answersIfYes: [
        { text: "Natural Features Setbacks", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "High Risk Erosion Area Protection", link: "https://example.com/high-risk-erosion-protection" },
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Dynamic Zoning", link: "https://example.com/dynamic-zoning" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" }
    ]},
    { question: "Do you have more than one zoning district along your shoreline?", answersIfYes: [
        { text: "Natural Features Setbacks", link: "https://example.com/natural-features-setbacks" },
        { text: "Natural Features Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Floodplain Overlay District", link: "https://example.com/floodplain-overlay-district" },
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" }
    ]},
    { question: "Do you have capacity to implement and review discretionary standards in order to make zoning more flexible?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Shoreline District", link: "https://example.com/shoreline-district" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" }
    ]},
    { question: "Do you have any land along your shoreline which may be platted or divided?", answersIfYes: [
        { text: "Nonconformities and Variance Standards", link: "https://example.com/nonconformities-variance-standards" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" }
    ]},
    { question: "Does development already exist within 100 feet of the shoreline?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Site Condos", link: "https://example.com/site-condos" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" }
    ]},
    { question: "Do you anticipate new development or redevelopment within 100 feet of your shoreline?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Dynamic Zoning", link: "https://example.com/dynamic-zoning" },
        { text: "Land Division Regulations", link: "https://example.com/land-division-regulations" },
        { text: "Long Lots", link: "https://example.com/long-lots" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" }
    ]},
    { question: "Is there shoreline property which is experiencing erosion?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Land Division Regulations", link: "https://example.com/land-division-regulations" },
        { text: "Long Lots", link: "https://example.com/long-lots" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" },
        { text: "Open Space Requirements", link: "https://example.com/open-space-requirements" }
    ]},
    { question: "Is there shoreline property which is experiencing flooding?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Land Division Regulations", link: "https://example.com/land-division-regulations" },
        { text: "Long Lots", link: "https://example.com/long-lots" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Retreat / Building Moving", link: "https://example.com/retreat-building-moving" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" },
        { text: "Open Space Requirements", link: "https://example.com/open-space-requirements" }
    ]},
    { question: "Are there existing or desired shoreline-specific uses, such as marinas?", answersIfYes: [
        { text: "Invasive Species Prohibition", link: "https://example.com/invasive-species-prohibition" }
    ]},
    { question: "Is your community concerned about invasive plant or animal species?", answersIfYes: [
        { text: "Natural Shoreline Requirements", link: "https://example.com/natural-shoreline-requirements" },
        { text: "Impervious Surface Standards", link: "https://example.com/impervious-surface-standards" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" }
    ]},
    { question: "Is your community concerned about water quality?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Land Division Regulations", link: "https://example.com/land-division-regulations" },
        { text: "Long Lots", link: "https://example.com/long-lots" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" },
        { text: "Open Space Requirements", link: "https://example.com/open-space-requirements" }
    ]},
    { question: "Is it a priority for your community to preserve or create access to the shoreline?", answersIfYes: [
        { text: "Shoreline Setbacks", link: "https://example.com/shoreline-setbacks" },
        { text: "Land Division Regulations", link: "https://example.com/land-division-regulations" },
        { text: "Long Lots", link: "https://example.com/long-lots" },
        { text: "Armoring Prohibition", link: "https://example.com/armoring-prohibition" },
        { text: "Temporary Shoreline Protections (Sandbags, Geotubes)", link: "https://example.com/temporary-shoreline-protections" },
        { text: "Stormwater Management Requirements / Green Infrastructure", link: "https://example.com/stormwater-management" },
        { text: "Open Space Requirements", link: "https://example.com/open-space-requirements" }
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
    
    // Define question groups
    const questionGroups = [
        { start: 1, count: 9 },  // First 9 questions (1-9)
        { start: 10, count: 4 }, // Next 4 questions (10-13)
        { start: 14, count: 5 }, // Next 5 questions (14-18)
        { start: 19, count: 3 }  // Last 3 questions (19-21)
    ];
    
    // If we're beyond our defined groups, return empty form
    if (screenIndex >= questionGroups.length) {
        return form;
    }
    
    const currentGroup = questionGroups[screenIndex];
    const startIndex = currentGroup.start;
    const endIndex = startIndex + currentGroup.count;
    const questionsToShow = quizData.slice(startIndex, endIndex);
    
    const heading = document.createElement('p');
    heading.textContent = "Select Yes or No (or Skip if Unsure):";
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
    
    return form;
}
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
