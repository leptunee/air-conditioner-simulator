import React from 'react';

const AirConditioner = ({ isOn, temperature, mode, fanSpeed, swingMode }) => {  const getModeColor = () => {
    if (!isOn) return 'text-gray-400';
    switch (mode) {
      case 'cool': return 'text-blue-600';
      case 'heat': return 'text-yellow-600';
      case 'dry': return 'text-yellow-500';
      case 'fan': return 'text-black';
      default: return 'text-gray-400';
    }
  };

  const getModeIcon = () => {
    switch (mode) {
      case 'cool': return '❄️';
      case 'heat': return '🔥';
      case 'dry': return '💧';
      case 'fan': return '💨';
      default: return '❄️';
    }
  };

  const getFanAnimation = () => {
    if (!isOn) return '';
    switch (fanSpeed) {
      case 1: return 'animate-pulse';
      case 2: return 'animate-bounce-slow';
      case 3: return 'animate-bounce';
      case 4: return 'animate-pulse-slow';
      case 5: return 'animate-ping';
      default: return 'animate-pulse';
    }
  };  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl shadow-lg p-6 w-full max-w-4xl">
      {/* 空调外壳 - 横向布局 */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-gray-200 rounded-lg p-6">
        <div className="grid grid-cols-4 gap-6 items-center">
          
          {/* 左侧：品牌标识和显示屏 */}
          <div className="col-span-1">
            {/* 品牌标识 */}
            <div className="text-center mb-4">
              <div className="flex flex-col items-center">
                <img 
                  src="/Screenshot_20250526_150046.png" 
                  alt="空调标识" 
                  className="w-12 h-12 mb-2 object-contain"
                />
                <h2 className="text-lg font-bold text-gray-700">西黄村</h2>
              </div>
              <div className="w-full h-1 bg-blue-400 mt-2"></div>
            </div>

            {/* 显示屏 */}
            <div className={`bg-gray-800 rounded-lg p-4 ${isOn ? 'shadow-lg shadow-blue-400/30' : ''}`}>
              <div className="text-center">
                {isOn ? (
                  <>
                    <div className={`text-2xl font-bold ${getModeColor()}`}>
                      {temperature}°C
                    </div>
                    <div className="text-sm text-blue-400 mt-1">
                      {mode.toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-400">
                      风速 {fanSpeed}
                    </div>
                    <div className="text-lg mt-2">
                      {getModeIcon()}
                    </div>
                  </>
                ) : (
                  <div className="text-gray-500 text-xl">---</div>
                )}
              </div>
            </div>
          </div>          {/* 中间：出风口 */}
          <div className="col-span-2">
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((row) => (
                <div key={row} className="flex space-x-1 justify-center">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) => (
                    <div
                      key={col}
                      className={`w-4 h-1 rounded-full ${
                        isOn ? 'bg-blue-400' : 'bg-gray-300'
                      } ${isOn ? getFanAnimation() : ''}`}
                      style={{
                        animationDelay: `${(row + col) * 0.05}s`
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* 温度效果动画 */}
            {isOn && (
              <div className="flex justify-center mt-4">
                {mode === 'cool' && (
                  <div className="text-2xl animate-bounce text-blue-600">
                    ❄️ ❄️ ❄️ ❄️
                  </div>
                )}
                {mode === 'heat' && (
                  <div className="text-2xl animate-pulse text-yellow-600">
                    🔥 🔥 🔥 🔥
                  </div>
                )}
                {mode === 'dry' && (
                  <div className="text-2xl animate-bounce-slow text-yellow-500">
                    💧 💧 💧 💧
                  </div>
                )}
                {mode === 'fan' && (
                  <div className="text-2xl animate-spin text-black">
                    💨 💨 💨 💨
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 右侧：指示灯和控制面板 */}
          <div className="col-span-1">
            <div className="space-y-4">              {/* 指示灯 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">电源</span>
                  <div className={`w-4 h-4 rounded-full border-2 border-gray-400 ${
                    isOn ? 'bg-green-400 animate-pulse' : 'bg-gray-300'
                  }`}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">摆风</span>
                  <div className={`w-4 h-4 rounded-full border-2 border-gray-400 ${
                    isOn && swingMode ? 'bg-blue-400 animate-pulse' : 'bg-gray-300'
                  }`}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">运行</span>
                  <div className={`w-4 h-4 rounded-full border-2 border-gray-400 ${
                    isOn ? 'bg-orange-400 animate-pulse' : 'bg-gray-300'
                  }`}></div>
                </div>
              </div>
              
              {/* 装饰线条 */}
              <div className="space-y-1">
                <div className="w-full h-1 bg-yellow-400"></div>
                <div className="w-full h-1 bg-black"></div>
                <div className="w-full h-1 bg-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditioner;
