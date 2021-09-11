import { Home } from "./Pages/Home";
import { Calls } from "./Pages/Calls";
import { Newcall } from "./Pages/Newcall";
import { Route, BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/calls" exact component={Calls} />
        <Route path="/call/new" exact component={Newcall} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
