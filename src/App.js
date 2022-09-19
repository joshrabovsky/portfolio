import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';

import RBC from './pages/descriptions/RBC'
import CCL from "./pages/descriptions/CCL";
import WFN from "./pages/descriptions/WFN";
import IRC from "./pages/descriptions/IRC";
import WAI from "./pages/descriptions/WAI";
import WTH from "./pages/descriptions/WTH";
import iPublisher from './pages/descriptions/iPublisher';
import linkUp from "./pages/descriptions/linkUp";
import idealWay from './pages/descriptions/idealWay';
import Robinhood from './pages/descriptions/Robinhood';
import Datasea from './pages/descriptions/Datasea';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutMe" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/Robinhood" component={Robinhood} />
          <Route exact path="/Datasea" component={Datasea} />
          <Route exact path="/RBC" component={RBC} />
          <Route exact path="/CCL" component={CCL} />
          <Route exact path="/WFN" component={WFN} />
          <Route exact path="/IRC" component={IRC} />
          <Route exact path="/WAI" component={WAI} />
          <Route exact path="/WTH" component={WTH} />
          <Route exact path="/iPublisher" component={iPublisher} />
          <Route exact path="/linkUp" component={linkUp} />
          <Route exact path="/idealWay" component={idealWay} />
      </Switch>
    </Router>
  );
}

export default App;
