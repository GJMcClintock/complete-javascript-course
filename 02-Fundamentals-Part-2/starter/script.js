const bills = [22,295,176,440,37,105,0,1100,86,52]

const tips = []

const totals = []


function calcTip(bill) {
    let tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2
    return tip
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i])
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAvg(arr) {
    let n = arr.length;
    sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }
    let avg = sum / n 
    return avg
}

console.log(calcAvg(totals))

