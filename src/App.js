import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Location from "./pages/Location";
import FoodInfo from "./pages/FoodInfo";
import Conduct from "./pages/Conduct.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/food-info" component={FoodInfo} />
        <Route exact path="/conduct" component={Conduct} />
      </Switch>
    </Router>
  );
};

export default App;
