
import React, { useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface SoundSliderProps {
  icon: React.ReactNode;
  name: string;
  audioSrc: string;
  onChange: (value: number) => void;
}

const SoundSlider: React.FC<SoundSliderProps> = ({ icon, name, audioSrc, onChange }) => {
  const [volume, setVolume] = useState(0);
  const [audio] = useState(new Audio(audioSrc));

  // Инициализация аудио при монтировании
  useEffect(() => {
    audio.loop = true;
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  // Управление состоянием аудио при изменении громкости
  useEffect(() => {
    audio.volume = volume / 100;
    
    if (volume > 0 && audio.paused) {
      audio.play().catch(err => console.error("Ошибка воспроизведения:", err));
    } else if (volume === 0 && !audio.paused) {
      audio.pause();
    }
  }, [volume, audio]);

  // Отдельный обработчик для изменения слайдера
  const handleSliderChange = (value: number[]) => {
    setVolume(value[0]);
    onChange(value[0]); // Вызываем только здесь, а не в эффекте
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="text-2xl" title={name}>
        {icon}
      </div>
      <Slider
        value={[volume]}
        min={0}
        max={100}
        step={1}
        orientation="vertical"
        className="h-32"
        onValueChange={handleSliderChange}
      />
    </div>
  );
};

export default SoundSlider;
