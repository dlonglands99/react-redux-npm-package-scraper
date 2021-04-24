import ReactDOM from 'react-dom';
import App from './components/App';

const Application = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Application />, document.querySelector('#root'));
