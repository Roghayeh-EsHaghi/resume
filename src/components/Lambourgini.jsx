import React, { useState } from "react";
import { ImPushpin } from "react-icons/im";

export default function Lambourgini() {  
  const [state, setState] = useState({
    isCollapsed: true,
  });
  return (
    <div className="story">
      <h4
        onClick={(e) =>
          setState((prev) => ({
            ...prev,
            isCollapsed: !state.isCollapsed,
          }))
        }
      >
        <ImPushpin style={{ marginLeft: "8px" }} size={34} />
        <a
          href="https://bazibook.com/biography/entrepreneurship/famous/ferruccio-lamborghini/"
          target={"_blank"}
        >
          آشنایی با زندگی نامه فروچیو لامبورگینی ، کار افرین و بنیانگذار خودرو سازی لامبورگینی{" "}
          <span> (منتشر شده در سایت بازی بوک)</span>
        </a>
      </h4>
    </div>
  );
}
