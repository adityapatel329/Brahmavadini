import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const categories = [
  {
    name: 'Havan Kund',
    desc: 'Handcrafted fire pits for sacred rituals',
    icon: '🔥',
    image: '/src/assets/havan-kund.png',
    active: true,
  },
  {
    name: 'Trikal Sandhya Set',
    desc: 'Complete set for daily spiritual timings',
    icon: '🪔',
    image: '/src/assets/trikal-sandhya-set.png',
  },
  {
    name: 'Mantra Saadhna Set',
    desc: 'Tools for deep mantra meditation',
    icon: '🧘',
    image: '/src/assets/mantra-saadhna-set.png',
  },
  {
    name: 'Pujan Set',
    desc: 'Everything needed for daily puja',
    icon: '🥣',
    image: '/src/assets/pujan-set.png',
  },
  {
    name: 'Tarpan Set',
    desc: 'Offerings set to honor ancestors',
    icon: '🌊',
    image: '/src/assets/tarpan-set.png',
  },
];

const products = [
  {
    name: 'Iron Havan set 12*12',
    image: '/src/assets/iron-havan-set-12x12.png',
    active: false,
  },
  {
    name: 'Iron Havan set 18*18',
    image: '/src/assets/iron-havan-set-18x18.png',
    active: true,
  },
  {
    name: 'Copper Havan set 12*12',
    image: '/src/assets/copper-havan-set-12x12.png',
    active: false,
  },
  {
    name: 'Copper Havan set 18*18',
    image: '/src/assets/copper-havan-set-18x18.png',
    active: false,
  },
];

export default function MegaMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 w-full max-w-6xl mx-auto rounded-b-2xl shadow-2xl bg-white flex min-h-[480px] z-50 border border-gray-200 overflow-visible">
      {/* Categories */}
      <div className="flex flex-col gap-3 py-8 px-6 bg-[#FFF6E9] flex-[1.2] border-r border-[#F3E7D1]">
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className={`flex items-center gap-4 rounded-2xl px-6 py-5 cursor-pointer transition-all font-sans group relative ${cat.active ? 'bg-white shadow-lg border-2 border-[#E59D3E] z-10' : 'hover:bg-[#FFF6E9]'} `}
            style={{ minHeight: '80px' }}
          >
            <span className="text-2xl mr-2">{cat.icon}</span>
            <div>
              <div className="text-lg font-bold text-[#1D2A3E] leading-tight">{cat.name}</div>
              <div className="text-sm text-[#3A4256] mt-1">{cat.desc}</div>
            </div>
            <span className={`flex items-center justify-center w-8 h-8 rounded-full ml-auto ${cat.active ? 'bg-[#FFF6E9] text-[#E59D3E] border border-[#E59D3E]' : 'bg-transparent text-[#3A4256]'}`}>
              <FaArrowRight className="text-lg" />
            </span>
          </div>
        ))}
      </div>
      {/* Products */}
      <div className="flex flex-col gap-3 py-8 px-6 bg-[#F9F7F3] border-r border-[#F3E7D1] flex-[1.5] items-start">
        {products.map((prod, i) => (
          <div
            key={prod.name}
            className={`flex items-center gap-4 rounded-2xl px-6 py-5 cursor-pointer transition-all font-sans group relative ${prod.active ? 'bg-white shadow-lg border-2 border-[#E59D3E] z-10' : 'hover:bg-[#FFF6E9]'} `}
            style={{ minHeight: '80px' }}
          >
            <img src={prod.image} alt={prod.name} className="w-14 h-14 rounded-lg object-cover border border-[#F3E7D1] bg-white" />
            <div className="text-base text-[#1D2A3E] font-semibold">{prod.name}</div>
          </div>
        ))}
      </div>
      {/* Main Product */}
      <div className="flex flex-col items-start py-8 px-8 bg-white min-w-[312px] flex-[2]">
        <img src="/src/assets/main-product.png" alt="Main Product" className="w-full max-w-[312px] rounded-2xl mb-4 border border-[#F3E7D1] bg-white" />
        <div className="text-2xl font-bold text-[#1D2A3E] mb-2">Iron Havan Set - 18×18</div>
        <div className="flex gap-3 items-baseline mb-1">
          <span className="text-base text-gray-400 line-through">₹5,100.00</span>
          <span className="text-xl text-[#1D2A3E] font-bold">₹3,500.00</span>
        </div>
        <div className="text-green-600 text-base mb-4 font-semibold">You save ₹1,600.00 (31%)</div>
        <button className="bg-[#E59D3E] hover:bg-[#d18a2e] text-white rounded-lg px-8 py-3 text-lg font-semibold flex items-center justify-center gap-2 mt-3 transition-colors shadow-lg w-full">
          <FaArrowLeft className="text-xl" /> Add to cart
        </button>
      </div>
    </div>
  );
} 