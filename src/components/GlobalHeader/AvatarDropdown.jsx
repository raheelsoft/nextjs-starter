import { useContext } from "react";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { globalContext } from "../../context";
import { Avatar, Menu, Spin } from "antd";
import React from "react";
import HeaderDropdown from "../HeaderDropdown";
import classes from "./index.module.less";
import avatar from "../../../public/avatar.png";
// import { userRoles } from "@/models/constants";
import NoticeIconView from "./NoticeIconView";
import * as selectors from "../../context/globalSelectors";
const globalStateSelectors = {
  currentUser: selectors.currentUserStateSelector,
};
const AvatarDropdown = (props) => {
  const { globalStateSelector, globalDispatch } = useContext(globalContext);
  const { currentUser } = globalStateSelector(globalStateSelectors);

  const onMenuClick = (event) => {
    const { key } = event;

    if (key === "logout") {
      // if (globalDispatch) {
      //   dispatch({
      //     type: "login/logout",
      //   });
      // }

      return;
    }
  };

  const menuHeaderDropdown = (
    <Menu className={classes.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );
  const getNameFromEmail = (email) => email.split("@")[0];

  const userRoleValue = null; //userRoles?.find((item) => item.key === userRole)?.value;

  return currentUser?.firstName &&
    (currentUser?.firstName || getNameFromEmail(currentUser?.email)) ? (
    <>
      <span style={{ marginRight: "1.5rem " }}>
        <NoticeIconView />
      </span>
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${classes.action} ${classes.account}`}>
          <Avatar size="small" className={"avatar"} src={avatar} alt="avatar" />
          <span style={{ color: "white", marginLeft: "0.5rem" }}>
            {currentUser.firstName ||
              `${getNameFromEmail(currentUser?.email)} (${userRoleValue})`}
          </span>
        </span>
      </HeaderDropdown>
    </>
  ) : (
    <span className={`${classes.action} ${classes.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );
};

export default AvatarDropdown;
