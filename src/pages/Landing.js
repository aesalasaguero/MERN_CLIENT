import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <div>
      <nav>
        <Logo />
      </nav>
      <main>
        <h4>Landing</h4>
        <img src={main} alt="main" />
      </main>
    </div>
  );
};

export default Landing;
