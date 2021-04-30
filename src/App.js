import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Sidebar />
        <Video />
      </Provider>
    </div>
  );
}

export default App;
