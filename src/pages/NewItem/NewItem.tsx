import { connect } from 'react-redux';
import Button from '../../common/components/button/Button';
import Input from '../../common/components/Input/Input';
import Select from '../../common/components/SingleSelect/Select';
import Spacer from '../../common/components/spacer/Spacer';
import TextArea from '../../common/components/textArea/TextArea';
import { formatValueLabelPair } from './createItemHelpers';
import './newitem.scss';
import { categoryOptions, frequencyOptions } from './newItemStrings';
import createItemAction from '../../redux/actions/createItemAction';
import { Link } from 'react-router-dom';
import { newItemSelector } from '../../redux/selectors/createItemSelector';
import { valueLabel } from '../../common/types/baseTypes';

interface newItemMapStateProps {
  newItem: any;
}

interface newItemDispatchProps {
  nameFieldChanged: (name: string) => void;
  notesFieldChanged: (notes: string) => void;
  categoryFieldChanged: (category: any) => void;
  frequencyFieldChanged: (frequency: any) => void;
  saveItem: () => void;
}

const newItemMapStateToProps = (state: any) => {
  return {
    newItem: newItemSelector(state),
  };
};

const mapDispatchToActions = {
  nameFieldChanged: (name: string) => createItemAction.nameFieldChanged(name),
  notesFieldChanged: (notes: string) => createItemAction.notesFieldChanged(notes),
  categoryFieldChanged: (category: valueLabel) => createItemAction.categoryFieldChanged(category),
  frequencyFieldChanged: (frequency: valueLabel) => createItemAction.frequencyFieldChanged(frequency),
  saveItem: () => createItemAction.saveNewItem(),
};

type newItemAllProps = newItemDispatchProps & newItemMapStateProps;

const NewItem = (props: newItemAllProps) => {
  const { nameFieldChanged, notesFieldChanged, newItem, categoryFieldChanged, frequencyFieldChanged, saveItem } = props;

  return (
    <div>
      <Link to="/">
        <div className="body2 back-link">← Back</div>
      </Link>
      <hr />
      <br />
      <div className="header2">New item</div>
      <Spacer size="xlarge" />
      <div className="name-input-container">
        <div className="body2 title-input-text">Name</div>
        <Input value={newItem.name} onChange={(e) => nameFieldChanged(e.target.value)} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Notes</div>
        <TextArea value={newItem.notes} onChange={(e) => notesFieldChanged(e.target.value)} height={80} width={400} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Category</div>
        <Select
          options={formatValueLabelPair(categoryOptions)}
          placeholder="Choose category"
          onChange={categoryFieldChanged}
        />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Frequency</div>
        <Select options={frequencyOptions} onChange={frequencyFieldChanged} placeholder="Choose frequency" />
      </div>

      <Spacer size="xlarge" />
      <Button onClick={() => saveItem()}>Add item</Button>
    </div>
  );
};

export default connect(newItemMapStateToProps, mapDispatchToActions)(NewItem);
