import React, { useState } from "react";
import Bob from "../../Bob";
import Button from "../../common/components/button/Button";
import Input from "../../common/components/Input/Input";
import Spacer from "../../common/components/spacer/Spacer";
import TextArea from "../../common/components/textArea/TextArea";
import "./newitem.scss";

interface newItemOwnProps {}

const NewItem = (props: newItemOwnProps) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="home-container">
      <div className="header2">New item</div>
      <Spacer size="xlarge" />
      <div className="name-input-container">
        <div className="body2 title-input-text">Name</div>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Priority</div>
        {/* change to dropdown */}
        <Input value={priority} onChange={(e) => setPriority(e.target.value)} />
      </div>
      <div className="name-input-container">
        <div className="body2 title-input-text">Notes</div>
        <TextArea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          height={80}
          width={400}
        />
      </div>
      <Spacer size="xlarge" />
      <Button>Add item</Button>
    </div>
  );
};
export default NewItem;
