import { useHistory } from "react-router-dom";
import { Button } from "../Components/Button";

import { Layout } from "antd";
import "../styles/home.css";

export function Home() {
  const { Content } = Layout;

  const history = useHistory();
  function navigateToCalls() {
    history.push("/Calls");
  }
  return (
    <Layout>
      <Layout>
        <Content>
          <div id ="Marca">
          <strong className="logo">T4i</strong>
          </div>
          <div id= "separator"></div>
          <div id="main">
            <div>
              <h1 className = "Acesso">Acesso ao portal</h1>
            </div>
            <div>
              <form>
                <label>Usuário:</label>
                  <input className = "user" type="text" name="Usuário" id="Usuário" />
                <label>Senha:</label>
                  <input className = "password" type="text" name="Senha" id="Senha" />
                <Button className = "entrar" onClick={navigateToCalls}>Entrar</Button>
              </form>
            </div>
            <div id = "passForget">Esqueci minha senha</div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
