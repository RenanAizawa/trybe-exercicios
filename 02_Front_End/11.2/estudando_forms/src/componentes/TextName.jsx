import React, { Component } from 'react';

class TextName extends Component {
    render() {
        const { handleChange, value } = this.props;
        return(
            <label htmlFor='text-name'>
                Nome:
                <input
                  type='text'
                  id='text-name'
                  name='textName' 
                  required
                  value={ value } 
                  onChange={handleChange}
                />
            </label>
        )
    }
}

export default TextName;
