
import React, { useState } from 'react';
import SoundSlider from './SoundSlider';
import { Card } from '@/components/ui/card';
import { 
  Cloud, 
  Wind, 
  Waves, 
  Flame, 
  Bird, 
  Leaf, 
  Music
} from 'lucide-react';

// Звуковые файлы (используем бесплатные примеры, в реальном приложении замените на свои)
const audioFiles = [
  {
    name: 'Дождь',
    icon: <Cloud />,
    src: 'https://soundbible.com/mp3/rain_thunder-Mike_Koenig-504930139.mp3'
  },
  {
    name: 'Ветер',
    icon: <Wind />,
    src: 'https://soundbible.com/mp3/wind-howl-daniel_simon.mp3'
  },
  {
    name: 'Волны',
    icon: <Waves />,
    src: 'https://soundbible.com/mp3/Beach_Waves-Mike_Koenig-980635569.mp3'
  },
  {
    name: 'Огонь',
    icon: <Flame />,
    src: 'https://soundbible.com/mp3/fire_burning-Simon_Craggs-34144858.mp3'
  },
  {
    name: 'Птицы',
    icon: <Bird />,
    src: 'https://soundbible.com/mp3/songbird-daniel_simon.mp3'
  },
  {
    name: 'Лес',
    icon: <Leaf />,
    src: 'https://soundbible.com/mp3/meadow-Daniel_Simion.mp3'
  },
  {
    name: 'Мелодия',
    icon: <Music />,
    src: 'https://soundbible.com/mp3/ambient-piano-Daniel_Simion.mp3'
  }
];

const AudioMixer: React.FC = () => {
  const [volumes, setVolumes] = useState<Record<string, number>>(
    Object.fromEntries(audioFiles.map(audio => [audio.name, 0]))
  );

  const handleVolumeChange = (name: string, value: number) => {
    setVolumes(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold mb-1">Звуки для медитации</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Настройте микс звуков природы для идеальной медитации
        </p>
      </div>
      
      <div className="flex justify-between gap-4 pt-4 pb-6 px-2 overflow-x-auto">
        {audioFiles.map((audio) => (
          <SoundSlider
            key={audio.name}
            icon={audio.icon}
            name={audio.name}
            audioSrc={audio.src}
            onChange={(value) => handleVolumeChange(audio.name, value)}
          />
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Активных звуков: {Object.values(volumes).filter(v => v > 0).length}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AudioMixer;
