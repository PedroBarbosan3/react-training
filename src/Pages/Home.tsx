import { useHistory } from "react-router-dom";
import { Button } from "../Components/Button";

import { Layout } from "antd";
import "../styles/home.css";

export function Home() {
  const { Sider, Content } = Layout;

  const history = useHistory();
  function navigateToCalls() {
    history.push("/Calls");
  }
  return (
    <Layout>
      <Layout>
        <Sider>
          <strong className="strong">t4i</strong>
        </Sider>
        <Content>
          <div className="main">
            <div>
              <h1>Acesso ao portal</h1>
            </div>
            <div>
              <form>
                <label>
                  Usuário:
                  <input type="text" name="Usuário" id="Usuário" />
                </label>
                <label>
                  Senha:
                  <input type="text" name="Senha" id="Senha" />
                </label>
                <Button onClick={navigateToCalls}>Entrar</Button>
              </form>
            </div>
            <div>Esqueci minha senha</div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
