const inpt = document.getElementById("form-input");
const inputPost = document.getElementById("input-post");


document.addEventListener("keyup", () => {
  if (event.code == "Enter") {
    inputPost.value = JSON.stringify({ teks: inpt.value });
  }
});