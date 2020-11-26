import React from "react";
import { SearchBar } from 'react-native-elements';

updateSearch = (search) => {
  this.setState({ search });
};

class App extends React.Component {
  state = {
    pesquisar: '',
  }

  render() {
    const { search } = this.state;
    return (
        <SearchBar
          inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 30, padding: 10, margin: 15, height: 50, justifyContent: 'center', borderColor: '#E0E0E0', }}
          platform="android"
          placeholder="Buscar"
          onChangeText={this.updateSearch}
          value={search}
        />
    );
  }
}

export default App;