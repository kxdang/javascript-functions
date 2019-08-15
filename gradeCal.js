//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
// 15/20 -> you got a C (75%)!
let gradeCal = function(studentScore, totalScore = 100) {
  if (typeof studentScore !== "number" || typeof totalScore !== "number") {
    throw Error("Please provide numbers only");
  }

  let calculatedScore = (studentScore / totalScore) * 100;

  if (calculatedScore <= 100 && calculatedScore >= 90) {
    return `You got an A (${calculatedScore}%)!`;
  } else if (calculatedScore >= 80 && calculatedScore <= 89) {
    return `You got a B (${calculatedScore}%)!`;
  } else if (calculatedScore <= 79 && calculatedScore >= 70) {
    return `You got a C (${calculatedScore}%)!`;
  } else if (calculatedScore <= 69 && calculatedScore >= 60) {
    return `You got a D (${calculatedScore}%)!`;
  } else {
    return `You failed, you got an F(${calculatedScore}%)!`;
  }
};

try {
  console.log(gradeCal("tests", 90));
} catch (e) {
  console.log(e.message);
}
