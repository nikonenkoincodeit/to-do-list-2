import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const formRef = document.querySelector(".form");

formRef.addEventListener("submit", formData);

function formData(event) {
  event.preventDefault();
  const value = event.target.message.value.trim();
  if (!value) return;

  const data = createDataObj(value);

  event.target.reset();
}

function createDataObj(value) {
  return { value: value, id: Date.now(), checked: false };
}
