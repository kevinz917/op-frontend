import { ReactElement } from 'react';
import { Item } from '../../common/types/Item';
import './ItemCard.scss';

interface itemCardOwnProps {
  item: Item;
  key: string;
}

const ItemCard = (props: itemCardOwnProps): ReactElement => {
  const { item, key } = props;

  return (
    <div className="itemCardContainer" key={key}>
      <div className="header3">{item.name}</div>
      <div className="body2 subtitle">{item.notes}</div>
    </div>
  );
};

export default ItemCard;
