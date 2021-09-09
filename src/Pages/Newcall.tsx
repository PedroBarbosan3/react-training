import { Button } from "../Components/Button";
import { useHistory } from "react-router-dom";

export function Newcall() {
  const history = useHistory();
  function navigateToCalls() {
    history.push("/calls");
  }
  return (
    <div>
      <Button onClick={navigateToCalls}>Voltar</Button>
      <Button>Criar chamado</Button>
    </div>
  );s
}
