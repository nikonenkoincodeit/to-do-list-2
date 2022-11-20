const LOCALSTORAGE_KEY = "tasks";

export function saveData(data) {
  const list = getData();
  list.push(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(list));
}

function getData() {
  try {
    const dataJSON = localStorage.getItem(LOCALSTORAGE_KEY);
    if (!dataJSON) return [];
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log(error);
  }
}
