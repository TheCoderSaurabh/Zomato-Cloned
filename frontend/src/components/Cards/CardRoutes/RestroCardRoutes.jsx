import RestroCard from "../CardsTemplate/RestroCard";
import RestroData from "../CardData/RestroData";
import { useNavigate } from "react-router-dom";

const RestroCardRoute = () => {
    const navigate = useNavigate();
  
  const handleClick=() => {
    navigate('/signup');
  }

  return (
    <div className="flex flex-wrap justify-around mx-16" onClick={handleClick}>
      {RestroData.map((data) => {
        return (
          <RestroCard
            key={data.id}
            name={data.name}
            image={data.image}
            desc={data.desc}
            
          />
        );
      })}
    </div>
  );
};

export default RestroCardRoute;
