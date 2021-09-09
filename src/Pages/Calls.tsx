import { Button } from "../Components/Button";
import { useHistory } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Table } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import "../styles/calls.css";

const columns = [
  {
    title: "Número",
    dataIndex: "Number",
  },
  {
    title: "Descrição",
    dataIndex: "Description",
  },
  {
    title: "Projeto",
    dataIndex: "Project",
  },
  {
    title: "Status",
  },
  {
    title: "Ações",
  },
];

export function Calls() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const history = useHistory();
  function navigateToNewCall() {
    history.push("/call/new");
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <strong>T4i</strong>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" title="chamadas"></SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "0 16px" }}>
            <div className="Button">
              <Button onClick={navigateToNewCall}>Criar Chamado</Button>
            </div>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Table
              columns={columns}
              //dataSource={data}
              bordered
            />
            ,
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
