function addKeyValuePair() {
  const keyValueInputs = document.getElementById("keyValueInputs");

  const newPairDiv = document.createElement("div");
  newPairDiv.className = "key-value-input";

  newPairDiv.innerHTML = `
	<div class="key-value-input">
		<input type="text" placeholder="key" name="key" class="key-input" />
		  <input type="text" placeholder="value" name="value" class="value-input" />
		</div>
	`;

  keyValueInputs.appendChild(newPairDiv);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {};

  const keyValuePairs = document.querySelectorAll(".key-value-input");

  keyValuePairs.forEach((pair) => {
    const keyInput = pair.querySelector(".key-input");
    const valueInput = pair.querySelector(".value-input");

    const key = keyInput.value;
    const value = valueInput.value;

    data[key] = value;
  });

  document.getElementById("json").textContent = JSON.stringify(
    data,
    undefined,
    2
  );
});

const copyButton = document.getElementById("copyButton");
const jsonContent = document.getElementById("json");

copyButton.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(jsonContent);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand("copy");

  selection.removeAllRanges();

  copyButton.innerText = "Copied!";
  setTimeout(() => {
    copyButton.innerText = "Copy";
  }, 1000);
});
