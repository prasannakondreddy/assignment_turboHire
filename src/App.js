import './App.css';
import { CssBaseline, TextField, Container, Paper, Box } from "@material-ui/core";

import TopBar from './TopBar';

import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import SideBar from './SideBar';
import FormContainer from './FormContainer';
import Page2 from './page2';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DetailsCollection from './pages/DetailsCollection';
import DocumentCollection from './pages/DocumentCollection';
import SOP from './pages/SOP';
import InterviewAvailability from './pages/InterviewAvailability';
import BottomnavBar from './bottomnavbar';

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <TopBar />
        <div className='container-2'>


          <div className="side-bar">
            <ul>

              <Card style={{ width: '20rem' }} className="side-bar-comp">
                <div className="img-holder"></div>

                <Card.Body className="card-body">
                  <Card.Title className="card-title">New Form</Card.Title>
                  <Card.Text className="card-text">
                    Start creating a new form with the wide options of fields available
                  </Card.Text>

                </Card.Body>

              </Card>

            </ul>
            <div>Explore the following templates:</div>
            <NavLink exact to="/detailscollection" style={{ textDecoration: 'none' }}> <ul>

              <Card style={{ width: '20rem' }} className="side-bar-comp">
                <div className="img-holder"></div>

                <Card.Body className="card-body">
                  <Card.Title className="card-title">Details Collection</Card.Title>
                  <Card.Text className="card-text">
                    Collect information from Candidates on their education,work experience,contact no,etc
                  </Card.Text>

                </Card.Body>

              </Card>


            </ul></NavLink>
            <NavLink exact to="/documentcollection" style={{ textDecoration: 'none' }}>
              <ul>

                <Card style={{ width: '20rem' }} className="side-bar-comp">
                  <div className="img-holder"></div>

                  <Card.Body className="card-body">
                    <Card.Title className="card-title">Document Collection</Card.Title>
                    <Card.Text className="card-text">
                      Save time and efforts.Explore this template to find a set of questions required for document collection
                    </Card.Text>

                  </Card.Body>

                </Card>

              </ul></NavLink>
            <NavLink exact to="/sop" style={{ textDecoration: 'none' }}>
              <ul>

                <Card style={{ width: '20rem' }} className="side-bar-comp">
                  <div className="img-holder"></div>

                  <Card.Body className="card-body">
                    <Card.Title className="card-title">Statement of Purpose</Card.Title>
                    <Card.Text className="card-text">
                      Start creating a new form with the wide options of fields available
                    </Card.Text>

                  </Card.Body>

                </Card>

              </ul></NavLink>
            <NavLink exact to="/interviewavailability" style={{ textDecoration: 'none' }}>
              <ul>

                <Card style={{ width: '20rem' }} className="side-bar-comp">
                  <div className="img-holder"></div>

                  <Card.Body className="card-body">
                    <Card.Title className="card-title">Interview Availabality</Card.Title>
                    <Card.Text className="card-text">
                      Start creating a new form with the wide options of fields available
                    </Card.Text>

                  </Card.Body>

                </Card>

              </ul>
            </NavLink>
          </div>

        </div>
        
        {/* <BottomnavBar/> */}
       
        <Switch>
          <Route exact path="/detailscollection" component={DetailsCollection} />
          <Route exact path="/documentcollection" component={DocumentCollection} />
          <Route exact path="/interviewavailability" component={InterviewAvailability} />
          <Route exact path="/sop" component={SOP} />
        </Switch>
      </Router>
    </>
  );
}

export default App;