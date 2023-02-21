import { Link } from "@mui/material";
import React from "react";
import "./Card.scss"

const Card = ({ item }) => {
    return (
        <div className='card'>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
        </div>
    )
}


// const Card = ({item}) => {
//     return (
//         <Link className='link' to={'/product/${item.id}'}>
//         <div className='card'>
//             <div className="image">
//                 <img src={item.img} alt="" className="mainImg"/>
//                 <img src={item.img2} alt="" className="secondImg"/>
//             </div>
//             <h2>{item.title}</h2>
//             <div className="prices">
//                 <h3>${item.oldprice}</h3>
//                 <h3>${item.price}</h3>
//             </div>
//         </div>
//         </Link>
        
//     )
// }

export default Card