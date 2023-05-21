function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// Evaluation
/*
1) console.log(rps(rps("paper", rps("rock", "scissors")), "rock"));
2) console.log(rps(rps("paper", "rock"), "rock"));
3) console.log(rps("paper", "rock"));
4) console.log("paper");
*/