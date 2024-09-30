import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import photoava from "../assets/photoava.webp";

function Home() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(textRef1.current, { opacity: 1, y: 0, duration: 0.5 })
      .to(textRef2.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(textRef3.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="mr-8">
        <img
          src={photoava}
          alt="photoava"
          className="w-80 h-80 border-4 shadow-md"
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
      </div>
    </div>
  );
}

export default Home;
