"use client";

import React from "react";

const WhatsappFloat = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
    >
      <span className="wa-tooltip">Chat with us!</span>
      💬
    </a>
  );
};

export default WhatsappFloat;
