import React from 'react';
import PropTypes from 'prop-types';
import { length } from 'stringz';

export default class CharacterCounter extends React.PureComponent {

  static propTypes = {
    text: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
  };

  checkRemainingText (diff) {
    if (diff < 0) {
      return <span className='character-counter character-counter--over'>{diff}</span>;
    }

    let disp;
    if (diff > 1024) {
      let i = (diff / 1024).toFixed(1);
      if (i.at(-1) == "0") {
        let dot = i.indexOf('.');
        disp = i.substr(0, dot);
      } else {
        disp = i;
      }

      disp += "K";
    } else {
      disp = diff;
    }

    return <span className='character-counter'>{disp}</span>;
  }

  render () {
    const diff = this.props.max - length(this.props.text);
    return this.checkRemainingText(diff);
  }

}
