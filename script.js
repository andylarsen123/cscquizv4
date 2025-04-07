document.addEventListener("DOMContentLoaded", function () {
  // Initialize quiz data
const quizData = [
    { question: "<strong>Coastal Solutions Compendium:</strong><br>Choose an option", answersIfYes: [{ text: "Interactive Tool", link: "https://example.com/interactive-tool" }], linkIfNo: "https://www.planningmi.org/aws/MAP/pt/show_detail/588804?layout_name=layout_details&model_name=news_article" },
      { question: "Is the shoreline <strong>elevated</strong>, such as by bluffs?", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/" },
        { text: "Bluff Protection Overlay", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589620?layout_name=layout_details&model_name=news_article" }
    ]},
    { question: "Is the shoreline <strong>sandy?</strong>", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Greenbelt Requirements", link: "https://example.com/" }
    ]},
    { question: "Are there <strong>dunes</strong> along the shoreline?", answersIfYes: [
        { text: "Bluff Protection Overlay", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589620?layout_name=layout_details&model_name=news_article" },
        { text: "Dune Protection Overlay", link: "https://example.com/" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Greenbelt Requirements", link: "https://example.com/" }
    ]},
    { question: "Are there <strong>coarse sediment beaches </strong> along the shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Wetland Protection Overlay", link: "https://example.com" }
    ]},
    { question: "Is there <strong>bedrock</strong> along the shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" }
    ]},
    { question: "Are there <strong>wetlands</strong> along the shoreline?", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/" },
        { text: "Permitting State-Designated Areas", link: "https://example.com/" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com" }   
    ]},
    { question: "Is the shoreline <strong>armored</strong> (seawalls, riprap, etc.)?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Nonconformities and Variance Standards", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Greenbelt Requirements", link: "https://example.com/" },
        { text: "Impervious Surface Standards", link: "https://example.com" }
    ]},
    { question: "Are there <strong>state-designated</strong> critical dunes, sensitive environmental areas, or high-risk erosion areas along the shoreline?", answersIfYes: [
        { text: "Permitting State-Designated Areas", link: "https://example.com/" }
    ]},
    { question: "Are there <strong>designated floodplains</strong> along the shoreline?", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/natural-features-overlay" },
        { text: "Floodplain Overlay", link: "https://example.com/" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Impervious Surface Standards", link: "https://example.com/" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/" }   
    ]},
    { question: "Is the <strong>character of the shoreline similar</strong> across your community?", answersIfYes: [
        { text: "Shoreline District", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589619?layout_name=layout_details&model_name=news_article" }
    ]},
    { question: "Do you have <strong>more than one zoning district</strong> along your shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Shoreline Overlay District", link: "https://example.com/" }
    ]},
    { question: "Do you have capacity to implement and review <strong>discretionary standards</strong> in order to make zoning more flexible?", answersIfYes: [
        { text: "Design Guidelines", link: "https://example.com/impervious-surface-standards" },
        { text: "PUDs and Cluster Development", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589621?layout_name=layout_details&model_name=news_article" }
    ]},
    { question: "Do you have any land along your shoreline which may be <strong>platted or divided?</strong>", answersIfYes: [
        { text: "Land Division Regulations", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589623?layout_name=layout_details&model_name=news_article" },
        { text: "Platting Review", link: "https://example.com/" },
        { text: "Site Condominium Standards", link: "https://example.com/" },
        { text: "Keyhole / Funneling Standards", link: "https://example.com/" }
    ]},
    { question: "Does <strong>development already exist</strong> within 100 feet of the shoreline?", answersIfYes: [
        { text: "Nonconformities and Variance Standards", link: "https://example.com/natural-features-overlay" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Retreat / Building Moving", link: "https://example.com" }
    ]},
    { question: "Do you anticipate <strong>new development or redevelopment</strong> within 100 feet of your shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Shoreline District", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589619?layout_name=layout_details&model_name=news_article" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com" },
        { text: "Open Space Requirements", link: "https://example.com" },
        { text: "Impervious Surface Standards", link: "https://example.com" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com" }   
    ]},
    { question: "Is there shoreline property experiencing <strong>erosion?</strong>", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Retreat / Building Moving", link: "https://example.com/" }
    ]},
    { question: "Is there shoreline property experiencing <strong>flooding?</strong>", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Retreat / Building Moving", link: "https://example.com/" },
        { text: "Impervious Surface Standards", link: "https://example.com/" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/" }   
    ]},
    { question: "Are there existing or desired <strong>shoreline-specific uses</strong>, such as marinas?", answersIfYes: [
        { text: "Shoreline District", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589619?layout_name=layout_details&model_name=news_article" },
        { text: "Special Shoreline Use Regulations (e.g. Marinas)", link: "https://example.com/" }
    ]},
    { question: "Is your community concerned about <strong>invasive plant or animal species?</strong>", answersIfYes: [
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/" }   
    ]},
    { question: "Is your community concerned about <strong>water quality?</strong>", answersIfYes: [
        { text: "Greenbelt Requirements", link: "https://example.com/" },
        { text: "Impervious Surface Standards", link: "https://example.com/" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/" } 
    ]},
    { question: "Is it a priority for your community to <strong>preserve or create access</strong> to the shoreline?", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article" },
        { text: "Armoring Prohibition / Temporary Shoreline Protections", link: "https://example.com/" },
        { text: "Open Space Requirements", link: "https://example.com/" },
        { text: "Stormwater Management Req. / Green Infrastructure", link: "https://example.com/" } 
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
    window.location.href = "https://www.planningmi.org/aws/MAP/pt/show_detail/588804?layout_name=layout_details&model_name=news_article";
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
    header.style.marginBottom = '10px';
    form.appendChild(header);

    const heading = document.createElement('p');
    heading.textContent = "Check all that applies to your shoreline (or blank if unsure):";
    heading.style.textAlign = 'left';
    heading.style.fontWeight = 'bold';
    heading.style.marginLeft = '13px';
    heading.style.marginBottom = '5px';
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
        checkboxInput.id = `checkbox-${startIndex + i}`

        const checkboxLabel = document.createElement('label');
        checkboxLabel.setAttribute('for', checkboxInput.id); // Link the label to the checkbox

        checkboxLabel.innerHTML = "Select";

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
