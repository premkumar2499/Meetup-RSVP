import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RegisterScreen from './screens/Register/RegisterScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import ViewDetailsScreen from './screens/ViewDetailsScreen/ViewDetailsScreen';
import ReportScreen from './screens/ReportScreen/ReportScreen';
function App() {
  return (
    <>
      <BrowserRouter>
              <Header />
              <main>
                  <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/search-users" component={SearchScreen} />
                    <Route path="/view-reports" component={ReportScreen} />
                    <Route path="/view-details/:id" component={ViewDetailsScreen} />
                </Switch>
              </main>
      </BrowserRouter>

    </>
  );
}

export default App;
