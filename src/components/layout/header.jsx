import { Layout, Menu, Avatar } from "antd";
import Link from "next/link";
import RightContent from "../GlobalHeader/AvatarDropdown";

const { Header } = Layout;

const MyHeader = ({ menuTheme, menuMode }) => {
  return (
    <Header>
      <div className="logo" />
      <Menu
        style={{ display: "inline-block", width: "90%" }}
        theme={menuTheme}
        mode={menuMode}
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key={1}>
          <Link href="/">Posts</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link href="/users">Users</Link>
        </Menu.Item>
      </Menu>
      <span>
        <RightContent />
      </span>
    </Header>
  );
};

export default MyHeader;
