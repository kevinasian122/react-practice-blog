

import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50; 

  return (
    <Router>
    <div className="App"> 
      <Navbar /> {/* navbar will always show*/}
 
      <div className="content"> 
        <Switch> {/* inside switch, you put different routes, path is just the text after url, so home is '/' */}
          <Route exact path ="/"> {/*go to home page when the "/" path is accessed, needs exact or else matches weird path*/}
            <Home />
          </Route>
          <Route exact path ="/create"> 
            <Create />
          </Route>
          <Route exact path ="/blogs/:id"> 
            <BlogDetails />
          </Route>
          <Route path = "*"> {/* catch any other routes */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
