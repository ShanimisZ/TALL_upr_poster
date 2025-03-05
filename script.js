document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".slider");
    const resultText = document.getElementById("result");
    const checkButton = document.getElementById("checkButton");
    const resetButton = document.getElementById("resetButton");

    function getLevel(value) {
        if (value < 35) return "Low";
        if (value <= 75) return "Medium";
        return "High";
    }

    function updateResult() {
        let levels = [...sliders].map(slider => getLevel(parseInt(slider.value)));
        let response = "🔄 UPR maintains homeostasis, no significant impact on T-ALL.";

        if (levels.join() === "Low,Medium,Medium") {
            response = "🔬 UPR disruption impairs T-ALL adaptation and survival.";
        } else if (levels.join() === "High,Medium,Medium") {
            response = "🔬 UPR remains stable—T-ALL survival maintained.";
        } else if (levels.join() === "High,High,High") {
            response = "🔬 Chronic ER stress—T-ALL survival impaired.";
        }

        resultText.textContent = response;
    }

    function resetSliders() {
        sliders.forEach(slider => slider.value = 50);
        resultText.textContent = "Adjust the sliders and click below to see the effect.";
    }

    checkButton.addEventListener("click", updateResult);
    resetButton.addEventListener("click", resetSliders);
});
