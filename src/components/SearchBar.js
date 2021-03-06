import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};
    onInputChange = function(event) {
        this.setState({term: event.target.value});
    };

    onFormSubmit = function(event) {
        event.preventDefault();

        //call back from parent component is called here
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>What do you want to watch?</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;