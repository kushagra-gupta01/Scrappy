import React,{ useState } from "react";
import './index.css';
import Display from './Components/Dashboard/Display';
import Mainpage from './Components/Mainlanding/Mainpage';
import { Route,Routes } from "react-router-dom";
import Events from './Components/events/Events'
import Leaderboard from "./Components/LeaderBoard/Leaderboard";
import Donation from "./Components/Dono Page/Donation";


const App = () => {
  
  const [token, setToken] = useState(false);

  if(!token){
    return <Mainpage setToken={setToken}/>
  }


  return (
    <div>
      <Routes>
        <Route path="/" element={<Display/>}/>
        {/* <Route path="/logout" element={<Logout/>}/> */}
        <Route path="/event" element={<Events/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/donate" element={<Donation/>}/>
      </Routes>
    </div>
  );
};

export default App;