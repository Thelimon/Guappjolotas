import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "../Components/Menu.jsx";
import Detail from "../Components/Detail.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Menu} />
          {/* <Route path="/:tipo/:productId" component={(props) => <Detail{...props} />} /> */}
          <Route path="/:tipo/:productId" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
