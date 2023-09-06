import React from "react";
import Title from "./Title";
import Register from "./Register";
import Login from "./Login";
import Landing from "./Landing";
import Pioneer from "./Pioneer";
import { Routes, Route} from 'react-router-dom';
import Footer from "../Dashboard/Footer";

const Mainpage = ({setToken}) => {

  return (
    <div className="flex flex-col justify-around">
      <div class="md:flex md:justify-between">
        <div class="hidden md:block">
          <Landing />
        </div>
        <div class="flex flex-col mx-auto w-11/12 md:w-80 md:mr-14">
          <div class="hidden md:block">
            <Title />
          </div>
          <div class="md:hidden">
            <Pioneer />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Login setToken={setToken} />} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
