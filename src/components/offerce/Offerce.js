import React from "react";
import "./offerce.css";

//icons
import grnty from "../../assets/grnty.png";
import money from "../../assets/money.png";
import gift from "../../assets/gift.png";
import shop from "../../assets/shop.png";

const Offerce = () => {
  return (
    <div className="offerce__wrapper">
      <div className="offerce">
        <img src={shop} alt="shop-icon" className="offerce__icon" />

        <div className="offerce__text">
          <h4 className="offerce__header">خرید از سراسر دنیا</h4>
          <p className="offerce__desc">
            خرید محصولات پاک از فروشگاه های معتبر دنیا را در مهراشاپ تجربه کنید.
          </p>
        </div>
      </div>

      <div className="offerce">
        <img src={gift} alt="shop-icon" className="offerce__icon" />

        <div className="offerce__text">
          <h4 className="offerce__header">نخستین مرکز فروشگاه های گیاهی</h4>
          <p className="offerce__desc">
            مهراشاپ؛ یک فروشگاه سبز، ارگانیک و بدون ستم است
          </p>
        </div>
      </div>

      <div className="offerce">
        <img src={money} alt="shop-icon" className="offerce__icon" />

        <div className="offerce__text">
          <h4 className="offerce__header">تضمین بازگشت پول</h4>
          <p className="offerce__desc">
            در صورت وجود مشکل در کالا، فوری بازگشت پول انجام خواهد شد
          </p>
        </div>
      </div>

      <div className="offerce">
        <img src={grnty} alt="shop-icon" className="offerce__icon" />

        <div className="offerce__text">
          <h4 className="offerce__header">ضمانت اصالت کالا</h4>
          <p className="offerce__desc">
            مهراشاپ اصالت کالا را برای شما عزیزان تضمین می کند
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offerce;
