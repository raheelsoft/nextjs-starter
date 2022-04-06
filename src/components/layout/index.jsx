import { Layout } from "antd";

import MyHeader from "./header";
import MyFooter from "./footer";
import MyContent from "./content";

const MyLayout = ({ menuMode, menuTheme, children }) => (
  <Layout className="layout">
    <MyHeader menuMode={menuMode} menuTheme={menuTheme} />
    <MyContent>{children}</MyContent>
    <MyFooter />
  </Layout>
);

export default MyLayout;
