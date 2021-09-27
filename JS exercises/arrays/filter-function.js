const array = [1,2,3,4,5]
const array2 = [ 
	{
		id: 1,
		name: 'Nathalie Zdravko'
	},
	{
		id:2,
		name: 'Roz Ramessu'
	},
	{
		id: 3,
		name: 'Dmitriy Zoya'
	},
	{
		id: 4,
		name: 'Apolinary Aurelia'
	},
	{
		id: 5,
		name: 'Millie Ingvar'
	}
]


const biggerThan2 = value => {
  if (value > 2) return true
  else return false
}

const contains = (value,letter) => {
   if(value.name.includes(letter)) return true
   else return false
 }

function filter(arr, cb) {
  let newArr = []
  for(let i of arr) {
    if(cb(i)) {
     newArr.push(i)
    }
  }
  return newArr
}

const filteredArray = filter(array, biggerThan2)
const filteredArray2 = filter(array2, function(value) {
  return contains(value, 'u')
})
console.log(filteredArray)
console.log(filteredArray2)
