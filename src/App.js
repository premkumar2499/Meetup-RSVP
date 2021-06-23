import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RegisterScreen from './screens/Register/RegisterScreen';
function App() {
  return (
    <>
      <BrowserRouter>
            <Header />
            <main>
                <Switch>
                  <Route exact path="/" component={HomeScreen} />
                  <Route path="/register" component={RegisterScreen} />
                  <Route path="/search-users" component={HomeScreen} />
                  <Route path="/view-reports" component={HomeScreen} />
              </Switch>
            </main>
      </BrowserRouter>
    </>
  );
}

export default App;
