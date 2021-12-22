import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import BotPic from './image/botpic.jpg'
import Body from './Components/Body/Body'
import Feedback from './Components/Feedback/feedback'
const App=()=> {
  return (
    
    <div className="App">
     <header className="header"><img src={BotPic}/><h1>Serenity</h1></header> 
     <Router>
        <Routes>
     <Route path='/' exact className="mainBody" element={<Body/>}/>
     <Route path='/feedback' element={<Feedback/>}  />
      </Routes>
     </Router>
     <footer className="footer">this is the footer of the page</footer>
    </div>
    
  ); 
}

export default App;
