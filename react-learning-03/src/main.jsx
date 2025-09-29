import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <>
//     <h1>My App</h1>
//     </>
//   )
// }



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp /> || MyApp() */}
  </StrictMode>,
)
