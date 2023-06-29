# Javascript-Projects

## AGE CALCULATOR

## CODE
```
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2-y1;

    if(m2>=m1){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2>=d1){
        d3 = d2-d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2-d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`
}
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
```

## BMI CALCULATOR

## CODE

```
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === "" || height<0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}<span>`;
        if(bmi > 24.9){
            results.innerHTML = "<h2>'You are overweight'</h2>";
        }
        if(bmi < 18.6){
            results.innerHTML = "<h2>'You are underweight'</h2>";
        }
        if(bmi >= 18.9 && bmi <= 24.9){
            results.innerHTML = "<h2>'You are Healthy'</h2>";
        }
    }
});
```
