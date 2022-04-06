import { Layout } from "antd";
import Breadcrumbs from "./breadcrumbs";

const { Content } = Layout;

const MyContent = ({ children }) => (
  <Content style={{ padding: "0 50px" }}>
    <Breadcrumbs />
    <div className="site-layout-content">{children}</div>
  </Content>
);

export default MyContent;
