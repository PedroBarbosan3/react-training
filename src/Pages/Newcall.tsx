import { Button } from "../Components/Button";
import { useHistory } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Table } from "antd";

export function Newcall() {
  const { Header, Content, Sider } = Layout;

  const history = useHistory();

  function navigateToCalls() {
    history.push("/calls");
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
            <Menu.Item key="1">Chamadas</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div>
              <Button onClick={navigateToCalls}>Voltar</Button>
              <Button>Criar chamado</Button>
            </div>
            ,
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
