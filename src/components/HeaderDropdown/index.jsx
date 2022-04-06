import React from "react";
import { Dropdown } from "antd";
import classNames from "classnames";
import classes from "./index.module.less";

const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => (
  <Dropdown
    overlayClassName={classNames(classes.container, cls)}
    {...restProps}
  />
);

export default HeaderDropdown;
