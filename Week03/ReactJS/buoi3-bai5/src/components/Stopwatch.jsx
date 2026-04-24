import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';

export default function Stopwatch() {
  const [time, setTime] = useState(0); // Lưu thời gian (milliseconds)
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState('');

  // 1. YÊU CẦU: Dùng useRef lưu intervalId (KHÔNG DÙNG STATE)
  // Nếu dùng state, mỗi lần gán ID component sẽ bị re-render dư thừa 1 lần.
  const timerRef = useRef(null); 

  // 2. YÊU CẦU: Dùng useRef để thao tác trực tiếp với DOM (focus input)
  const inputRef = useRef(null);

  // Hàm Format thời gian ra MM:SS:ms
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 10); 
      }, 10);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    if (time === 0) return;
    
    const newLap = { id: Date.now(), name: lapName || `Vòng ${laps.length + 1}`, time: time };
    setLaps([newLap, ...laps]);
    setLapName(''); 

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="stopwatch-container">
      <div className="time-display">
        {formatTime(time)}
      </div>

      <div className="controls">
        {!isRunning ? (
          <button className="btn-sw btn-start" onClick={handleStart}>Start</button>
        ) : (
          <button className="btn-sw btn-pause" onClick={handlePause}>Pause</button>
        )}
        <button className="btn-sw btn-reset" onClick={handleReset}>Reset</button>
        <button className="btn-sw btn-lap" onClick={handleAddLap} disabled={time === 0}>Add Lap</button>
      </div>

      <div className="lap-section">
        <input 
          type="text" 
          className="lap-input"
          placeholder="Nhập tên vòng chạy..." 
          value={lapName}
          onChange={(e) => setLapName(e.target.value)}
          ref={inputRef} 
        />
        
        <ul className="lap-list">
          {laps.map(lap => (
            <li key={lap.id} className="lap-item">
              <span>{lap.name}</span>
              <span>{formatTime(lap.time)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}