const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");


plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        basicPrice.innerText = "3500zł";
        professionalPrice.innerText = "3800zł";
        businessPrice.innerText = "2300zł";
        planDuration.forEach(p => {
            p.innerText = "/ year";
        })
    } else {
        basicPrice.innerText = "3200zł";
        professionalPrice.innerText = "3500zł";
        businessPrice.innerText = "2100zł";
        planDuration.forEach(p => {
            p.innerText = "/ month";
        })
    }
})