import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import ParentComponent from './Components/Props_parent';
import About from './Components/about';

function App() {
  return (
    <>
<Navbar title="WordCounter"/>
<div className='container my-3'> 
<TextForm  heading="Heading for Analysis"/>
{/* <About /> */}
</div>


</>
  );
}

export default App;


// function App()
//{
 
//     let data = shree ;
//    function apple(){
//     alert ('function Call')
//    }
//    return(
  
//     <div classNameName='App'>
//       <h1>{data}</h1>
//       <button onClick={apple}> click me</button>
//     </div>
//    )
// }

// export default App;