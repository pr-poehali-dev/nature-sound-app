
import React from 'react';
import AudioMixer from '@/components/AudioMixer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 p-4 flex flex-col items-center justify-center">
      <div className="container max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-300">
          🎵 Звуки для медитации
        </h1>
        
        <AudioMixer />
        
        <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Используйте слайдеры для настройки громкости каждого звука</p>
          <p className="mt-2">Создайте свой идеальный микс звуков природы для медитации и расслабления</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
