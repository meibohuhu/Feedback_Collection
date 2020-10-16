import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';     //router
import { connect } from 'react-redux';
import * as actions from '../actions';
//dummy components
// const Header = () => <h2>Header</h2>;
// const Landing =  () => <h2>Landing</h2>;
// const Dashboard = () => <h2>Dashboard</h2>;
//const SurveyNew = () => <h2>SurveyNew</h2>;
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component{

  //lifecycle method:
  componentDidMount() {    //fetch the current user
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
// const App = () => {
//   return (
//     <div className="container">
//       <BrowserRouter>
//         <div>
//           <Header />
//           <Route exact path="/" component={Landing} />
//           <Route exact path="/surveys" component={Dashboard} />
//           <Route path="/surveys/new" component={SurveyNew} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

export default connect(null, actions)(App);
