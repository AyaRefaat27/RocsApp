import { Provider } from "react-redux";
import Routers from "./Router/routers";
import store from "./Admin Dashboard/Chat/Functions/store.js";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Routers />
      </div>
    </Provider>
  );
}

export default App;
