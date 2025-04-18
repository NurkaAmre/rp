import './index.css';
import data from './data';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="logo512.png" className="avatar" alt="Nurgul Kereikhan" />;
}

function Intro() {
  return (
    <>
      <h1>Nurgul Kereikhan</h1>
      <p>
        Full-stack web developer and UI/UX designer. When not coding or
        preparing yutube videos, I like to teach my son for new skills and
        learning French, dance or walk with my son outside
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {data.map((skill) => (
        <Skill {...skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
      <span>
        {level === 'Advanced' && '🔥'}
        {level === 'Beginner' && '👶🏻'}
        {level === 'Intermediate' && '💪🏻'}
      </span>
    </div>
  );
}

export default App;
