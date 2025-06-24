"use client";
import { useEffect } from 'react';

export default function ChatlingWidget() {
  useEffect(() => {
    // Set global config
    window.chtlConfig = { chatbotId: "5187164924" };

    // Inject script only if not already present
    if (!document.getElementById('chtl-script')) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-id', '5187164924');
      script.id = 'chtl-script';
      script.type = 'text/javascript';
      script.src = 'https://chatling.ai/js/embed.js';
      document.body.appendChild(script);
    }
  }, []);

  return null;
}