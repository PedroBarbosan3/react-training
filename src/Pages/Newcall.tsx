import { Button } from "../Components/Button";

import { useHistory } from "react-router-dom";

import { Layout, Menu, Input, Select } from "antd";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { descricaoHandler } from "../redux/criarChamado";

export function Newcall() {
  
  //antd
  const { Header, Content, Sider } = Layout;
  const history = useHistory();
  const { TextArea } = Input;
  const { Option } = Select;

  //redux
  const descricao = useAppSelector((state) => state.criarChamado.Descricao);
  const dispatch = useAppDispatch();

  //router
  function navigateToCalls() {
    history.push("/calls");
  }

  //submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
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
                <Select defaultValue="">
                  <Option value="Projeto 1">Projeto 1</Option>
                  <Option value="Projeto 2">Projeto 2</Option>
                </Select>
              </label>
              <label>
                Status:
                <Select defaultValue="">
                  <Option value="Status 1">Status 1</Option>
                  <Option value="Status 2">Status 2</Option>
                </Select>
              </label>
              <label>
                Descrição:
                <TextArea
                  onChange={(e) => dispatch(descricaoHandler(e.target.value))}
                  rows={4}
                />
              </label>
              <Button type="submit"> Criar chamado:</Button>
            </form>
            <div>
              <Button onClick={navigateToCalls}>Voltar</Button>
            </div>
            <div>
              <p>{descricao}</p>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
