import { Home } from "./Pages/Home";
import { Calls } from "./Pages/Calls";
import { Newcall } from "./Pages/Newcall";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/calls" exact component={Calls} />
      <Route path="/call/new" exact component={Newcall} />
    </BrowserRouter>
  );
}

export default App;
