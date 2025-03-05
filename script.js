document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const atf6Slider = document.getElementById("atf6");
    const perkSlider = document.getElementById("perk");
    const ire1Slider = document.getElementById("ire1");
    const resultText = document.getElementById("result");
    const analyzeButton = document.getElementById("analyze-btn");
    const resetButton = document.getElementById("reset-btn");
    const factIcon = document.getElementById("factIcon");
    const factBox = document.getElementById("factBox");
    const factText = document.getElementById("factText");
    const nextFactBtn = document.getElementById("nextFactBtn");
    const factOverlay = document.getElementById("factOverlay");
    const feedbackInput = document.getElementById("feedback-box");
    const sendButton = document.getElementById("sendFeedback");

    // Facts Array
    const facts = [
        "As UPR can lead to drug resistance, understanding ER stress/UPR signals is crucial for anti-cancer therapies. (PMC7072709)",
        "There is cross talk between the IRE1 and PERK branches of the UPR, where IRE1 helps sustain PERK expression. (Nature, 2024)",
        "IRE1 and ATF6 overexpression in many cancers suggests their role in tumor progression. (AACR, 2015)",
        "UPR inhibits antigen presentation, suppressing T-cell-dependent anticancer immunity. (BioSignaling, 2023)"
    ];

    let factIndex = 0;

    function showNextFact() {
        factIndex = (factIndex + 1) % facts.length;
        factText.textContent = facts[factIndex];
    }

    function toggleFactBox() {
        if (factBox.classList.contains("show")) {
            factBox.classList.remove("show");
            factOverlay.style.display = "none";
            setTimeout(() => {
                factBox.style.display = "none";
            }, 300);
        } else {
            factBox.style.display = "block";
            setTimeout(() => {
                factBox.classList.add("show");
                factOverlay.style.display = "block";
            }, 10);
            showNextFact(); // Only show new fact when box first opens
        }
    }

    // Only show next fact, without closing the fact box
    nextFactBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent accidental closing
        showNextFact();
    });

    factIcon.addEventListener("click", toggleFactBox);
    factOverlay.addEventListener("click", toggleFactBox);
    
    function getLevel(value) {
        if (value < 35) return "Low";
        if (value <= 75) return "Medium";
        return "High";
    }

    function updateResult() {
        let atf6 = getLevel(parseInt(atf6Slider.value));
        let perk = getLevel(parseInt(perkSlider.value));
        let ire1 = getLevel(parseInt(ire1Slider.value));
        let response = "";
        let isHypothesis = false;

        if (atf6 === "Low" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR disruption impairs T-ALL adaptation and survival.";
        } else if (atf6 === "High" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR remains stable—T-ALL survival maintained.";
        } else if (atf6 === "High" && perk === "High" && ire1 === "High") {
            response = "🔬 Chronic ER stress—T-ALL survival impaired.";
        } else {
            response = "🔄 UPR maintains homeostasis, no significant impact on T-ALL.";
        }

        resultText.textContent = response;
        resultText.style.color = isHypothesis ? "#FFAA64" : "#9355aa";
    }

    function resetSliders() {
        atf6Slider.value = 50;
        perkSlider.value = 50;
        ire1Slider.value = 50;
        resultText.textContent = "Adjust the sliders and click below to analyze.";
    }

    analyzeButton.addEventListener("click", updateResult);
    resetButton.addEventListener("click", resetSliders);
    factIcon.addEventListener("click", toggleFactBox);
    nextFactBtn.addEventListener("click", showNextFact);
    factOverlay.addEventListener("click", toggleFactBox);
  
    // Ensure button exists before adding event listener
    if (sendButton) {
        sendButton.addEventListener("click", function () {
            const feedback = feedbackInput.value.trim();
            if (feedback === "") {
                alert("Please enter a message before sending.");
            } else {
                alert("Thank you for your feedback!");
                feedbackInput.value = ""; // Clears the input field
            }
        });
    }
    
});
