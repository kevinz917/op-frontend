import { ReactElement } from 'react';
import Button from '../../common/components/button/Button';
import './home.scss';

const Home = (): ReactElement => {
  return (
    <div className="home-container">
      <div className="action-header">
        <div className="header2">My memories</div>
        <Button type="link" href={'/new'}>
          New item
        </Button>
      </div>
    </div>
  );
};

export default Home;
