import React, { useState } from "react";
import { Cart, OrderDetails, OrderStatus } from "../components";

export default function checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Shopping Cart", component: <Cart /> },
    { label: "Order Details", component: <OrderDetails /> },
    { label: "Order Status", component: <OrderStatus /> },
  ];

  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="w-[90%] mx-auto mb-[4vh]">

      <div className="flex flex-row justify-between items-center relative mt-[5vh]">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            {index !== 0 && (
              <div className="h-[0.2vh] bg-gray-500 left-[15%] w-[69%] mx-auto absolute -z-50"></div>
            )}
            <div className="flex flex-row items-center px-[2vh] bg-white">
              <p
                className={`text-[3vh] flex flex-row  items-center justify-center font-semibold rounded-full ${
                  activeStep > index
                    ? "bg-green-700 text-white"
                    : "bg-purple-700 text-white"
                } w-[6vh] h-[6vh] mr-[1.5vh]`}
              >
                {activeStep > index ? <span>&#10003;</span> : index + 1}
              </p>
              <h2
                className={`text-[3vh] font-semibold ${
                  activeStep > index ? "text-green-700" : "bg-white"
                }`}
              >
                {step.label}
              </h2>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div>{steps[activeStep].component}</div>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleStepChange(activeStep - 1)}
          disabled={activeStep === 0}
          className="bg-purple-700 text-white px-4 py-2 rounded-md mr-4"
        >
          Back
        </button>
        <button
          onClick={() => handleStepChange(activeStep + 1)}
          disabled={activeStep === steps.length - 1}
          className="bg-purple-700 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}