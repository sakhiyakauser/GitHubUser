
import './App.css';
import Users from'./Users';
import GitHubIcon from '@material-ui/icons/GitHub';
function App() {
  return (
    <div className="App">
      <div className="header">
     
        <GitHubIcon  className="icon"/>
        <h1 className="h1g">Github Users</h1>
     
       </div>
      
      
      <Users className="appusers"/> 
    </div>
  );
}

export default App;
