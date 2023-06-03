// Ant Quiz Program
// Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

// Function
function btnClicked() {
  // Variables
  let result1 = document.getElementById("result1");
  let result2 = document.getElementById("result2");
  let result3 = document.getElementById("result3");
  let result4 = document.getElementById("result4");
  let result5 = document.getElementById("result5");

  // Input
  let question1 = document.getElementById("true-or-false").value.toLowerCase();
  let question2 = document
    .getElementById("number-of-parts")
    .value.toLowerCase();
  let question3 = document.getElementById("ant-waist").value.toLowerCase();
  let question4 = document
    .getElementById("acidipore-sting")
    .value.toLowerCase();
  let question5 = document.getElementById("order").value;
  // Only question 5 is case-sensitive; the others are case-insensitive.

  // Process and Output
  // Question 1
  if (question1 === "false") {
    result1.innerHTML = `Correct answer`;
    result1.style.color = "green";
  } else if (question1 === "true") {
    result1.innerHTML = `Incorrect answer`;
    result1.style.color = "red";
  } else if (question1 == "") {
    result1.innerHTML = `Did not answer`;
    result1.style.color = "black";
  } else {
    result1.innerHTML = `Did not answer "true" or "false"`;
    result1.style.color = "black";
  }

  // Question 2
  if (question2 === "3" || question2 === "three") {
    result2.innerHTML = `Correct answer`;
    result2.style.color = "green";
  } else if (question2 == "") {
    result2.innerHTML = `Did not answer`;
    result2.style.color = "black";
  } else {
    result2.innerHTML = `Incorrect answer`;
    result2.style.color = "red";
  }

  // Question 3
  if (question3 === "petiole") {
    result3.innerHTML = `Correct answer`;
    result3.style.color = "green";
  } else if (question3 == "") {
    result3.innerHTML = `Did not answer`;
    result3.style.color = "black";
  } else {
    result3.innerHTML = `Incorrect answer`;
    result3.style.color = "red";
  }

  // Question 4
  if (question4 === "gaster" || question4 === "abdomen") {
    result4.innerHTML = `Correct answer`;
    result4.style.color = "green";
  } else if (question4 == "") {
    result4.innerHTML = `Did not answer`;
    result4.style.color = "black";
  } else {
    result4.innerHTML = `Incorrect answer`;
    result4.style.color = "red";
  }

  // Question 5
  if (question5 === "Hymenoptera") {
    result5.innerHTML = `Correct answer`;
    result5.style.color = "green";
  } else if (question5 == "") {
    result5.innerHTML = `Did not answer`;
    result5.style.color = "black";
  } else {
    result5.innerHTML = `Incorrect answer`;
    result5.style.color = "red";
  }

  // Total Results
  // Process
  let correct = 0;

  if (result1.innerHTML === "Correct answer") {
    correct++;
  }

  if (result2.innerHTML === "Correct answer") {
    correct++;
  }

  if (result3.innerHTML === "Correct answer") {
    correct++;
  }

  if (result4.innerHTML === "Correct answer") {
    correct++;
  }

  if (result5.innerHTML === "Correct answer") {
    correct++;
  }

  // Output
  let percentage = (correct / 5) * 100;

  document.getElementById("total").innerHTML = `${correct}/5 (${percentage}%)`;

  // Feedback
  if (percentage === 100) {
    document.getElementById("feedback").innerHTML = `F<b>ant</b>astic work!`;
  } else if (percentage === 80) {
    document.getElementById("feedback").innerHTML = `Pretty good!`;
  } else if (percentage === 60) {
    document.getElementById("feedback").innerHTML = `Not bad.`;
  } else if (percentage === 40) {
    document.getElementById(
      "feedback"
    ).innerHTML = `There's room for improvement...`;
  } else if (percentage === 20) {
    document.getElementById(
      "feedback"
    ).innerHTML = `I guess you're not a fan of ants (me neither).`;
  } else {
    document.getElementById("feedback").innerHTML = `Yikes.`;
  }
}
