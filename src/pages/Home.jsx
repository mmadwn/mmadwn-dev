import photoava from "../assets/photoava.webp";

function Home() {
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
        <p>
          Hello, I&apos;m <span className="font-bold">Muhammad Ridwan</span>
        </p>
        <p className="mt-2">A passionate Computer Engineering graduate.</p>
        <p className="mt-2">Explore more about me in the About section!</p>{" "}
      </div>
    </div>
  );
}

export default Home;
