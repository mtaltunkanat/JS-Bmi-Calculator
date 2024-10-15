const calculate = () => {
    let bmi;
    let result = document.getElementById("result");

    let weight = parseInt(document.getElementById("weight").value)
    document.getElementById("weightValue").textContent = weight + "kg"

    let height = parseInt(document.getElementById("height").value)
    document.getElementById("heightValue").textContent = height + "cm"

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1)

    result.textContent = bmi;

    let bmiStatus = "";    
    let adviceText = "";

    if (bmi < 18.5) {
        bmiStatus = "Underweight"
        result.style.color = "#f77f00"
        adviceText = "Your weight is low, you should eat healthier.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus = "Normal Weight"
        result.style.color = "#70e000"
        adviceText = "You are at a healthy weight!";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        bmiStatus = "Overweight"
        result.style.color = "#ff0054"
        adviceText = "You are a little overweight, you should be careful.";
    }
    else {
        bmiStatus = "Obese"
        result.style.color = "#c1121f"
        adviceText = "You are obese, you should start exercising!";
    }

    document.getElementById("status").textContent = bmiStatus;
    document.getElementById("advice").textContent = adviceText;
}
