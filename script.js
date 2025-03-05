document.addEventListener("DOMContentLoaded", function () {
    const atf6Slider = document.getElementById("atf6");
    const perkSlider = document.getElementById("perk");
    const ire1Slider = document.getElementById("ire1");
    const resultText = document.getElementById("result");
    const checkButton = document.getElementById("check-button");
    const resetButton = document.getElementById("resetExperiment");
    const factButton = document.getElementById("factButton");
    const factBox = document.getElementById("factBox");
    const closeFact = document.getElementById("closeFact");
    
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

        // Poster Evidence
        if (atf6 === "Low" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR disruption impairs T-ALL adaptation and survival.";
        } else if (atf6 === "High" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR remains stable—T-ALL survival maintained.";
        } else if (atf6 === "High" && perk === "High" && ire1 === "High") {
            response = "🔬 Chronic ER stress—T-ALL survival impaired.";
        }
        // Hypothesis
        else if (atf6 === "Low" && perk === "Low" && ire1 === "Low") {
            response = "🧪 Severe UPR suppression—T-ALL cells may rely on alternative survival pathways.";
            isHypothesis = true;
        }
        // Unchanged
        else {
            response = "🔄 UPR maintains homeostasis, no significant impact on T-ALL.";
        }

        resultText.textContent = "";
        resultText.style.color = isHypothesis ? "#FFAA64" : "#E9C9FF";

        // Typing effect
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

    // Fact Box Toggle
    const facts = [
        "As UPR can lead to drug-resistance, a better understanding of ER stress/UPR signals has the potential to develop effective anti-cancer therapies. (PMC7072709)",
        "We demonstrate cross talk between the IRE1 and PERK branches of the UPR, where IRE1 helps sustain PERK expression. (Nature, 2024)",
        "The overexpression of IRE1 and ATF6 in many cancers suggests their role in tumor progression. (AACR, 2015)",
        "UPR inhibits antigen presentation, suppressing T-cell-dependent anticancer immunity. (BioSignaling, 2023)"
    ];

    let factIndex = 0;
    function nextFact() {
        factIndex = (factIndex + 1) % facts.length;
        document.getElementById("factText").innerText = facts[factIndex];
    }

    function toggleFactBox() {
        factBox.style.display = factBox.style.display === "block" ? "none" : "block";
    }

    checkButton.addEventListener("click", updateResult);
    resetButton.addEventListener("click", resetSliders);
    factButton.addEventListener("click", toggleFactBox);
    closeFact.addEventListener("click", toggleFactBox);
});
