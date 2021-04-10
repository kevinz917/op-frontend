import React, { PureComponent } from "react";
import classNames from "classnames";
import "./button.scss";

interface buttonOwnProps {
  children: React.ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  type?: string;
  href?: string;
  width?: string;
}

export default class Button extends PureComponent<buttonOwnProps> {
  render() {
    const {
      children,
      disabled,
      secondary,
      type,
      href,
      width,
      ...otherProps
    } = this.props;

    const cssClasses = classNames("button-default", {
      "button-secondary": secondary,
      "button-disabled": disabled,
    });

    if (type === "link") {
      return (
        <a
          className={cssClasses}
          href={href}
          {...otherProps}
          style={{ width: width }}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        disabled={disabled}
        className={cssClasses}
        {...otherProps}
        style={{ width: width }}
      >
        {children}
      </button>
    );
  }
}
