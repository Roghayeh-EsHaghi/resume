import React from "react";
import { FcViewDetails } from "react-icons/fc";
import ResumeAli from "./ResumeAli";
import KhaterehAseman from "./KhaterehAseman";
import BazeHoor from "./bazeHoor";
import HalvaTiji from "./HalvaTiji";
import ChildAgression from "./ChildAgression";
import LarryPage from "./LarryPage";
import Kahir from "./Kahir";
import Lambourgini from "./Lambourgini";
import WarrenBuffet from "./WarrenBuffet";
import MJordan from "./MJordan";
import HKeller from "./HKeller";
export default function Homepage(props) {
  return (
    <div className="main">
      <div className="bg-home">
        <p>Roghayeh Eshaghi </p>
        <p className="gray"> Writer and Content Creator </p>
      </div>
      <div className="stories">
        <h3>
          {" "}
          <FcViewDetails style={{ marginLeft: "8px" }} size={34} />
          متن ها
        </h3>{" "}
        <MJordan />
        <HKeller/>
        <WarrenBuffet />
        <Lambourgini />
        <LarryPage />
        <Kahir />
        <ChildAgression />
        <BazeHoor />
        <HalvaTiji />
        <KhaterehAseman />
        <ResumeAli />
      </div>
      <footer>
        تمامی متن ها و اشعار متعلق به رقیه اسحاقی می باشد و هرگونه کپی برداری
        بدون ذکر نام به دور از اخلاق حرفه ای است.
      </footer>
    </div>
  );
}
