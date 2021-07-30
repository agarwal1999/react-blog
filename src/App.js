import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
        {user ? <Home/> : <Login/>}
        </Route>
        <Route exact path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route exact path="/write">
          {user ? <Write/> : <Register/>}
        </Route>
        <Route exact path="/settings">
        {user ? <Setting/> : <Register/>}
        </Route>
        <Route exact path="/post/:postId" component={Single} />
      </Switch>
    </Router>
  );
}

export default App;
