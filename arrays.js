var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  arrayNew = [element, ...array]
  return arrayNew
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

 function addElementToEndOfArray(array, element) {
  arrayNewTwo = [...array, element]
  return arrayNewTwo
}
 
 function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  
}