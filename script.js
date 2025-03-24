document.addEventListener("DOMContentLoaded", function () {
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
    { question: "Physical Characteristics: Are there <strong>sensitive environmental areas</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Sensitive Environmental Areas", "Shoreline Setbacks", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards"] },
    { question: "Physical Characteristics: Are there <strong>high risk erosion areas</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "High Risk Erosion Area Protection", "Shoreline Setbacks", "Dynamic Zoning", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards"] },
    { question: "Physical Characteristics: Are there <strong>designated floodplains</strong> along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Floodplain Overlay District", "Shoreline Setbacks", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Physical Characteristics: Is the <strong>character of the shoreline</strong> similar across your community?", answersIfYes: ["Shoreline Setbacks", "Shoreline District", "Natural Shoreline Requirements", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Development: Does development <strong>already exist</strong> within 50ft of the shoreline?", answersIfYes: ["Nonconformities and Variance Standards", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Retreat / Building Moving"] },
    { question: "Development: Do you <strong>anticipate new development or redevelopment</strong> within 50 feet of your shoreline?", answersIfYes: ["Shoreline Setbacks", "Site Condos", "Armoring Prohibition", "Retreat / Building Moving"] },
    { question: "Development: Is there shoreline property which is experiencing <strong>erosion</strong>?", answersIfYes: ["Shoreline Setbacks", "Dynamic Zoning", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving"] },
    { question: "Development: Is there shoreline property which is experiencing <strong>flooding</strong>?", answersIfYes: ["Shoreline Setbacks", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure", "Open Space Requirements"] },
    { question: "Development: Are there <strong>existing or desired shoreline-specific uses</strong>, such as marinas?", answersIfYes: ["Shoreline Setbacks", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure", "Open Space Requirements"] },
    { question: "Priorities: Is your community concerned about <strong>invasive plant or animal species</strong>", answersIfYes: ["Invasive Species Prohibition"] },
    { question: "Priorities: Is your community concerned about <strong>water quality?</strong>", answersIfYes: ["Natural Shoreline Requirements", "Impervious Surface Standards", "Stormwater Management Requirements / Green Infrastructure"] },
    { question: "Priorities: Is it a priority for your community to <strong>preserve or create access to the shoreline?</strong>", answersIfYes: ["Shoreline Setbacks", "Land Division Regulations", "Long Lots", "Armoring Prohibition", "Temporary Shoreline Protections (Sandbags, Geotubes)", "Stormwater Management Requirements / Green Infrastructure", "Open Space Requirements"] }
  ];

  let currentPage = 0; // Track current page
  
  // Number of questions per page
  const questionsPerPage = Math.ceil(quizData.length / 3);
  
  // Get DOM elements
  const yesButton = document.getElementById('yes-btn');
  const noButton = document.getElementById('no-btn');
  const questionText = document.getElementById('question-text');
  const quizControls = document.getElementById('quiz-controls');
  const questionScreen = document.getElementById('question-screen');
  const resultsScreen = document.getElementById('results');
  const answersList = document.getElementById('answers-list');
  const restartButton = document.getElementById('restart-btn');

  // Show quiz questions if the user clicks "Interactive Tool"
  yesButton.addEventListener('click', function () {
    questionText.style.display = 'none';
    quizControls.style.display = 'none';
    questionScreen.classList.remove('hidden');
    showPage(currentPage);
  });

  // Redirect to full tool list if the user clicks "View Full List of Tools"
  noButton.addEventListener('click', function () {
    window.location.href = quizData[0].linkIfNo;
  });

  function showPage(pageIndex) {
    // Clear existing question content
    questionScreen.innerHTML = '';

    // Calculate question indices for the current page
    const startIndex = pageIndex * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, quizData.length);

    // Create form
    const form = document.createElement('form');
    form.id = 'quiz-form';

    const heading = document.createElement('h2');
    heading.textContent = `Page ${pageIndex + 1}`;
    form.appendChild(heading);

    // Loop through questions for the current page
    for (let i = startIndex; i < endIndex; i++) {
      const div = document.createElement('div');
      div.className = 'question-item';

      const questionLabel = document.createElement('span');
      questionLabel.textContent = quizData[i].question;

      const radioContainer = document.createElement('div');
      radioContainer.className = 'radio-options';

      const yesLabel = document.createElement('label');
      yesLabel.innerHTML = `<input type="radio" name="q${i}" value="yes"> Yes`;

      const noLabel = document.createElement('label');
      noLabel.innerHTML = `<input type="radio" name="q${i}" value="no"> No`;

      radioContainer.appendChild(yesLabel);
      radioContainer.appendChild(noLabel);

      div.appendChild(questionLabel);
      div.appendChild(radioContainer);
      form.appendChild(div);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = pageIndex === 2 ? "Submit" : "Next";
    nextButton.type = "button";
    nextButton.className = "next-btn";
    form.appendChild(nextButton);

    nextButton.addEventListener('click', function () {
      if (pageIndex === 2) {
        showResults();
      } else {
        currentPage++;
        showPage(currentPage);
      }
    });

    const prevButton = document.createElement('button');
    prevButton.textContent = "Previous";
    prevButton.type = "button";
    prevButton.className = "prev-btn";
    form.appendChild(prevButton);

    prevButton.addEventListener('click', function () {
      if (pageIndex > 0) {
        currentPage--;
        showPage(currentPage);
      }
    });

    questionScreen.appendChild(form);
  }

  function showResults() {
    resultsScreen.classList.remove('hidden');
    questionScreen.classList.add('hidden');
  }

  restartButton.addEventListener('click', function () {
    resultsScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    currentPage = 0;
    showPage(currentPage);
  });
});


