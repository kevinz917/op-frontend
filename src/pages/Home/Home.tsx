import { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../common/components/button/Button';
import { itemsSelector } from '../../redux/selectors/createItemSelector';
import createItemAction from '../../redux/actions/createItemAction';
import './home.scss';
import ItemCard from '../../components/ItemCard/ItemCard';
import { Item } from '../../common/types/Item';
import history from '../../common/components/Router/history';

interface homeMapStateProps {
  items: Item[];
}

interface homeMapDispatchProps {
  fetchItems: () => void;
}

const mapDispatchToProps = {
  fetchItems: () => createItemAction.getAllItems(),
};

const mapStateToProps = (state: any) => {
  return {
    items: itemsSelector(state),
  };
};

type homeAllProps = homeMapStateProps & homeMapDispatchProps;

const Home = (props: homeAllProps): ReactElement => {
  const { items, fetchItems } = props;

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div className="action-header">
        <div className="header2">Items</div>
        <Button type="link" href={'/new'}>
          New item
        </Button>
      </div>
      {items.map((item: Item) => (
        <ItemCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
