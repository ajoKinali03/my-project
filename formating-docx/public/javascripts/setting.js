
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

if(window.location.pathname == "/setting"){
  const data = () => {
    let strData = document.getElementById("mentahan-data-setting").placeholder
    if(strData.length != 0){
      return JSON.parse(strData);
    };
  };
  
  data().forEach( e => console.log(e));




};