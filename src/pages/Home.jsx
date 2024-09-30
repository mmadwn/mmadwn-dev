import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import photoava from "../assets/photoava.webp";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Home() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(textRef1.current, { opacity: 1, y: 0, duration: 0.5 })
      .to(textRef2.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(textRef3.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(iconsRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full p-4">
      <div className="mb-4 md:mr-8">
        <img
          src={photoava}
          alt="photoava"
          className="w-full max-w-xs h-auto border-4 shadow-md"
        />
      </div>
      <div className="text-center text-xl font-nunito max-w-md">
        <p ref={textRef1} className="opacity-0 translate-y-5 transition-opacity duration-500">
          Hello, I&apos;m <span className="font-bold">Muhammad Ridwan</span>
        </p>
        <p ref={textRef2} className="mt-2 opacity-0 translate-y-5 transition-opacity duration-500">
          A passionate Computer Engineering graduate.
        </p>
        <p ref={textRef3} className="mt-2 opacity-0 translate-y-5 transition-opacity duration-500">
          Explore more about me in the About section!
        </p>
        <div ref={iconsRef} className="flex justify-center space-x-4 mt-4 opacity-0 translate-y-5">
          <div>
            <a href="https://github.com/ridwannn" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-10 h-10 transition-transform hover:scale-110" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/mmadwn/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="w-10 h-10 transition-transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
