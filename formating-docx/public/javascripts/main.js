const inpt = document.getElementById("form-input");
const inputPost = document.getElementById("input-post");
const btnShwRef = document.getElementById("btn-showref");

// input text
document.addEventListener("keyup", () => {
  if (event.code == "Enter") {
    inputPost.value = JSON.stringify({ teks: inpt.value });
  }
});


// fungsi untuk menampilkan 
btnShwRef.addEventListener("click", () => {
  if(document.cookie.split(";")[1]){
    console.log(JSON.parse(document.cookie.split(";")[1].split("=")[1]));
  }else{
    console.log("data referensi belum anda masukan")
  };
});

// document.cookie = "obj=; expires=Sun, 11 February 2024 00:00:00 UTC; path=/"
