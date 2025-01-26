import React from "react";

export default function ReusableLabel({ title, label }) {
  return (
    <div>
      <p>{title}</p>
      <div className="py-1 border rounded-md px-14 border-primary text-start">
        {label}
      </div>
    </div>
  );
}
