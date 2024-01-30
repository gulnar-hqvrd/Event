const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
const demo = document.getElementById("demo");
const KEY = "userName";

const savedName = localStorage.getItem(KEY);
if (savedName) {
  demo.textContent = `Welcome ${savedName}`;
}

saveButton.addEventListener("click", () => {
  const userName = nameInput.value;
  localStorage.setItem(KEY,userName);
});
