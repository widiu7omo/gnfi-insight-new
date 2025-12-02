import React from 'react';

export default function Infographic4() {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Optimisme Berdasarkan Usia (2025)</h3>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-gray-900 dark:text-white">17-25 tahun (Gen Z)</div>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">5.45</div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div className="bg-red-600 dark:bg-red-400 h-3 rounded-full" style={{width: '54.5%'}}></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Paling pesimis</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-gray-900 dark:text-white">26-35 tahun (Milenial)</div>
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">5.68</div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div className="bg-yellow-600 dark:bg-yellow-400 h-3 rounded-full" style={{width: '56.8%'}}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-gray-900 dark:text-white">36-45 tahun (Gen X)</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5.89</div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div className="bg-blue-600 dark:bg-blue-400 h-3 rounded-full" style={{width: '58.9%'}}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-gray-900 dark:text-white">46-55 tahun</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">6.21</div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div className="bg-green-600 dark:bg-green-400 h-3 rounded-full" style={{width: '62.1%'}}></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Paling optimis</div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="inline-block bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
          <span className="text-sm text-gray-600 dark:text-gray-400">Rata-rata keseluruhan: </span>
          <span className="font-bold text-gray-900 dark:text-white">5.51</span>
        </div>
      </div>
    </div>
  );
}