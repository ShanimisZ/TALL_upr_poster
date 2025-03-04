document.addEventListener("DOMContentLoaded", function() {
    const atf6Slider = document.getElementById("atf6");
    const perkSlider = document.getElementById("perk");
    const ire1Slider = document.getElementById("ire1");
    const resultText = document.getElementById("result");

    function updateResult() {
        const atf6 = parseInt(atf6Slider.value);
        const perk = parseInt(perkSlider.value);
        const ire1 = parseInt(ire1Slider.value);
        let response = "";

        // Poster-based evidence (🔬)
        if (atf6 <= 30 && perk >= 40 && ire1 >= 40) {
            response = "UPR disruption impairs T-ALL adaptation and survival.";
        } else if (atf6 >= 70 && perk >= 50 && ire1 >= 50) {
            response = "UPR remains stable—T-ALL survival maintained.";
        } else if (atf6 >= 80 && perk >= 80 && ire1 >= 80) {
            response = "Chronic ER stress—T-ALL survival impaired.";
        }
        
        // Hypothesis-based (🧪)
        else if (atf6 <= 20 && perk <= 20 && ire1 <= 20) {
            response = "🧪 Severe UPR suppression—T-ALL cells may rely on alternative survival pathways.";
            resultText.style.color = "#E9C9FF";
        } else if (atf6 <= 30 && perk <= 30 && ire1 >= 40) {
            response = "🧪 Reduced UPR signaling—T-ALL cells may be vulnerable to stress.";
            resultText.style.color = "#E9C9FF";
        } else if (atf6 >= 70 && perk <= 30 && ire1 <= 30) {
            response = "🧪 Chronic ATF6 stress—ER dysfunction may impair T-ALL survival.";
            resultText.style.color = "#E9C9FF";
        }
        
        // Unchanged cases
        else {
            response = "UPR maintains homeostasis, no significant impact on T-ALL.";
            resultText.style.color = "#1B3A5E";
        }

        resultText.textContent = response;
    }

    atf6Slider.addEventListener("input", updateResult);
    perkSlider.addEventListener("input", updateResult);
    ire1Slider.addEventListener("input", updateResult);

    updateResult(); // Initialize default response
});
