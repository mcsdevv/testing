import * as React from 'react';
import Text from './components/Text';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Text
          text={`To get started, edit <code>src/App.tsx</code> and save to reload.`}
        />
      </div>
    );
  }
}

export default App;
