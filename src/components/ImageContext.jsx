import React, { createContext, useState, useContext } from "react";


export const ImageContext = createContext();


export const ImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null); // Default to no image

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageContext.Provider>
  );
};


export const useImageContext = () => useContext(ImageContext);
