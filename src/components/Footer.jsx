import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#FEF8EF] via-[#B6CAE8] to-[#F7D66E] text-center text-sm text-[#2D2D2B] mt-12 border-t border-[#9AAA65] pt-6 pb-6">
      &copy; {new Date().getFullYear()} Lacof Coffee Shop. All rights reserved.
    </footer>
  );
}
