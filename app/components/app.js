import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import AddCharacter from './AddCharacter';


class App extends React.Component {
    render () {
        return (
          <div>
            <Navbar history={this.props.history} />
            <AddCharacter />
            {this.props.children}   
            <Footer />
          </div>  
            
        );
    }
}

export default App;