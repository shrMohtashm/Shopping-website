import React from "react";
import { discounts } from "utils/data";

export default function Discount() {
  return (
    <>
      <div className="row my-4">
        <div className="col-md-12">
          <h2 className="text-center fw-bold">Special Discounts</h2>
        </div>
      </div>
      <div className="row">
        {discounts &&
          discounts.map(({ name, image, alt, sizes, discount }, index) => (
            <div key={index} className="col-md-4 px-3 pb-2">
              <div className="containerDiscount">
                <div className="cardDiscount">
                  <div className="imgBxDiscount">
                    <img src={image} alt={alt} />
                  </div>
                  <div className="contentBxDiscount">
                    <h3>{name}</h3>
                    <div className="sizeDiscount">
                      <h4>Size</h4>
                      {sizes.map((size) => (
                        <span key={size}>{size}</span>
                      ))}
                    </div>
                    <a href="#">{discount}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
