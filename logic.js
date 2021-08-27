function hexlogic(){
    let hexnum=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexcode1="#";
    for(i=0;i<6;i++){
     let index= Math.floor(Math.random() * hexnum.length);
     hexcode1 += hexnum[index];
     
    }
    let container = document.getElementById("container");
    container.style.background = hexcode1;
    let hextext1 = document.getElementById("hextext");
      hextext1.value = hexcode1;
}

  