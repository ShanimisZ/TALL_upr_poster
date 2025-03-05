document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".vertical-slider");
    const resultText = document.getElementById("result");

    function getLevel(value) {
        if (value < 35) return "Low";
        if (value <= 75) return "Medium";
        return "High";
    }

    function updateResult() {
        let atf6 = getLevel(parseInt(document.getElementById("atf6").value));
        let perk = getLevel(parseInt(document.getElementById("perk").value));
        let ire1 = getLevel(parseInt(document.getElementById("ire1").value));

        let response = "🔄 UPR maintains homeostasis, no significant impact on T-ALL.";
        let isHypothesis = false;

        if (atf6 === "Low" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR disruption impairs T-ALL adaptation.";
        } else if (atf6 === "High" && perk === "Medium" && ire1 === "Medium") {
            response = "🔬 UPR remains stable—T-ALL survival maintained.";
        } else if (atf6 === "High" && perk === "High" && ire1 === "High") {
            response = "🔬 Chronic ER stress—T-ALL survival impaired.";
        } 

        resultText.textContent = response;
        resultText.style.color = isHypothesis ? "#FFAA64" : "#E9C9FF";
    }

    function resetSliders() {
        sliders.forEach(slider => slider.value = 50);
        resultText.textContent = "Adjust the sliders and click below to see the effect.";
    }

    document.querySelector(".check-btn").addEventListener("click", updateResult);
    document.querySelector(".reset-btn").addEventListener("click", resetSliders);
    document.getElementById("feedbackSend").addEventListener("click", function() {
        alert("Thank you for your feedback!");
        document.getElementById("feedbackMessage").value = "";
    });
});
