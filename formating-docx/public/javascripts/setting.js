if(window.location.pathname == "/setting"){
  const data = () => {
    let strData = document.getElementById("mentahan-data-setting").placeholder
    if(strData.length != 0){
      return JSON.parse(strData);
    };
  };
  
  data().forEach( e => console.log(e));




};