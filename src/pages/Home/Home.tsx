import Button from "../../common/components/button/Button";
import "./home.scss";

interface HomeProps {}

const Home = (props: HomeProps) => {
  console.log("Landing");
  return (
    <div className="home-container">
      <div className="header2">Today's snapshots</div>
      <Button>Hello</Button>
    </div>
  );
};

export default Home;
