import React from 'react';
import '../App.css';


class  Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    myChangeHandler = (event) => {
        console.log("INPUT:::", event.target.value)
        this.setState({
            input: event.target.value
        })
      }
    
    render(){
        const {handleSubmit} = this.props;
        const {input} = this.state;
        console.log(input)
        return (
            <div className="input-global-container">
                    <label>Add a release to your Wishlist</label>
    
                    <input className="input" type="text" id="inputLink" name="inputLink" onChange={this.myChangeHandler} placeholder="https://www.discogs.com/release/6261872" />
                    <button onClick={() =>handleSubmit(input)}>ADD</button>
            </div>
        )
    }
}

export default Input;