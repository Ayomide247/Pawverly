{
  /* <img
                  src={images[4]}
                  alt=""
                  className="w-[100px] h-[100px] rounded border border-primary p-1"
                />
                <img
                  src={images[5]}
                  alt=""
                  className="w-[100px] h-[100px] rounded p-1"
                />
                <img
                  src={images[6]}
                  alt=""
                  className="w-[100px] h-[100px] rounded p-1"
                />
                <img
                  src={images[7]}
                  alt=""
                  className="w-[100px] h-[100px] rounded p-1"
                /> */
}


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Accordion,
//   Footer,
//   Navbar,
//   ReusabelButton,
//   ReusableLabel,
//   SliderComponent,
// } from "../components/index";
// import images from "../assets/index";

// const ProductPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCount = 3;

//   console.log(currentIndex);

//   const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

//   const handlePrev = () => {
//     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//   };

//   const handleNext = () => {
//     if (currentIndex + visibleCount < images.length)
//       setCurrentIndex(currentIndex + 1);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="mt-[77px]">
//         <SliderComponent />
//         <section className="flex flex-col gap-10 px-5 lg:flex-row lg:px-20">
//           <div className="flex flex-col items-center justify-center w-full py-5 lg:w-1/2">
//             <img
//               src={images[4]}
//               alt="Main Product"
//               className="w-[100%] md:w-[530px] rounded border border-primary p-5"
//             />
//             <div>
//               <div className="w-full flex items-center overflow-hidden mt-5 gap-10">
//                 <button
//                   onClick={handlePrev}
//                   disabled={currentIndex === 0}
//                   className={ z-10 p-2 bg-primary text-white rounded-full ${
//                     currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//                   }}
//                 >
//                   {"<"}
//                 </button>

//                 <div className="flex gap-2 overflow-hidden ">
//                   {visibleImages.map((img, id) => (
//                     <img
//                       key={id}
//                       src={img}
//                       alt={"img"}
//                       className="w-[100px] h-[100px] rounded p-1 border border-gray-200 "
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={handleNext}
//                   disabled={currentIndex + visibleCount >= images.length}
//                   className={ z-10 p-2 bg-primary text-white rounded-full ${
//                     currentIndex + visibleCount >= images.length
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }}
//                 >
//                   {">"}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-start w-full gap-8 py-2 font-bold lg:w-1/2">
//             <h1 className="font-bold text-[24px] md:text-[30px]">
//               Cozy Knit Winter Sweater for Small & Medium Pets-pet sweater
//             </h1>
//             <p className="text-[16px] md:text-[18px]">
//               Dog Sweaters Winter Warm Dog Clothes For Small Dogs Turtleneck
//               Knitted Pet Clothing Puppy Cat Sweater Vest Coat
//             </p>
//             <div className="flex gap-5 font-bold text-[20px] md:text-[25px] items-center">
//               <del className="text-red-500 font-extralight">$34.99</del>
//               <span>$27.99</span>
//             </div>

//             <ReusableLabel title="Color" label="G" />
//             <ReusableLabel title="Size" label={8} />

//             <div className="flex items-center gap-3 font-bold">
//               <ReusabelButton title="-" />
//               <p className="px-16 py-2 rounded-none shadow bg-slate-100">2</p>
//               <ReusabelButton title="+" />
//             </div>

//             <Link to="/cart" className="w-full">
//               <button className="flex justify-center items-center px-8 py-3 font-bold transition-colors border rounded-md bg-[#ffffff] w-full text-primary hover:bg-primary hover:text-[#ffffff] hover:border-primary border-primary hover:duration-500">
//                 Add To Cart
//               </button>
//             </Link>
//           </div>
//         </section>

//         <section className="flex flex-col items-center py-20 bg-secondary">
//           <h1 className="font-bold text-[25px] py-10 text-primary">
//             Frequently Asked Questions
//           </h1>
//           <div className="mb-5 border-b border-primary w-[50%]"></div>
//           <div className="w-[80%] md:w-[60%]">
//             <Accordion />
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



import React from "react";
import { useCart } from "../components/fragments/CartContext";

const Cart = () => {
  const { state } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {state.cart.length > 0 ? (
        state.cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.details}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div>
        <h3>Total Price: ${state.totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;