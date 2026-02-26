"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "919157302004";
const WHATSAPP_MESSAGE =
  "Hi Mx Solution, I want to discuss a project. Can you help?";

export function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Tooltip label */}
      <span className="hidden sm:block bg-foreground text-background text-sm font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Chat on WhatsApp
      </span>

      {/* WhatsApp bubble */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.5 2.06 7.83L.5 31.5l7.87-2.05A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.1a12.5 12.5 0 01-6.35-1.73l-.45-.27-4.68 1.22 1.24-4.55-.3-.47A12.5 12.5 0 1116 28.6zm6.86-9.37c-.37-.19-2.2-1.09-2.54-1.21-.34-.12-.59-.19-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.43.28-.8.09-.37-.19-1.57-.58-2.99-1.84-1.1-.98-1.84-2.2-2.06-2.57-.22-.37-.02-.57.16-.75.17-.17.37-.43.56-.65.19-.21.25-.37.37-.62.12-.25.06-.46-.03-.65-.09-.19-.84-2.03-1.15-2.78-.3-.73-.61-.63-.84-.64l-.71-.01c-.25 0-.65.09-.99.46-.34.37-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.19.25 2.62 4 6.35 5.61.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.71-.11 2.2-.9 2.51-1.77.31-.87.31-1.61.22-1.77-.09-.16-.34-.25-.71-.44z" />
        </svg>
      </div>
    </Link>
  );
}
