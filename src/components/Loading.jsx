import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F8F7FF] font-sans">
      <div className="relative">
        
        {/* Efek Glow Lavender di Belakang */}
        <div className="absolute inset-0 bg-purple-300 blur-[50px] opacity-40 animate-pulse"></div>

        {/* Kontainer Spinner Utama */}
        <div className="relative flex items-center justify-center">
          
          {/* Ring Putar Putus-putus yang Estetik */}
          <div className="w-24 h-24 border-4 border-dashed border-purple-400 rounded-full animate-spin-slow"></div>
          
          {/* Kotak 'Chubby' di Tengah dengan Bintang */}
          <div className="absolute w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-300 rounded-[20px] rotate-12 animate-bounce-sweet flex items-center justify-center shadow-xl shadow-purple-200/50">
            <svg 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-8 h-8 drop-shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>

          {/* Partikel Bintang Kecil (Animasi Berkedip) */}
          <div className="absolute -top-4 -right-2 animate-ping opacity-75">
             <div className="w-3 h-3 bg-yellow-300 rounded-full blur-[1px]"></div>
          </div>
          <div className="absolute bottom-0 -left-6 animate-pulse delay-300">
             <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Area Teks & Progress Bar */}
      <div className="mt-12 text-center">
        <h2 className="text-purple-600 font-bold text-xl tracking-tight animate-pulse">
          Memuat sebentar ya... ✨
        </h2>
        <p className="text-purple-400 text-sm mt-1 mb-4">Aplikasi sedang menyiapkan keajaiban</p>
        
        {/* Progress Bar Imut */}
        <div className="w-40 h-2 bg-purple-100 rounded-full overflow-hidden mx-auto shadow-inner">
          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full animate-loading-bar w-1/2"></div>
        </div>
      </div>

      {/* Kustom Animasi (Wajib Ada) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-sweet {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        .animate-bounce-sweet {
          animation: bounce-sweet 2s ease-in-out infinite;
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite ease-in-out;
        }
      `}} />
    </div>
  );
}