document.addEventListener("DOMContentLoaded", function() {
    const atf6Slider = document.getElementById("atf6");
    const perkSlider = document.getElementById("perk");
    const ire1Slider = document.getElementById("ire1");
    const resultText = document.getElementById("result");
    const checkButton = document.createElement("button");

    checkButton.textContent = "Check if T-ALL will Progress";
    checkButton.style.display = "block";
    checkButton.style.margin = "20px auto";
    checkButton.style.padding = "10px 15px";
    checkButton.style.fontSize = "16px";
    checkButton.style.cursor = "pointer";
    document.body.appendChild(checkButton);

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

        // Poster-based evidence (🔬)
        if (atf6 === "Low" && perk === "Medium" && ire1 === "Medium") {
            response = "UPR disruption impairs T-ALL adaptation and survival.";
        } else if (atf6 === "High" && perk === "Medium" && ire1 === "Medium") {
            response = "UPR remains stable—T-ALL survival maintained.";
        } else if (atf6 === "High" && perk === "High" && ire1 === "High") {
            response = "Chronic ER stress—T-ALL survival impaired.";
        }
        
        // Hypothesis-based (🧪)
        else if (atf6 === "Low" && perk === "Low" && ire1 === "Low") {
            response = "🧪 Severe UPR suppression—T-ALL cells may rely on alternative survival pathways.";
            resultText.style.color = "#E9C9FF";
        } else if (atf6 === "Low" && perk === "Low" && ire1 === "Medium") {
            response = "🧪 Reduced UPR signaling—T-ALL cells may be vulnerable to stress.";
            resultText.style.color = "#E9C9FF";
        } else if (atf6 === "High" && perk === "Low" && ire1 === "Low") {
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

    checkButton.addEventListener("click", updateResult);
});
