import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // commented out, otherwise the drag and drop does not work.
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);