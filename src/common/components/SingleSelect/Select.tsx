import classNames from "classnames";
import { PureComponent } from "react";
import ReactSelect from "react-select";
import { valueLabel } from "../../types/baseTypes";
import "./select.scss";

interface selectOwnProps {
  options: valueLabel[];
  placeholder?: string;
  menuIsOpen?: boolean;
  className?: string;
}

export default class Select extends PureComponent<selectOwnProps> {
  render() {
    const { options, placeholder, menuIsOpen, className } = this.props;

    const selectClassNames = classNames("react-select-container", {
      className: className,
    });

    return (
      <div>
        <ReactSelect
          options={options}
          className={selectClassNames}
          classNamePrefix="react-select"
          placeholder={placeholder}
          menuIsOpen={menuIsOpen}
        />
      </div>
    );
  }
}
