import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Before from "./Page/Before";
import Home from "./Page/Home";


const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/before" >
                <Before />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;