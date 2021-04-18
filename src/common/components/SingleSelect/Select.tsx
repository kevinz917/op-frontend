import classNames from 'classnames';
import { PureComponent } from 'react';
import ReactSelect from 'react-select';
import { valueLabel } from '../../types/baseTypes';
import './select.scss';

interface selectOwnProps {
  options: valueLabel[];
  placeholder?: string;
  menuIsOpen?: boolean;
  className?: string;
  onChange?: any;
}

export default class Select extends PureComponent<selectOwnProps> {
  render() {
    const { options, placeholder, menuIsOpen, className, onChange } = this.props;

    const selectClassNames = classNames('react-select-container', {
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
          onChange={onChange}
        />
      </div>
    );
  }
}
