const inpt = document.getElementById("form-input");
const inputPost = document.getElementById("input-post");

 fetch("http://localhost:3000/home/api").then((res) =>
   res
     .json()
     .then((data) => {
       data.forEach((e, i) => {
         console.log(e.teks)
         inpt.value += e.teks.join("");
       });
     })
     .catch((err) => console.error(err))
 );

document.addEventListener("keypress", () => {
  if (event.code == "Enter") {
    inputPost.value = JSON.stringify({ teks: inpt.value });
  }
});
