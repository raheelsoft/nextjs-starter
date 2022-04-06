import React from "react";
import Avatar from "./AvatarDropdown";
import HeaderSearch from "../HeaderSearch";
import classes from "./index.module.less";

const GlobalHeaderRight = ({ theme, layout }) => {
  let className = classes.right;

  if (theme === "dark" && layout === "top") {
    className = `${right}  ${dark}`;
  }

  return (
    <div className={className}>
      <HeaderSearch
        className={`${classes.action} ${classes.search}`}
        placeholder="Search anything"
        defaultValue=""
        options={[
          {
            label: <a href="https://www.facebook.com/aly.zafar">Ali Zafar</a>,
            value: "Ali Zafar",
          },
        ]} // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      <Avatar />
    </div>
  );
};

export default GlobalHeaderRight;
