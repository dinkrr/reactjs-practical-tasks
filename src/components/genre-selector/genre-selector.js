import './genre-selector.css';
import React from 'react';
import clsx from 'clsx';

class GenreSelector extends React.Component {
  genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];

  constructor() {
    super();
    this.state = { selected: 'all' };
  }

  selectGenre(genre) {
    this.setState({ selected: genre });
  }

  render() {
    return (
      <ul>
        {this.genres.map((genre) => {

          return (
            <li
              key={genre}
              onClick={() => this.selectGenre(genre)}
              className={clsx({ 'selected': this.state.selected === genre })}
            >
              {genre}
            </li>
          );
        })
        }
      </ul >
    );
  }
}

export default GenreSelector;
