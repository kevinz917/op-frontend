import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./button.scss";

interface buttonOwnProps {
  children: React.ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  type?: string;
  href?: string;
  width?: number;
  icon?: string;
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
        <Link
          className={cssClasses}
          to={href || ""}
          {...otherProps}
          style={{ width: `${width}px` }}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        disabled={disabled}
        className={cssClasses}
        {...otherProps}
        style={{ width: width }}
        type="button"
      >
        {children}
      </button>
    );
  }
}
