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
    { question: "Are there sensitive environmental areas along the shoreline?", answersIfYes: ["Natural Features Setbacks", "Natural Features Overlay", "Sensitive Environmental Areas", "Shoreline Setbacks", "Armoring Prohibition", "Temporary Shoreline Protections", "Natural Shoreline Requirements", "Retreat / Building Moving", "Impervious Surface Standards"] },
  ];

  const quizForm = document.getElementById("quiz-form");
  const resultsDiv = document.getElementById("results");
  const answersList = document.getElementById("answers-list");

  quizData.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<label><input type='checkbox' name='q${index}'> ${item.question}</label>`;
    quizForm.appendChild(div);
  });

  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const answers = new Set();
    const inputs = quizForm.querySelectorAll("input[type='checkbox']");
    inputs.forEach((input, index) => {
      if (input.checked) {
        quizData[index].answersIfYes?.forEach(answer => answers.add(answer));
      }
    });

    resultsDiv.classList.remove("hidden");
    answersList.innerHTML = answers.size ? Array.from(answers).map(a => `<li>${a}</li>`).join("") : "<li>No recommendations.</li>";
  });
});

