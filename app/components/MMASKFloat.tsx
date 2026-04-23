"use client";

import React, { useState } from "react";
import MMASKModal from "../UiModels/MMASKModal";
import "../UiModels/mmask.css";

const MMASKFloat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        className="mmask-float"
        onClick={() => {
          console.log("clicked");
          setOpen(true);
        }}
      >
        🤖
      </div>

      {/* MODAL */}
      {open && <MMASKModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default MMASKFloat;
