import { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../common/components/Button/Button';
import { itemsSelector } from '../../redux/selectors/createItemSelector';
import createItemAction from '../../redux/actions/createItemAction';
import './home.scss';
import ItemCard from '../../components/ItemCard/ItemCard';
import { Item } from '../../common/types/Item';
import Spacer from '../../common/components/Spacer/Spacer';
import { Link } from 'react-router-dom';

interface homeMapStateProps {
  items: Item[];
}

interface homeMapDispatchProps {
  fetchItems: () => void;
  setItemFields: (item: any) => void;
}

const mapDispatchToProps = {
  fetchItems: () => createItemAction.getAllItems(),
  setItemFields: (item: any) => createItemAction.populateItemFields(item),
};

const mapStateToProps = (state: any) => {
  return {
    items: itemsSelector(state),
  };
};

type homeAllProps = homeMapStateProps & homeMapDispatchProps;

const Home = (props: homeAllProps): ReactElement => {
  const { items, fetchItems, setItemFields } = props;

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
      <Spacer size="large" />
      {items.map((item: Item) => (
        <Link to={`/edit/${item._id}`}>
          <ItemCard item={item} key={item._id} onClick={() => setItemFields(item)} />
        </Link>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
