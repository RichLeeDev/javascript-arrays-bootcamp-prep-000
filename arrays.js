var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  arrayNew = [element, ...array]
  return arrayNew
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
  
}
