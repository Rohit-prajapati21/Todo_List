import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import todoListStore from './store/store.js'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={todoListStore}>
   <App />

   </Provider>
    
  
  </StrictMode>,
)
