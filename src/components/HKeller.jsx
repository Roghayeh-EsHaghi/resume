import React, { useState } from "react";
import { ImPushpin } from "react-icons/im";

export default function HKeller() {
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
        <a href="https://bazibook.com/biography/artist/helen-keller/" target={"_blank"}>
            آشنایی با زندگی هلن کلر، نویسنده نابینا و ناشنوا موفق آمریکایی     
          <span> (منتشر شده در سایت بازی بوک)</span>
        </a>
      </h4>
    </div>
  );
}
