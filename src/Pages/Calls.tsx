import { Button } from "../Components/Button";

import { useHistory } from "react-router-dom";

import { Layout, Menu, Table} from "antd";
import { ColumnsType } from "antd/es/table";

import "../styles/calls.css";

import { useAppSelector } from "../redux/hooks";

import data from "../data/data.json";

export function Calls() {
  //Colunas da tabela
  interface colunas {
    Descricao: string;
    Projeto: string;
    Status: String;
  }
  const columns: ColumnsType<colunas> = [
    {
      title: "Número",
    },
    {
      title: "Descrição",
      dataIndex: "Descricao",
      fixed:"left",
    },
    {
      title: "Projeto",
      dataIndex: "Projeto",
    },
    {
      title: "Status",
      dataIndex: "Status",
    },
    {
      title: "Ações",
    },
  ];

  //Função pegar o estado do store e organizar esse estado para poder mostrar na tabela
  const calling = useAppSelector((state) => state.criarChamado);

  const finalData: colunas[] = calling.map(function (cal) {
    const Datx = {
      Descricao: cal.Descricao,
      Projeto: data.Projeto[cal.Idprojeto].Denominacao,
      Status: data.StatusChamado[cal.IdStatusChamado].Denominacao,
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
        <Button className="criarChamado" onClick={navigateToNewCall}>
              Criar Chamado
            </Button>
        <Layout style={{ padding: "24px 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 40,
              minHeight: 280,
            }}
          >
            <Table
              columns={columns}
              dataSource={finalData}
              bordered
              pagination={false}
              scroll={{y : 400}}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
