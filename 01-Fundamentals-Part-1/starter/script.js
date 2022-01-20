const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;

function calculateBMI(m, h) {
    let bmi = m / h ** 2
    return bmi.toFixed(2)
}

const markBMI = calculateBMI(markMass, markHeight);
const johnBMI = calculateBMI(johnMass, johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(`Mark weighs ${markMass} kg and is ${markHeight} m tall. His BMI is ${markBMI}.`)
console.log(`John weighs ${johnMass} kg and is ${johnHeight} m tall. His BMI is ${johnBMI}.`)