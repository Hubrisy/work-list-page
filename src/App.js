import './App.css';
import MainContainer from './components/joblist/MainContainer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <MainContainer />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
