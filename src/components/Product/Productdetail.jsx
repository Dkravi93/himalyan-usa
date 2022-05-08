import { useParams ,Navigate} from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import "./productdetail.css";
export const Productdetail = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
       getdata()
  }, []);
   
  const getdata=async()=>{
    let data=await fetch(`http://localhost:5000/products/${id}`);
    let data1=await data.json();
  
    setdata(data1);
    
  }
  return (
    <div>
      <div><img src={data.Image1}/></div>
      <div className="dis">
          <div className="im"><img src={data.Image1}/></div>
          <div className="im"><img src={data.Image2}/></div>
      </div>
      <h2>{data.Name}</h2>
      <h3>${data.Price}</h3>
      <p>{data.Description}</p>
    </div>
  );
};
