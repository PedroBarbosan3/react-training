import { Button } from "../Components/Button";

import { useHistory } from "react-router-dom";

import { Layout, Menu, Table } from "antd";

import "../styles/calls.css";

import { useAppSelector } from "../redux/hooks";

import data from "../data/data.json";

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
      dataIndex: "projeto",
    },
    {
      title: "Status",
      dataIndex: "StatusChamado",
    },
    {
      title: "Ações",
    },
  ];

  const calling = useAppSelector((state) => state.criarChamado);

  const finalData = calling.map(function (cal) {
    const Datx = {
      Descricao: cal.Descricao,
      projeto: data.Projeto[cal.Idprojeto].Denominacao,
      StatusChamado: data.StatusChamado[cal.IdStatusChamado].Denominacao,
    };
    return Datx;
  });

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
            <Table columns={columns} dataSource={finalData} bordered />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
