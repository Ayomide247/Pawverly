import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/fragments/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const { getTotalPrice } = useCart();
  const navigate = useNavigate();
  const publicKey = "pk_test_30935254e277d16e13b3b46de0616a73647b8f34";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSuccess = () => {
    toast.success("Thanks for Your Patronage!");
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000); // Delay navigation to allow toast to show
  };

  const handleClose = () => {
    toast.warn("Are you sure you want to close?");
  };

  const componentProps = {
    email,
    amount: getTotalPrice() * 100,
    metadata: {
      name,
      phoneNumber,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  return (
    <div className="px-4 mt-52 font-semibold">
      <h1 className="text-center text-[25px] my-4 font-bold">
        Make Your Payment Here
      </h1>
      <div className="max-w-md mx-auto my-4">
        <input
          type="text"
          value={name}
          placeholder="Enter Your Full Name"
          className="block w-full px-4 py-2 mb-4 rounded-md border border-primary focus:outline-none"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="example@email.com"
          className="block w-full px-4 py-2 mb-4 rounded-md border border-primary focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={`$${getTotalPrice()}`}
          placeholder="Enter Amount"
          className="block w-full px-4 py-2 mb-4 rounded-md border border-primary focus:outline-none"
          disabled
        />
        <input
          type="number"
          value={phoneNumber}
          placeholder="Enter Your Phone Number"
          className="block w-full px-4 py-2 mb-4 rounded-md border border-primary focus:outline-none"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <PaystackButton
          className="block w-full px-4 py-2 mb-4 rounded-md bg-[#1369A1] text-white"
          {...componentProps}
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Payment;
