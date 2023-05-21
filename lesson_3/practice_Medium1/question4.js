// Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer.
// However, once the buffer becomes full, any new elements will displace the
// oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer.
// In presenting the code to her team leader,
// she said "Take your pick. Do you prefer push() or concat() for modifying the
// buffer?".


// Is there a difference between these implementations,
// other than the method she used to add an element to the buffer?
// You may assume that newElement will always be a primitive value.


function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}



// my solution
/*
The first function mutates the array argument twice.
1) by using the push() method to add the new element to the end of the arr.
2) by using the shift() method to delete the first element if the max
buffer size is surpassed.
- Thus the argument is assigned to the "buffer" parameter is being mutated
outside the function as well, since they point to the same spot in memory.

The second function creates a new array by using the concat() method,
assigning the new array to our buffer parameter which is in turn a reassignment
of the variable.
The original argument that was passed to the function is no unaffected by any
mutations of the "buffer" variable due to the reassignment taking up different
spots in memory.
Therefore the shift() method called within the "if statement" only mutates the
new array, not the one originally passed to the function as an argument.
*/

