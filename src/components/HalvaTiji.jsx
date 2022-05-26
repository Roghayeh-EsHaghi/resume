import React, { useState } from "react";
import { ImPushpin } from "react-icons/im";

export default function HalvaTiji() {
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
        طرز تهیه حلوا تیجی
      </h4>
      <p
        style={{ maxHeight: state.isCollapsed ? "0px" : "1500px" }}
        className="collapsible"
      >
        اکثر ما به دنبال میان وعده هایی مقوی هستیم که ما بین کار هایمان مصرف
        کنیم، میان وعده هایی که هم بتوان آن ها را سرد میل کرد و هم ضرری برای
        سلامتی نداشته باشند. یکی از این خوراکی ها
        <strong> حلوا تیجی </strong>
        است. این حلوا به نام "حلوا بربری" نیز معروف است و پخت آن مخصوص استان های
        خراسان است که آن را در آخر ماه صفر به نیت شادی حضرت فاطمه زهرا تهیه می
        کنند. این حلوا یکی از مقوی ترین و خوشمزه ترین غذاهایی است که در تمام
        فصول سال می شود میل کرد.
        <br />
        <strong>مواد لازم برای درست کردن حلوا تیجی</strong>
        <ol>
          <li>آرد جوانه گندم</li>
          <li>آرد گندم</li>
          <li>زعفران</li>
          <li>روغن</li>
          <li>نبات</li>
        </ol>
        <strong> طرز تهیه حلوا تیجی</strong>
        <br />
        ابتدا درون یک ظرف مسی آرد گندم و جوانه گندم را با مقداری آب ولرم ترکیب
        کنید.
        <br />
        حدود ۱/۳ روغن را به آرد ها اضافه کنید و مواد را مرتبا هم بزنید.
        <br />
        آب را آرام و در چند مرحله به آرد اضافه کنید و مدام هم بزنید.
        <br />
        آن قدر آرد اضافه کنید که یک خمیر شل مانند ماست درست شود و آن قدر این
        خمیر را هم بزنید که هیچ گلوله آردی در آن باقی نماند.
        <br />
        سپس قابلمه مورد نظرتان را با حرارت ملایم روی گاز قرار دهید و بطور مداوم
        هم بزنید.
        <br />
        زمانی که حلوا شروع به جوشیدن کرد، حرارت را کم کنید و به هم زدن ادامه
        دهید. (هر چه قدر خمیر اولیه حلوا شل‌تر باشد، هم زدن آن راحت‌تر است اما
        به زمان بیشتری برای پخت نیاز دارد.)
        <br />
        حلوا را بین ۷ الی ۸ ساعت هم بزنید تا رنگش تیره شده و سفت شود. زمانی که
        حلوا به حالت مناسب رسید و به اندازه کافی سفت شد، درست ۱ ساعت مانده به
        انتهای پخت، نبات را به حلوا اضافه کنید. با اضافه کردن نبات حلوا کمی شل
        می‌شود. آن را دوباره هم بزنید تا سفت شود.
        <br />
        زعفران دم کشیده را نیز در این مرحله به حلوا اضافه کنید.
        <br />
        پس از ۸ الی ۹ ساعت که حلوای شما به خوبی پخت و رنگ و غلظت مناسبی پیدا
        کرد، باید آن را دم کنید و اجازه دهید بین ۲۰  الی ۴۰ل دقیقه (بسته به
        شعله اجاق شما) دم بکشد.
        <br />
        حلوای خوشمزه شما آماده میل کردن است.
      </p>
    </div>
  );
}
