import React, { Component } from 'react';
import TextName from './TextName';

class Forms extends Component {
    constructor() {
        super()

        this.state = {
            textName : '',
        }
    }
    handleChange = (event) => {
        this.setState({
            textName : event.target.value,
        })
    }
    render() {
      console.log(this.state.textName);  
      return(
      <form>
          <fieldset>
            <TextName
              value={this.state.textName}
              handleChange={ this.handleChange }
            />
          </fieldset>
          <h1>Forms esta funcinando</h1>
      </form>  
      )
    }
}

export default Forms;
