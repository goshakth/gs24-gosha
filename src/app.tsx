import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const AppRouter = () => {
  return (
    <Router basename="/gs24-gosha">
      <Switch>
        <Route exact path="/" component={Home} /> {/* 기본 경로로 Home 페이지 설정 */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
