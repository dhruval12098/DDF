import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      // Angle for white dot rotation
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Limited movement for black pupil
      const moveRadius = 20;
      const radian = Math.atan2(deltaY, deltaX);

      const x = Math.cos(radian) * moveRadius;
      const y = Math.sin(radian) * moveRadius;

      setPupilPos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute w-full h-screen overflow-hidden z-10 top-[10vw] max-md:h-[50vh] max-md:top-[22vw]">        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 flex justify-between max-md:w-[70%]">
          
          {[1, 2].map((eye) => (
            <div
              key={eye}
              className="w-[15vw] h-[15vw] bg-green-100 rounded-full flex items-center justify-center overflow-hidden max-md:w-[28vw] max-md:h-[28vw]"
            >
              {/* Moving Black Pupil */}
              <div
                style={{
                  transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`
                }}
                className="relative w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center transition-transform duration-100 max-md:w-[18vw] max-md:h-[18vw]"
              >
                
                {/* Rotating White Dot */}
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`
                  }}
                  className="absolute top-1/2 left-1/2 w-full h-5 flex items-center"
                >
                  <div className="w-5 h-5 bg-white rounded-full max-md:w-4 max-md:h-4"></div>
                </div>

                {/* Center Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-white uppercase text-sm tracking-wider">
                    play
                  </h1>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    
  );
}

export default Eyes;
