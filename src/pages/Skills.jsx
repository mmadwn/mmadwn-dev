function Skills() {
  const skills = [
    { name: "JavaScript (React, Node.js)", level: "Advanced", icon: "💻" },
    { name: "Tailwind CSS", level: "Proficient", icon: "🎨" },
    { name: "Express.js", level: "Intermediate", icon: "🚀" },
    { name: "SQL", level: "Intermediate", icon: "🗄️" },
    { name: "Git", level: "Proficient", icon: "🔀" },
    { name: "Problem Solving", level: "Expert", icon: "🧩" },
    { name: "Team Collaboration", level: "Advanced", icon: "👥" },
    { name: "Agile Methodologies", level: "Proficient", icon: "🔄" },
    { name: "Project Management", level: "Intermediate", icon: "📊" },
    { name: "Continuous Learning", level: "Expert", icon: "📚" },
  ];

  const SkillItem = ({ name, level, icon }) => (
    <div className="flex items-center mb-2 p-2 bg-background rounded-lg shadow-sm">
      <span className="mr-2 text-xl">{icon}</span>
      <span className="text-sm text-gray-800">{name}</span>
      <span className="ml-auto text-xs text-indigo-600">{level}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">My Skills</h1>
      <div className="w-full max-w-4xl grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} level={skill.level} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default Skills;