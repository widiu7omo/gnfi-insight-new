import React from 'react';

export default function Infographic1() {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Indeks Optimisme Indonesia</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">83.5%</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Pesimis (2009)</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Anak muda &lt;30 tahun</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">&gt;6.0</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Optimis (2018-2023)</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Tren meningkat</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">5.51</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Netral (2025)</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Dengan konteks spesifik</div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Sumber: Survei GoodStats</p>
      </div>
    </div>
  );
}