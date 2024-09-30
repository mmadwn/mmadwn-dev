import PropTypes from 'prop-types';

function SkillCard({ title, skills }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;
