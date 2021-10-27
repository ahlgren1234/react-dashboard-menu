import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Click 'Content' for submenu. </p>
    </div>
  );
};

const Content = () => {
  return <h1>Content</h1>;
};

const Courses = () => {
  return <h1>Content/Courses</h1>;
};

const Videos = () => {
  return <h1>Content/Videos</h1>;
};

const Design = () => {
  return <h1>Design</h1>;
};

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/content"}>
              <Content />
            </Route>
            <Route path={"/content/courses"}>
              <Courses />
            </Route>
            <Route path={"/content/videos"}>
              <Videos />
            </Route>
            <Route path={"/design"}>
              <Design />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
