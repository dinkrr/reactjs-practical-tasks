import React from 'react';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.searchQuery = props.searchQuery;
        this.onSearch = props.onSearch.bind(this);
    }

    render() {
        return React.createElement('div', null,
            React.createElement('input', { placeholder: 'Type to Search' }, null),
            React.createElement('button', { onClick: this.onSearch }, 'Search')
        );
    }
}

