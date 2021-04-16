import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../common/components/button/Button';
import Input from '../../common/components/Input/Input';
import Select from '../../common/components/SingleSelect/Select';
import Spacer from '../../common/components/spacer/Spacer';
import TextArea from '../../common/components/textArea/TextArea';
import { formatValueLabelPair } from './createItemHelpers';
import './newitem.scss';
import { categoryOptions, frequencyOptions } from './newItemStrings';
import createItemAction, { CREATE_ITEM_ACTIONS } from '../../redux/actions/createItemAction';
import actionCreator from '../../redux/actionCreator';

interface newItemOwnProps {
  setSavingTrue: () => void;
  mockFetch: () => void;
}

const mapDispatchToActions = {
  setSavingTrue: () => createItemAction.setSavingTrue(),
  mockFetch: () => createItemAction.beginMockFetch(),
};

const NewItem = (props: newItemOwnProps) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // mock fetch using sagas
    const { mockFetch } = props;
    mockFetch();
  }, []);

  return (
    <div className="home-container">
      <div className="header2">New item</div>
      <Spacer size="xlarge" />
      <div className="name-input-container">
        <div className="body2 title-input-text">Name</div>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Notes</div>
        <TextArea value={notes} onChange={(e) => setNotes(e.target.value)} height={80} width={400} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Category</div>
        <Select options={formatValueLabelPair(categoryOptions)} placeholder="Choose category" />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Frequency</div>
        <Select options={frequencyOptions} placeholder="Choose frequency" />
      </div>

      <Spacer size="xlarge" />
      <Button>Add item</Button>
    </div>
  );
};

export default connect(null, mapDispatchToActions)(NewItem);
