function Interest() {
  const interests = [
    { icon: "💻", title: "Web Development", description: "Creating responsive and interactive web applications" },
    { icon: "🎬", title: "Motion Design", description: "Crafting intuitive and visually appealing user interfaces" },
    { icon: "🤖", title: "Artificial Intelligence", description: "Exploring machine learning and neural networks" },
    { icon: "📱", title: "Mobile App Development", description: "Building cross-platform mobile applications" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">Interests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {interests.map((interest, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md">
            <span className="text-4xl mb-2">{interest.icon}</span>
            <h2 className="text-xl font-semibold mb-2">{interest.title}</h2>
            <p className="text-center text-sm">{interest.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center max-w-md text-sm">
        I&apos;m passionate about leveraging technology to solve real-world problems and create innovative solutions.
      </p>
    </div>
  );
}

export default Interest;
