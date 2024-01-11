import { useState } from 'react'
import Home from './components/Home'

function App() {
    const [count, setCount] = useState(0);
    // function refreshPage() {
    //   window.location.reload(false);
    // }
  
    return (
        <div>
          <Home />
          {/* <button onClick={refreshPage}>Click ME!</button> */}
         
        </div>
    )
  }
  
  export default App
  