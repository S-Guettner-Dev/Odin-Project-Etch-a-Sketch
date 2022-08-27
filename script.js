function createGrid(size){
    /*Creating grid from gridSize Button input*/
    const grid = size * size;

    
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
 

/*Checking if div is empty */
let gridGet=document.getElementById("gridContainer");
let divs = document.getElementsByClassName("gridDivs");




if (gridGet.childNodes.length <=1){
    for (let i=0; i<grid; i++){
    
        let gridGet=document.getElementById("gridContainer");
        let newDiv = document.createElement('div');
        newDiv.setAttribute ('class','gridDivs');
        gridGet.appendChild(newDiv);
        
        }
    }
    /*Creating choosen number of divs*/
    

    
 



    }
    
/*TO DO: remove old grid if new size is selected, change Background
    color of clicked dinamyc generated divs */



    function removeGrid(size){
        const grid = size * size;
        let checkGrid=document.getElementById("gridContainer");
        let divs = document.getElementsByClassName("gridDivs")
        console.log(checkGrid)
    for (i=0;i<grid;i++){
        divs[0].parentNode.removeChild(divs[0]);
    }
        
        
    }


    function testDivContent(){
        let divs = document.getElementsByClassName("gridDivs");
        
        let gridGet=document.getElementById("gridContainer");
        console.log(gridGet.childNodes.length)
    }