import { connect } from 'react-redux';
import Button from '../../common/components/Button/Button';
import Input from '../../common/components/Input/Input';
import Select from '../../common/components/SingleSelect/Select';
import Spacer from '../../common/components/Spacer/Spacer';
import TextArea from '../../common/components/textArea/TextArea';
import { formatValueLabelPair } from './createItemHelpers';
import './newitem.scss';
import { categoryOptions, frequencyOptions } from './newItemStrings';
import createItemAction from '../../redux/actions/createItemAction';
import { Link } from 'react-router-dom';
import { newItemSelector } from '../../redux/selectors/createItemSelector';
import { valueLabel } from '../../common/types/baseTypes';
import RenderIf from '../../common/components/RenderIf/RenderIf';

interface newItemMapStateProps {
  item: any;
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
    item: newItemSelector(state),
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
  const { nameFieldChanged, notesFieldChanged, item, categoryFieldChanged, frequencyFieldChanged, saveItem } = props;

  return (
    <div>
      <Link to="/">
        <div className="body2 back-link">← Back</div>
      </Link>
      <hr />
      <br />

      <RenderIf value={window.location.pathname.includes('new')}>
        <div className="header2">New item</div>
      </RenderIf>
      <RenderIf value={window.location.pathname.includes('edit')}>
        <div className="header2">Edit item</div>
      </RenderIf>

      <Spacer size="xlarge" />
      <div className="name-input-container">
        <div className="body2 title-input-text">Name</div>
        <Input value={item.name} onChange={(e) => nameFieldChanged(e.target.value)} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Notes</div>
        <TextArea value={item.notes} onChange={(e) => notesFieldChanged(e.target.value)} height={80} width={400} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Category</div>
        <Select
          options={formatValueLabelPair(categoryOptions)}
          placeholder="Choose category"
          onChange={categoryFieldChanged}
          value={{ value: item.category, label: item.category }}
        />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Frequency</div>
        <Select
          options={frequencyOptions}
          onChange={frequencyFieldChanged}
          placeholder="Choose frequency"
          value={frequencyOptions.filter((option) => option.value === item.frequency)[0]}
        />
      </div>

      <Spacer size="xlarge" />
      <Button onClick={saveItem}>Save item</Button>
    </div>
  );
};

export default connect(newItemMapStateToProps, mapDispatchToActions)(NewItem);
