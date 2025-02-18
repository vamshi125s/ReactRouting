import react from "react";
import { useDispatch, useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContainer = () => {
    let numOfCakes = useSelector(state=>state.numOfCakes);
    let useDispatch = useDispatch();
  return (
    <div>
        <h1>Number of cakes in the bakery : {numOfCakes}</h1>
        <button onClick={()=>dispatch()}></button>
    </div>
  )
}

export default CakeContainer