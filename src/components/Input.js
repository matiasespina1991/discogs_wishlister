import React from 'react';
import '../App.css';

const Input = () => {
    return (
        <div className="input-global-container">
            <form className="input-container" action="">
                <label for="inputLink">Add a release to your Wishlist</label>

                <input className="input" type="text" id="inputLink" name="inputLink" placeholder="https://www.discogs.com/release/6261872" />
            </form>
        </div>
    )
}

export default Input;