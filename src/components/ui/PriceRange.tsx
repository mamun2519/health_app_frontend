import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import the default styles for the slider

const PriceRange = ({ min, max, values, onChange }: any) => {
  return (
    <div className="p">
      <h2 className="text-xl font-semibold">Price Range </h2>
      <div className="mt-4">
        <Slider range min={0} max={2000} value={values} onChange={onChange} />
      </div>
      <div className="mt-2">
        <p>Range: {values[1]} BDT</p>
      </div>
    </div>
  );
};

export default PriceRange;
