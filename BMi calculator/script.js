const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");
  if (height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  }
  else{
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    if(bmi<'18.6'){
         description = 'Under Weight';
    }else if(bmi>'18.6' && bmi<24.9){
         description = 'Normal Weight';
    }else{
        description = 'Over Weight';
    }

    results.innerHTML = `<span>Your BMI is ${bmi}</span><br>${description}`;
  }
});
