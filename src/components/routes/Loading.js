import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingGif from "../../images/Loading.gif";

export function Loading({ path= "login" }) {
  //state
  const [count, setCount] = useState(3);
  //hook
  const navigate = useNavigate();
  const location = useLocation ();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    //redirect once count === 0
    count === 0 && navigate(`${path}`, {
      state: location.pathname 
    });

    //cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <img src={LoadingGif} alt="Loading" style={{ width: "400px" }} />
    </div>
  );
}
