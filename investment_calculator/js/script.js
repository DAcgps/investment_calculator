function run_calulator() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    let compoundInterest = principal * Math.pow(1 + rate / 100, years);

    document.getElementById('result').innerHTML = "Compound Interest: $" + compoundInterest.toFixed(2);

}
