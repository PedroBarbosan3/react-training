import { Button } from "../Components/Button";

import { useHistory } from "react-router-dom";

import { Layout, Menu, Input, Select } from "antd";

import { useAppDispatch } from "../redux/hooks";
import { descricaoHandler } from "../redux/criarChamado";
import { useState } from "react";

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
  const [selectValue, setSelectValue] = useState("");

  const StatusChamado = ["ARK", "KINESIS", "XENON"];

  //submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      descricaoHandler({
        Descricao: value,
        StatusChamado: selectValue,
      })
    );
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
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <form onSubmit={handleSubmit}>
              <label>
                Projeto:
                <Select onSelect={(value, e) => setSelectValue(e.value)}>
                  {StatusChamado.map((item) => (
                    <Option value={item}>{item}</Option>
                  ))}
                </Select>
              </label>
              <label>
                Descrição:
                <TextArea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  rows={4}
                />
              </label>
              <Button type="submit"> Criar chamado:</Button>
            </form>
            <div>
              <Button onClick={navigateToCalls}>Voltar</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
