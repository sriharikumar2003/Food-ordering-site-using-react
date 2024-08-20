import imagem from "./food1.png";
import imageth from "./food3.png";
import imagef from "./food4.png";
import images from "./food2.png";
import "./Body.css"

function Body(){
    return(
        <>
        <div className = "body">
        <img src={imagem} id="imone" alt="imageo"></img>
        <img src= {images} id="imtwo" alt="imaget"></img>
        <img src = {imageth} id = "imth" alt ="imageth"></img>
        <img src = {imagef} id = "imf" alt ="imagefo"></img>
        <p id="center">Welcome to the Heaven</p>
        </div>
        </>
    );
} 

export default Body;