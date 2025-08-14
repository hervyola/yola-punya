import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#F3F0E8] via-[#f0f8f3] to-[#d9f5e3] text-center text-sm text-[#014f35] mt-12 border-t border-[#014f35] pt-6 pb-6">
      &copy; {new Date().getFullYear()} Lacof Coffee Shop. All rights reserved.
    </footer>
  );
}
