import React, { useState } from "react";
import { ImPushpin } from "react-icons/im";

export default function KhaterehAseman() {
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
        خاطره آسمان
      </h4>
      <p style={{ maxHeight: state.isCollapsed ? "0px" : "700px" }} className="collapsible">
        بوسه ای بر پیشانی پرستو نشاند، <br />و چه می‌دانست آسمان! <br />
        از تقدیر سنگی ک برای در آغوش گرفتن پرستو به پرواز درآمده...
        <br />
        در مه آلود جهان
        <br />
        زمین امانت دار پیکر نیمه جان پرستو گشت
        <br />
        چه خوش گمان بود زمان...
        <br />
        رقص سقوط را بی باور
        <br />
        به تماشا نشست.
        <br />
        دل دله گرم آسْمان رو به آشوب گرفت
        <br />
        روی پر نشاطش رنگ افسوس گرفت
        <br />
        درگذر بودند دقیقه های تیره و تار
        <br />
        ایستاد باد، عاجزانه به انتظار
        <br />
        بغض ابری ترکید...
        <br />
        گونه هایش لغزید...
        <br />
        قطراتی چند از گوشه چشمانش بچکید...
        <br />
        رز سرخ که به قلقلک شبنم عادت داشت
        <br />
        از خواب پرید ، غرش رعد را شنید
        <br />
        رنگ رویش پرید
        <br />
        در بیکران دور
        <br />
        دمی گرم ، بدرود داد پیکری سرد را...
        <br />و پرستو در مه آلود زمان رفت ز یاد
        <br />
        بار زنده بود
        <br />
        آخرین نمایش پروازش در خاطر آسمان.
      </p>
    </div>
  );
}
