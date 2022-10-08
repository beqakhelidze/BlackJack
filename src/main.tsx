import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import ContextProvider from "./Context";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)
