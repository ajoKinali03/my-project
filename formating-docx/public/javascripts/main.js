const inpt = document.getElementById("form-input");
const inputPost = document.getElementById("input-post");

document.addEventListener("keypress", () => {
  if (event.code == "Enter") {
    inputPost.value = JSON.stringify({ teks: inpt.value });
  }
});
