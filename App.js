import Navbar from "./components/Navbar";
import './App.css';
import SearchForm from './components/form.js'


/* Update document title. */
function componentDidMount() {
  document.title = "Flight Data";
}


/* Call function to rename document title. */
componentDidMount();


function App() {
  return (
    <div className="App">

      {/* Call Navbar function from Navbar.js to display the functional navigation bar. */}
      <Navbar />
      <header className="Data-section">
        <h1 id="welcome-msg">Welcome to the Flight Data Application</h1>

        {/* Place containter from form.js. 
        This container displays querys results from the for-loop that iterates through the JSON. */}
        <div id="container">

          {/* Display the React-component, searchbar, which will allow user to input query. */}
          <SearchForm></SearchForm>

        </div>
      </header>
    </div>
  );
}


export default App;
