
import { useState } from "react";
import "../Avatar.css"
import "../src/style/style.css"

function Avatar ({avatar}) {

const [donut, setDonut] = useState(0);
const handleDonut = () => setDonut (donut + 1)

return <figure className = {"Avatar"}>
        <img src = {avatar.img} />
        <div className = "AvatarText">
        <p> {avatar.firstName} {avatar.lastName}</p>
        <button onClick={handleDonut}> Donuts mangés : {donut} 🍩 </button> 
        </div> 
        
    </figure>


}




export default Avatar;
