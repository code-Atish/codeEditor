import { useInView } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const handleRef = useRef(null);
  const divisorRef = useRef(null);
  const shade1Ref = useRef(null);
  const shade2Ref = useRef(null);
  const intervalRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.4, // Adjust this value to control when the animation triggers
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    const handle = handleRef.current;
    const divisor = divisorRef.current;
    const shade1 = shade1Ref.current;
    const shade2 = shade2Ref.current;

    handle.style.left = `${sliderValue / 100}%`;
    divisor.style.width = `${sliderValue / 100}%`;

    if (sliderValue / 100 > 50) {
      shade1.style.opacity = sliderValue / 10000;
      shade2.style.opacity = 0;
    } else {
      shade1.style.opacity = 0;
      shade2.style.opacity = 1 - sliderValue / 10000;
    }
  }, [sliderValue]);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    let time
    if(window.innerWidth>760){
      time= 5
    }else {
      time=10
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalRef.current = setInterval(() => {
              setSliderValue((prevValue) => {
                if (prevValue >= 5000) {
                  clearInterval(intervalRef.current);
                  return 5000;
                }
                return prevValue + 100; // Adjust increment as needed
              });
            }, time); // Adjust interval time as needed
          }
        });
      },
      { threshold: 0.1 }
    );

    if (handleRef.current) {
      observer.observe(handleRef.current);
    }

    return () => {
      if (handleRef.current) {
        observer.unobserve(handleRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div className="relative w-full mb-20 pb-[49%] overflow-hidden">
      <figure className="absolute w-full h-full bg-cover m-0" style={{ backgroundImage: 'url(report-2.jpg)' }}>
        <div
          ref={shade1Ref}
          className="shade1 absolute inset-0 w-full h-full bg-black transition duration-[50ms]"
          style={{ opacity: 0.8508 }}
        ></div>
        <div
          ref={handleRef}
          className="absolute h-12 w-12 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{ left: '0%' }}
        >
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.90927 10.8241C5.43472 11.2535 4.7003 11.197 4.24835 10.745L0.350263 6.84692C0.112988 6.60965 0 6.30458 0 5.99951C0 5.69444 0.112988 5.38938 0.350263 5.1521L4.24835 1.25402C4.7003 0.802064 5.43472 0.74557 5.92057 1.16363C6.44031 1.62688 6.46291 2.42909 5.97706 2.91494L3.69471 5.2086C3.25405 5.64925 3.25405 6.36107 3.69471 6.80173L5.96576 9.07278C6.45161 9.55863 6.42902 10.3608 5.90927 10.8241ZM9.76223 1.25407L13.6603 5.15215C13.8976 5.38943 14.0106 5.69449 13.9994 6.01097C13.9994 6.31593 13.8864 6.62099 13.649 6.85838L9.75093 10.7565C9.29898 11.197 8.56456 11.2535 8.09001 10.8354C7.57026 10.3722 7.54767 9.57009 8.03352 9.08413L10.3272 6.80178C10.7677 6.36112 10.7677 5.6493 10.3272 5.20864L8.04481 2.92629C7.55897 2.44044 7.58145 1.63823 8.10131 1.17497C8.57586 0.74562 9.31028 0.802114 9.76223 1.25407Z" fill="white"></path>
              </svg>
          </div>
        </div>
        <div
          ref={divisorRef}
          className="absolute top-0 left-0 h-full bg-cover transition duration-[50ms]"
          style={{
            width: '0%',
            backgroundImage: 'url(resume.jpg)',
          }}
        >
          <div
            ref={shade2Ref}
            className="shade2 absolute top-0 left-0 w-full h-full bg-black transition duration-[50ms]"
            style={{ opacity: 0 }}
          ></div>
          <div className='absolute top-0 right-[-1px] w-[2px]  bg-black z-[3] shadow-[0_-3px_8px_2px_rgba(0,0,0,0.3)]' style={{height : 'calc(50% - 15px)'}}></div>
          <div className='absolute bottom-0 right-[-1px] w-[2px]  bg-black z-[3] shadow-[0_3px_8px_2px_rgba(0,0,0,0.3)]' style={{height : 'calc(50% - 15px)'}}></div>
        </div>
      </figure>
      <input
        type="range"
        min="0"
        max="10000"
        value={sliderValue}
        onChange={handleSliderChange}
        className="appearance-none bg-transparent absolute left-0 top-1/2 transform -translate-y-1/2 "
        style={{width : "calc(100% + 34px)",
          left:'-18px'
        }}
      />
    </div>
  );
};

export default ImageSlider;

// import React, { useRef, useEffect } from 'react';

// const ComparisonSlider = () => {
//   const divisorRef = useRef(null);
//   const handleRef = useRef(null);
//   const sliderRef = useRef(null);
//   const shade1Ref = useRef(null);
//   const shade2Ref = useRef(null);

//   const moveDivisor = () => {
//     const sliderValue = sliderRef.current.value / 100;
//     handleRef.current.style.left = `${sliderValue}%`;
//     divisorRef.current.style.width = `${sliderValue}%`;

//     if (sliderValue > 50) {
//       shade1Ref.current.style.opacity = sliderValue / 10000;
//       shade2Ref.current.style.opacity = 0;
//     } else {
//       shade1Ref.current.style.opacity = 0;
//       shade2Ref.current.style.opacity = 1 - sliderValue / 10000;
//     }
//   };

//   useEffect(() => {
//     moveDivisor();
//   }, []);

//   return (
//     <div id='comparison' className="relative w-full pb-[48.876404494382%] overflow-hidden">
//       <figure className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.hackerrank.com/wp-content/uploads/2022/09/report-2.jpg')" }}>
//         <div ref={shade1Ref} className="absolute inset-0 bg-black opacity-50 transition-opacity"></div>
//         <div ref={handleRef} className="absolute h-12 w-12 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none">
//           <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" clipRule="evenodd" d="M5.90927 10.8241C5.43472 11.2535 4.7003 11.197 4.24835 10.745L0.350263 6.84692C0.112988 6.60965 0 6.30458 0 5.99951C0 5.69444 0.112988 5.38938 0.350263 5.1521L4.24835 1.25402C4.7003 0.802064 5.43472 0.74557 5.92057 1.16363C6.44031 1.62688 6.46291 2.42909 5.97706 2.91494L3.69471 5.2086C3.25405 5.64925 3.25405 6.36107 3.69471 6.80173L5.96576 9.07278C6.45161 9.55863 6.42902 10.3608 5.90927 10.8241ZM9.76223 1.25407L13.6603 5.15215C13.8976 5.38943 14.0106 5.69449 13.9994 6.01097C13.9994 6.31593 13.8864 6.62099 13.649 6.85838L9.75093 10.7565C9.29898 11.197 8.56456 11.2535 8.09001 10.8354C7.57026 10.3722 7.54767 9.57009 8.03352 9.08413L10.3272 6.80178C10.7677 6.36112 10.7677 5.6493 10.3272 5.20864L8.04481 2.92629C7.55897 2.44044 7.58145 1.63823 8.10131 1.17497C8.57586 0.74562 9.31028 0.802114 9.76223 1.25407Z" fill="white"></path>
//           </svg>
//         </div>
//         <div ref={divisorRef} className="absolute inset-0 bg-cover bg-center shadow-md" style={{ backgroundImage: "url('https://www.hackerrank.com/wp-content/uploads/2022/09/resume.jpg')", width: '0%' }}>
//           <div ref={shade2Ref} className="absolute inset-0 bg-black opacity-50 transition-opacity"></div>
//         </div>
//       </figure>
//       <input ref={sliderRef} type="range" min="0" max="10000" defaultValue="0" onInput={moveDivisor} className="absolute top-1/2 transform -translate-y-1/2 left-[-18px] w-[calc(100%+32px)] cursor-col-resize z-20 bg-transparent" />
//     </div>
//   );
// };

// export default ComparisonSlider;
