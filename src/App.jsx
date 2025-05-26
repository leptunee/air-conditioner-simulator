import React, { useState } from 'react';
import AirConditioner from './components/AirConditioner.jsx';
import RemoteControl from './components/RemoteControl.jsx';

function App() {
  const [isOn, setIsOn] = useState(false);
  const [temperature, setTemperature] = useState(24);
  const [mode, setMode] = useState('cool'); // cool, heat, dry, fan
  const [fanSpeed, setFanSpeed] = useState(2); // 1-5
  const [swingMode, setSwingMode] = useState(false);

  const togglePower = () => {
    setIsOn(!isOn);
  };

  const adjustTemperature = (delta) => {
    setTemperature(prev => Math.max(16, Math.min(30, prev + delta)));
  };

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  const changeFanSpeed = () => {
    setFanSpeed(prev => prev === 5 ? 1 : prev + 1);
  };

  const toggleSwing = () => {
    setSwingMode(!swingMode);
  };
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-5xl mx-auto">
      
        <div className="flex flex-col items-center space-y-8">
          {/* 空调主机 - 横向长方形布局 */}
          <div className="w-full flex justify-center">
            <AirConditioner 
              isOn={isOn}
              temperature={temperature}
              mode={mode}
              fanSpeed={fanSpeed}
              swingMode={swingMode}
            />
          </div>
          
          {/* 遥控器 - 在空调下方 */}
          <div className="flex justify-center">
            <RemoteControl 
              isOn={isOn}
              temperature={temperature}
              mode={mode}
              fanSpeed={fanSpeed}
              swingMode={swingMode}
              onTogglePower={togglePower}
              onAdjustTemperature={adjustTemperature}
              onChangeMode={changeMode}
              onChangeFanSpeed={changeFanSpeed}
              onToggleSwing={toggleSwing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
