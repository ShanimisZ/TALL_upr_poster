document.addEventListener("DOMContentLoaded", function() {
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

        resultText.textContent = "";
        resultText.style.color = isHypothesis ? "#FFAA64" : "#9355aa";

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
        resultText.textContent = "Adjust the sliders and click below to analyze.";
    }

    analyzeButton.addEventListener("click", updateResult);
    resetButton.addEventListener("click", resetSliders);

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
                    showNextFact();
                }
            }
        
            factIcon.addEventListener("click", toggleFactBox);
            nextFactBtn.addEventListener("click", showNextFact);
            factOverlay.addEventListener("click", toggleFactBox);
        });
});
