//
// Crear la función topSalary(salaries) que devuelva el nombre de la persona mejor pagada.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 150
};


function topSalary(obj) {
  let maxSalary = 0
  let maxSalaryName = null

	for(let [key, value] of Object.entries(obj)) {
    	if(maxSalary < value)  {
        	maxSalary = value
          maxSalaryName = key
        }
    }

 	return maxSalaryName
}
