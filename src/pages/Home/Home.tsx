import Button from "../../common/components/button/Button";
import Spacer from "../../common/components/spacer/Spacer";
import "./home.scss";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div className="home-container">
      <div className="action-header">
        <div className="header2">My memories</div>
        <Button type="link" href={"/new"}>
          New item
        </Button>
      </div>
    </div>
  );
};

export default Home;
