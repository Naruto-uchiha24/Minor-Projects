window.onload=function(){

    const container = document.getElementById("container");
    const img = document.querySelector("img");



    container.addEventListener("mousemove", (e) => {
        const x = e.clintX - e.target.offsetLeft;
        const y = e.clintY - e.target.offsetTop;

       

        img.style.transformOrigin = '$(x)px $(y)px';
        img.style.transform = "scale(2)";


    });




    container.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
    });




    
   
    
    
   
        
      }