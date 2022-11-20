import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { formRef } from "./refs";
import { saveData } from "./api";

formRef.addEventListener("submit", formData);

function formData(event) {
  event.preventDefault();
  const value = event.target.message.value.trim();
  if (!value) return;

  const data = createDataObj(value);
  saveData(data);
  event.target.reset();
}

function createDataObj(value) {
  return { value: value, id: Date.now(), checked: false };
}
