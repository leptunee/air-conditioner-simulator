import React from 'react';

const RemoteControl = ({
  isOn,
  temperature,
  mode,
  fanSpeed,
  swingMode,
  onTogglePower,
  onAdjustTemperature,
  onChangeMode,
  onChangeFanSpeed,
  onToggleSwing
}) => {
  const getModeText = (modeType) => {
    const modes = {
      cool: '制冷',
      heat: '制热',
      dry: '除湿',
      fan: '送风'
    };
    return modes[modeType] || '制冷';
  };

  const getFanSpeedText = (speed) => {
    const speeds = {
      1: '低风',
      2: '中低风',
      3: '中风',
      4: '中高风',
      5: '高风'
    };
    return speeds[speed] || '中风';
  };  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8 max-w-lg w-full">
      {/* 遥控器头部 */}
      <div className="text-center mb-6">
        <div className="w-12 h-1 bg-blue-400 mx-auto"></div>
      </div>{/* 显示屏 */}
      <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4 mb-6">
        <div className="text-gray-800 text-center">
          <div className="text-3xl font-bold mb-1">
            {isOn ? `${temperature}°C` : 'OFF'}
          </div>
          <div className="text-sm text-gray-600">
            {isOn ? `${getModeText(mode)} | ${getFanSpeedText(fanSpeed)}` : '已关机'}
          </div>
          {isOn && swingMode && (
            <div className="text-xs mt-1 text-blue-500 animate-pulse">摆风开启</div>
          )}
        </div>
      </div>      {/* 电源按钮 */}
      <div className="flex justify-center mb-6">
        <button
          onClick={onTogglePower}
          className={`w-20 h-20 rounded-full font-bold text-xl transition-all duration-300 border-2 ${
            isOn 
              ? 'bg-red-500 hover:bg-red-600 text-white border-red-300 shadow-lg' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-600 border-gray-300'
          }`}
        >
          {isOn ? 'OFF' : 'ON'}
        </button>
      </div>      {/* 温度控制 */}
      <div className="flex justify-center items-center space-x-6 mb-6">
        <button
          onClick={() => onAdjustTemperature(-1)}
          className="bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full text-2xl font-bold transition-all duration-200 shadow-md"
          disabled={!isOn}
        >
          -
        </button>
        <button
          onClick={() => onAdjustTemperature(1)}
          className="bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full text-2xl font-bold transition-all duration-200 shadow-md"
          disabled={!isOn}
        >
          +
        </button>
      </div>      {/* 模式按钮 */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {[
          { key: 'cool', label: '制冷', icon: '❄️' },
          { key: 'heat', label: '制热', icon: '🔥' },
          { key: 'dry', label: '除湿', icon: '💧' },
          { key: 'fan', label: '送风', icon: '💨' }
        ].map((modeOption) => (
          <button
            key={modeOption.key}
            onClick={() => onChangeMode(modeOption.key)}
            className={`py-3 px-4 rounded-lg transition-all duration-200 border-2 shadow-md ${
              mode === modeOption.key && isOn
                ? 'bg-gray-600 hover:bg-gray-700 text-white border-gray-400 ring-4 ring-blue-200'
                : 'bg-gray-500 hover:bg-gray-600 text-white border-gray-300'
            }`}
            disabled={!isOn}
          >
            <div className="text-lg mb-1">{modeOption.icon}</div>
            <div className="text-xs font-medium">{modeOption.label}</div>
          </button>
        ))}
      </div>      {/* 风速和摆风控制 */}
      <div className="grid grid-cols-2 gap-6">
        <button
          onClick={onChangeFanSpeed}
          className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-4 rounded-lg border-2 border-gray-300 shadow-md transition-all duration-200"
          disabled={!isOn}
        >
          <div className="text-lg mb-1">🌪️</div>
          <div className="text-xs font-medium">风速</div>
        </button>        
        <button
          onClick={onToggleSwing}
          className={`text-white py-3 px-4 rounded-lg border-2 shadow-md transition-all duration-200 ${
            swingMode && isOn
              ? 'bg-gray-600 hover:bg-gray-700 border-gray-400 ring-4 ring-blue-200'
              : 'bg-gray-500 hover:bg-gray-600 border-gray-300'
          }`}
          disabled={!isOn}
        >
          <div className="text-lg mb-1">↔️</div>
          <div className="text-xs font-medium">摆风</div>
        </button>
      </div>      {/* 底部装饰 */}
      <div className="mt-8 flex justify-center space-x-3">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-sm"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.5s'}}></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-sm" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default RemoteControl;
