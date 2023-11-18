import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3001/home").then((result) => {
      console.log(result);
      if (result.data !== "Success") navigate("/login");
    });
  });

  return <h2>Home Component</h2>;
}

export default Home;
