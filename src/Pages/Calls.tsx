import { Button } from "../Components/Button";

import { useHistory } from "react-router-dom";

import { Layout, Menu, Table } from "antd";

import "../styles/calls.css";

import { useAppSelector } from "../redux/hooks";

export function Calls() {
  const columns = [
    {
      title: "Número",
    },
    {
      title: "Descrição",
      dataIndex: "Descricao",
    },
    {
      title: "Projeto",
      dataIndex: "Projeto",
    },
    {
      title: "Status",
      dataIndex: "StatusChamado",
    },
    {
      title: "Ações",
    },
  ];

  const data = useAppSelector((state) => state.criarChamado);

  //antd
  const { Header, Content, Sider } = Layout;

  //router
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
            <Menu.Item key="1">Chamadas</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <div className="Button">
            <Button onClick={navigateToNewCall}>Criar Chamado</Button>
          </div>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Table columns={columns} dataSource={data} bordered />,
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
