function createGrid(size){
    /*Creating grid from gridSize Button input*/
    const grid = size * size;

   
   
    /*Checking if div is empty */

    
    
    
    
   
    /*get the css var that defines the gridSize in gridbox*/
    let rootSelector = document.querySelector(':root');
    let rootChange = getComputedStyle(rootSelector);
    let varSelector = rootChange.getPropertyValue('--gridSize');

    
    /*Changing gridbox Size to choosen grid*/
switch(size){
    case 16:
        
        rootSelector.style.setProperty('--gridSize','repeat(16,50px');
    break;

    case 32:
       
        rootSelector.style.setProperty('--gridSize','repeat(32,50px');
    break;
    
    case 64:
        
        rootSelector.style.setProperty('--gridSize','repeat(64,50px');
    break;

    case 128:
       
        rootSelector.style.setProperty('--gridSize','repeat(128,50px');
    break;
}
    

    /*Creating choosen number of divs*/
    for (let i=0; i<grid; i++){
    
    let gridGet=document.getElementById("gridContainer");
    let newDiv = document.createElement('div');
    newDiv.setAttribute ('class','gridDivs');
    gridGet.appendChild(newDiv);
    
    }

    
 



    }
    
/*TO DO: remove old grid if new size is selected, change Background
    color of clicked dinamyc generated divs */



    function removeGrid(){
        
        let checkGrid=document.getElementById("gridContainer");
        
        console.log(checkGrid)
        
        if (checkGrid.childNodes.length != 0) {
        checkGrid.parentNode.removeChild(checkGrid);
        }
    }