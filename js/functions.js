
// Martin's trick
function taxed_salary(salary, tax) {
    return salary * (1 - tax);
  }
  
  function salary(pay, hours, days) {
    return pay * hours * days;
  }

function calculate() {
    let pay = parseInt(document.getElementById('pay').value);
    let hours = parseInt(document.getElementById('hours').value);
    let days = parseInt(document.getElementById('days').value);

// Martin's trick
    let tax_input = document.querySelector('input[name="student"]:checked');
    let tax = parseFloat(tax_input.value);

    let result = taxed_salary(salary(pay, hours, days), tax);
    document.getElementById('results').innerHTML = result + ' USD <br /> per month' 
}
