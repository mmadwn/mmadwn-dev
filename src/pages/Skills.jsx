
function Skills() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript (React, Node.js)</li>
            <li>Tailwind</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Soft Skills</h2>
          <ul className="list-disc list-inside">
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Agile Methodologies</li>
            <li>Project Management</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills