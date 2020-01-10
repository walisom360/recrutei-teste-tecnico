import React, { Fragment } from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store/createStore";
import GlobalStyle from "./styles/global";
import ReduxToastr from "react-redux-toastr";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Routes />
        <ReduxToastr />
      </Fragment>
    </Provider>
  );
}

export default App;
