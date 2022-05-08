import ReactDOM from 'react-dom';
import App from './App';
import UserContext from './UserContext';

ReactDOM.render(
  <UserContext>
    <App />
  </UserContext>,
  document.getElementById('root')
);
