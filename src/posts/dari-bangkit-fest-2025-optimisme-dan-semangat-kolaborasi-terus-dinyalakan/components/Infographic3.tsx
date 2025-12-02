import React from 'react';

export default function Infographic3() {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-2xl border border-orange-200 dark:border-orange-800">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Ekonomi Kreatif: The New Oil</h3>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-6">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">1,1 Triliun Rupiah</div>
            <div className="text-gray-600 dark:text-gray-400">Kontribusi ke PDB Nasional</div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">💼</div>
            <div className="font-semibold text-gray-900 dark:text-white mb-1">Lapangan Kerja</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Membuka banyak peluang kerja</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">🚀</div>
            <div className="font-semibold text-gray-900 dark:text-white mb-1">Digital Assets Creation</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Untapped opportunity</div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold">
            <span>Engine of Growth</span>
            <span className="text-2xl">⚡</span>
          </div>
        </div>
      </div>
    </div>
  );
}