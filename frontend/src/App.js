import React from 'react';

import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Bookmarks from "./components/Bookmarks";
import Details from "./components/Details";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div id="background">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

// class App extends React.Component {

//   state = {details: [], }

//   componentDidMount() {
//     let data;
//     axios.get('http://localhost:8000/welcome')
//     .then(res => {
//       data = res.data;
//       this.setState({
//         details: data
//       });
//     })
//     .catch(err => { })
//   }

//   render() {
//     return (
//       <div>
//         <header>Data Generated From Django</header>
//       <hr></hr>
//       {this.state.details.map((output, id) => (
//           <div key={id}>
//             <div>
//               <h2>{output.make}</h2>
//               <h3>{output.model}</h3>
//             </div>
            
//           </div>
//       ))}
//       </div>
      
//     )
//   }

// }

export default App;
