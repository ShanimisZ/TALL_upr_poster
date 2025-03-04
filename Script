document.addEventListener("DOMContentLoaded", function () {
    const atf6 = document.getElementById("atf6");
    const perk = document.getElementById("perk");
    const ire1 = document.getElementById("ire1");
    const result = document.getElementById("result");

    function updateResult() {
        let atf6Value = parseInt(atf6.value);
        let perkValue = parseInt(perk.value);
        let ire1Value = parseInt(ire1.value);

        if (atf6Value > 70) {
            result.textContent = "Increased ATF6 leads to chronic ER stress, impairing T-ALL survival!";
            result.style.color = "#D65780";
        } else if (perkValue > 70) {
            result.textContent = "PERK activation supports stress adaptation, aiding T-ALL progression.";
            result.style.color = "#1B3A5E";
        } else if (ire1Value > 70) {
            result.textContent = "IRE1 fine-tunes survival, maintaining T-ALL persistence.";
            result.style.color = "#C879FF";
        } else {
            result.textContent = "Adjust the sliders to see the effect.";
            result.style.color = "#1B3A5E";
        }
    }

    atf6.addEventListener("input", updateResult);
    perk.addEventListener("input", updateResult);
    ire1.addEventListener("input", updateResult);
});
