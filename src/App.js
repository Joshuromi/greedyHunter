import { Switch, Route } from "react-router-dom";
import GameStart from "./pages/game-start/gameStart";
import GamePlay from "./pages/game-play/gamePlay";
import "./App.scss";

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={GameStart} />
      <Route path="/gameplay" component={GamePlay} />
    </Switch>
  </div>
)

export default App;
