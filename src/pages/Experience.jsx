import company1 from "../assets/company-a.jpg";
import company2 from "../assets/company-b.jpg";
import company3 from "../assets/company-c.jpg";
import company4 from "../assets/company-d.jpg";

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 max-w-5xl">
        <div className="p-3 rounded-lg shadow-sm relative">
          <div className="mb-2 ml-4">
            <img src={company1} alt="Company Logo" className="w-16 h-16 object-cover rounded-full mx-auto" />
          </div>
          <div className="text-center ml-4">
            <h2 className="text-base font-semibold mb-1">Software Developer</h2>
            <p className="text-gray-600 text-sm mb-1">TechCorp Solutions</p>
            <p className="text-xs text-gray-500 mb-2">Jan 2022 - Present</p>
            <p className="text-gray-700 text-xs">Developed web apps using React and Node.js. Collaborated with teams to deliver quality solutions.</p>
          </div>
        </div>
        <div className="p-3 rounded-lg shadow-sm relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white shadow-sm"></div>
          <div className="mb-2 ml-4">
            <img src={company2} alt="Company Logo" className="w-16 h-16 object-cover rounded-full mx-auto" />
          </div>
          <div className="text-center ml-4">
            <h2 className="text-base font-semibold mb-1">Junior Web Developer</h2>
            <p className="text-gray-600 text-sm mb-1">WebWizards Inc.</p>
            <p className="text-xs text-gray-500 mb-2">Jun 2020 - Dec 2021</p>
            <p className="text-gray-700 text-xs">Assisted in developing responsive websites. Gained experience in version control and agile methods.</p>
          </div>
        </div>
        <div className="p-3 rounded-lg shadow-sm relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white shadow-sm"></div>
          <div className="mb-2 ml-4">
            <img src={company3} alt="Company Logo" className="w-16 h-16 object-cover rounded-full mx-auto" />
          </div>
          <div className="text-center ml-4">
            <h2 className="text-base font-semibold mb-1">Frontend Intern</h2>
            <p className="text-gray-600 text-sm mb-1">InnoTech Startups</p>
            <p className="text-xs text-gray-500 mb-2">Jan 2020 - May 2020</p>
            <p className="text-gray-700 text-xs">Learned frontend development basics. Contributed to UI/UX improvements for startup projects.</p>
          </div>
        </div>
        <div className="p-3 rounded-lg shadow-sm relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white shadow-sm"></div>
          <div className="mb-2 ml-4">
            <img src={company4} alt="Company Logo" className="w-16 h-16 object-cover rounded-full mx-auto" />
          </div>
          <div className="text-center ml-4">
            <h2 className="text-base font-semibold mb-1">IT Support Assistant</h2>
            <p className="text-gray-600 text-sm mb-1">TechHelp Services</p>
            <p className="text-xs text-gray-500 mb-2">Jun 2019 - Dec 2019</p>
            <p className="text-gray-700 text-xs">Provided technical support to clients. Troubleshot hardware and software issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
