import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Đồng hồ đã được bật (Mounted)!");

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Dọn dẹp bộ đếm (Cleanup)!");
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div className="clock-container">
      <h3>Giờ hiện tại</h3>
      <div className="clock-display">
        {time.toLocaleTimeString('vi-VN')}
      </div>
    </div>
  );
}