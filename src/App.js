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
  return <img src="./public/logo512.png" />;
}

function Intro() {
  return (
    <>
      <h1>Nurgul</h1>
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
    <div>
      <Skill name="HTML CSS" emoji="🔥" bg="#ccc" />
      <Skill name=" Javascript" emoji="👍🏻" />
      <Skill name="Web Design" emoji="🔥" bg="#ccc" />
      <Skill name="Git and Github" emoji="🔥" bg="#ccc" />
      <Skill name="React" emoji="🔥" bg="#ccc" />
      <Skill name="Node js" emoji="🔥" bg="#ccc" />
    </div>
  );
}

function Skill({ name, emoji, bg }) {
  return (
    <div className={bg}>
      <p>{name}</p>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
