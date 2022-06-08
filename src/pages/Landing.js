import { Logo } from "../components";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Ipsum accusantium atque vel suscipit quidem. Asperiores minus
            aliquid aut aperiam nesciunt amet veritatis! Accusantium saepe
            accusantium iusto repellat dolorem. Ducimus libero unde ex cumque
            quo Reprehenderit doloremque aliquid vitae aliquam assumenda?
            Consectetur laborum impedit rerum sed non atque laboriosam?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
