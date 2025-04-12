import './index.css';

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
      <Skill name="HTML+CSS" emoji="🔥" color="blue" />
      <Skill name=" Javascript" emoji="💪🏻" color="green" />
      <Skill name="Web Design" emoji="🔥" color="orange" />
      <Skill name="Git and Github" emoji="🔥" color="yellow" />
      <Skill name="React" emoji="🔥" color="red" />
      <Skill name="Node js" emoji="👶🏻" color="blue" />
    </div>
  );
}

function Skill({ name, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{name}</p>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
