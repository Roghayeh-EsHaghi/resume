import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { ImPushpin } from "react-icons/im";
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
        <div className="story">
          <h4>
            <ImPushpin style={{ marginLeft: "8px" }} size={34} />
            خاطره آسمان
          </h4>
          <p>
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
          <p></p>
        </div>
      </div>
      <footer>
        تمامی متن ها و اشعار متعلق به رقیه اسحاقی می باشد و هرگونه کپی برداری
        بدون ذکر نام به دور از اخلاق حرفه ای است.
      </footer>
    </div>
  );
}
