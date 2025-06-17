let currentStep = 1;
const totalSteps = 5;
const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
nextButton.addEventListener('click', () => {
    if (currentStep < totalSteps) {
        circles[currentStep].classList.add('active');
        lines[currentStep - 1].classList.add('active');
        currentStep++;
        updateButtons();
    }
});
prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        circles[currentStep].classList.remove('active');
        lines[currentStep - 1].classList.remove('active');
        updateButtons();
    }
});
function updateButtons() {
    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === totalSteps;
}