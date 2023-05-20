function cleanUp(str) {
  let arrOfStr = str.split("");
  let newArr = arrOfStr.map((char) => {
    if (!/[a-zA-Z]+/.test(char)) {
      char = " ";
    }
    return char;
  });

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === " " && newArr[i + 1] === " ") {
      newArr[i + 1] = "";
    }
  }
  return newArr.join("");
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// LS ingenious solution
/*
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}
*/