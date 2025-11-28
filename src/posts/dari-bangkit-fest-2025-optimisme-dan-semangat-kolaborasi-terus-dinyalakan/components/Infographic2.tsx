import React from 'react';

export default function Infographic2() {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">LPDP: Membangun SDM Unggul</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Berdiri sejak 2013</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Mengirim putra-putri terbaik</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Fokus bidang prioritas (2021)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sesuai kebutuhan industri</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-600 dark:bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Beasiswa Garuda (2021)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Merambah jenjang S1</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-600 dark:bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Link and Match (2026)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Supply meets demand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}