const cups = document.querySelectorAll('.cup-small');
const remainedDiv = document.getElementById('remained');
const percentageDiv = document.getElementById('percentage');

let totalGlasses = 0;

cups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        if (cup.classList.contains('full')) {
            // If already full, remove full class and decrement total glasses
            cup.classList.remove('full');
            totalGlasses--;
        } else {
            // If not full, add full class and increment total glasses
            cup.classList.add('full');
            totalGlasses++;
        }

        // Update the remained and percentage divs
        updateCupInfo();
    });
});

function updateCupInfo() {
    const goalLitres = 2;
    const filledLitres = totalGlasses * 0.25; // Assuming each glass is 0.25 Litres

    remainedDiv.textContent = `${goalLitres - filledLitres} Litres`;
    percentageDiv.textContent = `${((filledLitres / goalLitres) * 100).toFixed(0)}%`;
}
