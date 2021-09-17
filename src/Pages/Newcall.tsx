import { Button } from "../Components/Button";

import { useHistory } from "react-router-dom";

import { Layout, Menu, Input, Select } from "antd";

import { useAppDispatch } from "../redux/hooks";
import { descricaoHandler } from "../redux/criarChamado";
import { useState } from "react";

import "../styles/newCall.css";

export function Newcall() {
  //antd
  const { Header, Content, Sider } = Layout;
  const history = useHistory();
  const { TextArea } = Input;
  const { Option } = Select;

  //redux

  const dispatch = useAppDispatch();

  //router
  function navigateToCalls() {
    history.push("/calls");
  }

  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState();


  //submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(selectValue == null || value === ""){
      alert("faltando dados");
    }
    else{
    dispatch(
      descricaoHandler({
        Id: 1,
        Descricao: value,
        Idprojeto: selectValue,
      })
    );
  }
  };

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
        <Layout style={{ padding: "24px 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <h1 className = "titulo">NOVO CHAMADO</h1>
            <div id = "forme">
              <form onSubmit={handleSubmit}>
                <label>Projeto:</label>
                  <Select
                    defaultValue={"Escolha um projeto"}
                    onSelect={(value, e) => setSelectValue(e.value)}
                  >
                    <Option value={0}>ARK</Option>
                    <Option value={1}>XENON</Option>
                    <Option value={2}>KINESIS</Option>
                  </Select>
                <label>Descrição:</label>
                  <TextArea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={4}
                    cols = {100}
                  />
                <div id = "botoes">
                <Button type="submit"> Criar chamado</Button>
                <Button onClick={navigateToCalls}>Voltar</Button>
                </div>
              </form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
