
function Awards() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">Awards & Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Best Innovative Project</h2>
          <p className="text-sm text-gray-700">Awarded for developing a cutting-edge AI-powered web application</p>
          <p className="text-xs text-gray-600 mt-2">TechInnovate Conference, 2023</p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Outstanding Developer</h2>
          <p className="text-sm text-gray-700">Recognized for exceptional contributions to open-source projects</p>
          <p className="text-xs text-gray-600 mt-2">GitHub Community Awards, 2022</p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Hackathon Champion</h2>
          <p className="text-sm text-gray-700">First place in a 48-hour coding challenge for social impact solutions</p>
          <p className="text-xs text-gray-600 mt-2">CodeForGood Hackathon, 2021</p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Design Excellence Award</h2>
          <p className="text-sm text-gray-700">Honored for creating visually stunning and user-friendly interfaces</p>
          <p className="text-xs text-gray-600 mt-2">UX/UI Design Summit, 2020</p>
        </div>
      </div>
      <p className="mt-6 text-center max-w-2xl text-sm text-gray-700">
        These awards reflect my commitment to excellence in software development and design. I continue to push boundaries and strive for innovation in every project I undertake.
      </p>
    </div>
  )
}

export default Awards
