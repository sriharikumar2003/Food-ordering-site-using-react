import imagem from "./food1.png";
import imageth from "./food3.png";
import images from "./food2.png";
import "./Body.css"

function Body(){
    return(
        <>
        <div className = "body">
        <img src={imagem} id="imone" alt="ice-image"></img>
        <img src= {images} id="imtwo" alt="food-image"></img>
        <img src = {imageth} id = "imth" alt ="ice-image"></img>
        <p id="center">Welcome to the Heaven</p>
        </div>
        </>
    );
} 

export default Body;