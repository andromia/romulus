import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import './App.global.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TitleBar from './components/TitleBar';
import ClickableUploadIcon from './components/UploadIcon';
import ClickableFileRow from './components/Files';
import { FileObjectType } from './components/Types';

/* Home Page
 * The home page will have a centered upload icon if
 * there are no scripts found. Users can drag and drop
 * .py files or click the icon to select it manually.
 * if there are scripts found the page will load with
 * a board of them with buttons Run, Schedule, and Delete
 * to the right of the filenames. Users can click on the
 * row or filename to navigate to a setup page.
 */
const Home = () => {
  const [files, updateFiles] = useState<Array<FileObjectType>>([]);

  return (
    <div className="home-container">
      <TitleBar />
      <div className="center-div">
        <Container>
          <Container>
            <Row>
              <Col>
                <ClickableUploadIcon
                  height="70px"
                  width="70px"
                  files={files}
                  updateFiles={updateFiles}
                />
              </Col>
            </Row>
          </Container>
          {files.length > 0 && (
            <Container id="files-container">
              <Row>
                <Col>
                  {files.map((file) => (
                    <ClickableFileRow
                      key={file.preview}
                      name={file.name}
                      height="40px"
                      width="40px"
                    />
                  ))}
                </Col>
              </Row>
            </Container>
          )}
        </Container>
      </div>
    </div>
  );
};

/* FileProfile Page
 * The set up page will have a drop down preview of the
 * script contents with it minimized (partial) by default.
 * Below there will be data about the script and its setup
 * such as its filename, python interpreter, schedule data,
 * along with run history and statistics. Statistics will
 * be visualized with d3.js.
 */
const FileProfile = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      <TitleBar />
      <Container fluid className="home-button-container">
        <Row className="home-button-row">
          <Col md={12} className="text-right">
            <Button className="home-button" onClick={() => history.push('/')}>
              Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/File" component={FileProfile} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
