document.addEventListener("DOMContentLoaded", function() {
    const atf6Slider = document.getElementById("atf6");
    const perkSlider = document.getElementById("perk");
    const ire1Slider = document.getElementById("ire1");
    const resultText = document.getElementById("result");
    const checkButton = document.createElement("button");
    const resetButton = document.createElement("button");

    checkButton.textContent = "Check if T-ALL will Progress";
    resetButton.textContent = "Reset Experiment";
    checkButton.classList.add("action-button");
    resetButton.classList.add("action-button", "reset-button");

    document.body.appendChild(checkButton);
    document.body.appendChild(resetButton);

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

        // Poster-based evidence (🔬)
        if (atf6 === "Low" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR disruption impairs T-ALL adaptation and survival.";
        } else if (atf6 === "High" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR remains stable—T-ALL survival maintained.";
        } else if (atf6 === "High" && perk === "High" && ire1 === "High") {
            response = "🔬 Chronic ER stress—T-ALL survival impaired.";
        }
        
        // Hypothesis-based (🧪)
        else if (atf6 === "Low" && perk === "Low" && ire1 === "Low") {
            response = "🧪 Severe UPR suppression—T-ALL cells may rely on alternative survival pathways.";
            isHypothesis = true;
        } else if (atf6 === "Low" && perk === "Low" && ire1 === "Medium") {
            response = "🧪 Reduced UPR signaling—T-ALL cells may be vulnerable to stress.";
            isHypothesis = true;
        } else if (atf6 === "High" && perk === "Low" && ire1 === "Low") {
            response = "🧪 Chronic ATF6 stress—ER dysfunction may impair T-ALL survival.";
            isHypothesis = true;
        }
        
        // Unchanged cases
        else {
            response = "🔄 UPR maintains homeostasis, no significant impact on T-ALL.";
        }

        // Apply effects
        resultText.textContent = "";
        resultText.style.color = isHypothesis ? "#FFAA64" : "#E9C9FF";
        
        // Typing effect for result text
        let i = 0;
        function typeEffect() {
            if (i < response.length) {
                resultText.textContent += response.charAt(i);
                i++;
                setTimeout(typeEffect, 30);
            }
        }
        typeEffect();
    }

    function resetSliders() {
        atf6Slider.value = 50;
        perkSlider.value = 50;
        ire1Slider.value = 50;
        resultText.textContent = "";
    }

    checkButton.addEventListener("click", updateResult);
    resetButton.addEventListener("click", resetSliders);
});

// Facts Array
const facts = [
    "As UPR can lead to drug-resistance, a better understanding of ER stress/UPR signals has the potential to develop effective anti-cancer therapies. (PMC7072709)",
    "We demonstrate cross talk between the IRE1 and PERK branches of the UPR, where IRE1 helps sustain PERK expression. (Nature, 2024)",
    "The overexpression of IRE1 and ATF6 in many cancers suggests their role in tumor progression. (AACR, 2015)",
    "UPR inhibits antigen presentation, suppressing T-cell-dependent anticancer immunity. (BioSignaling, 2023)"
];

let factIndex = 0;

// Toggle Fact Box
function toggleFactBox() {
    let factBox = document.getElementById("factBox");
    factBox.style.display = factBox.style.display === "block" ? "none" : "block";
}

// Rotate Facts
function nextFact() {
    factIndex = (factIndex + 1) % facts.length;
    document.getElementById("factText").innerText = facts[factIndex];
}

// Evaluate T-ALL Progression
function evaluateUPR() {
    document.getElementById("result").innerText = "Processing UPR response... (Coming soon!)";
}

// Reset Experiment
function resetExperiment() {
    document.getElementById("result").innerText = "Adjust the sliders and click below to see the effect.";
}
