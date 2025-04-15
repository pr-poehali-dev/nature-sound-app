
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

  useEffect(() => {
    audio.loop = true;
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    audio.volume = volume / 100;
    
    if (volume > 0 && audio.paused) {
      audio.play().catch(err => console.error("Ошибка воспроизведения:", err));
    } else if (volume === 0 && !audio.paused) {
      audio.pause();
    }
    
    onChange(volume);
  }, [volume, audio, onChange]);

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
        onValueChange={(value) => setVolume(value[0])}
      />
    </div>
  );
};

export default SoundSlider;
