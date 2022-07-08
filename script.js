function computerPlay() {
  let list = ["rock","paper","scissors"];
  let cpuDecision = list[Math.floor(Math.random() * list.length)]; 
  return cpuDecision;
}

console.log(computerPlay());