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
  
  // Hide results and restart button initially
  resultsScreen.classList.add('hidden');
  restartButton.classList.add('hidden');
  questionScreen.classList.add('hidden');
  
  // Show quiz questions if the user clicks "Interactive Tool"
  yesButton.addEventListener('click', function () {
    questionText.textContent = "Coastal Solutions Compendium: What is your coastal resilience priority?";
    showQuestions();
    questionScreen.classList.remove('hidden');
    resultsScreen.classList.add('hidden');
    questionText.classList.add('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
  });

  // Redirect to full tool list if the user clicks "View Full List of Tools"
  noButton.addEventListener('click', function () {
    window.location.href = quizData[0].linkIfNo; // Example link for full tool list
  });

  // Handle the quiz form submission
  restartButton.addEventListener('click', function () {
    // Reset answers and hide results
    answersList.innerHTML = '';
    restartButton.classList.add('hidden');
    questionScreen.classList.add('hidden');
    questionText.classList.remove('hidden');
    yesButton.classList.remove('hidden');
    noButton.classList.remove('hidden');
  });

  function showQuestions() {
    const form = document.createElement('form');
    quizData.forEach((item, index) => {
      const div = document.createElement('div');
      div.innerHTML = `<label><input type="checkbox" name="q${index}"> ${item.question}</label>`;
      form.appendChild(div);
    });
    
    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit Answers";
    form.appendChild(submitButton);
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const answers = new Set();
      const inputs = form.querySelectorAll("input[type='checkbox']");
      inputs.forEach((input, index) => {
        if (input.checked) {
          quizData[index].answersIfYes?.forEach(answer => answers.add(answer));
        }
      });

      // Show results after submission
      resultsScreen.classList.remove('hidden');
      answersList.innerHTML = answers.size ? Array.from(answers).map(a => `<li>${a}</li>`).join("") : "<li>No recommendations.</li>";
      restartButton.classList.remove('hidden');
    });
    
    questionScreen.appendChild(form);
  }
});




