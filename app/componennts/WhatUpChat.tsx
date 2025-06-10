import React, { useEffect, useRef } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatUpChat() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="88011771133111"
        accountName="Online Support"
        allowEsc
        // allowClickAway
        notification
        notificationSound
        notificationDelay={60000}
        chatMessage="Hello, how can I help you?"
        avatar="/images/logo.png"
        className="whatsapp-chat"
      />
    </>
  )
}
