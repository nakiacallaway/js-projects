//import logo from './logo.svg';
import './App.css';
import HeadingComponent from './Heading'; //calls the function from another file.
import SubHeadingComponent from './SubHeading';
import CarComponent from './CarComponent';
import SongComponent from './SongComponent';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn To React
        </a>
      </header>
    </div>
  );
} */


const App = () => {
  let headingText = 'String in the variable on the index page';
  let numVal = 270;
  let car = {
    make: 'Ford',
    model: 'Transit', 
    year: 2016,
    type: 'XLT',
  };
  // const addTwo = (num1, num2) => {
  //   return num1 + num2;
  // };
  let faveSong = {
    artist: 'Caravan Palace',
    title: 'Bambous', 
    genre: 'Electro-swing',
    released: 'October 20, 2008',
    link: 'https://www.youtube.com/watch?v=YHL89BcnTl8',
  };

  return (
  <div>
    <HeadingComponent h1Text={headingText} extraText={"Added text to log as a string"}/> 
    <SubHeadingComponent h2Num={numVal}/>  
    {/* <h3>What is the sum of 23 and 34? {addTwo(23, 34)}</h3>  */}
    <CarComponent vehicle={car}/>
    <SongComponent music={faveSong}/>

  </div>)
};

export default App;

//props with arrays npm method.... 

