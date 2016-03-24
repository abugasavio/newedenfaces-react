import React from 'react';
import AddCharacterStore from '../stores/AddCharacterStore';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddCharacterStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    
}