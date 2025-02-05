document.getElementById("checkButton").addEventListener("click", function () {
  const textInput = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("result");

  if (textInput.trim() === "") {
    resultDiv.innerHTML = "Please enter some text.";
    return;
  }

  fetch("https://api.languagetoolplus.com/v2/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      text: textInput,
      language: "en-US",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.matches.length === 0) {
        resultDiv.innerHTML = "No spelling errors found.";
      } else {
        resultDiv.innerHTML = "Spelling errors found:<br>";
        data.matches.forEach((match) => {
          resultDiv.innerHTML += `- ${
            match.message
          } (Suggestions: ${match.replacements
            .map((r) => r.value)
            .join(", ")})<br>`;
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      resultDiv.innerHTML = "An error occurred.";
    });
});
