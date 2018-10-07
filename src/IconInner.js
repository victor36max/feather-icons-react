import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
// for now this icons json is generated via the build script from latest feather
// TODO: automatically generate this JSON via this repo's build script
import icons from './icons.json';

class IconInner extends PureComponent {

  render() {
    // <g> is just a wrapper it does nothing except let me use valid JSX markup
    // icons are based on generated icons.json from feather lib
    const { icon } = this.props;
    const iconMarkup = icons[icon];

    return (iconMarkup && (
      <g>
        { ReactHtmlParser(iconMarkup) }
      </g>
    ));
  }
}

IconInner.propTypes = {
  icon: PropTypes.string.isRequired
};

export default IconInner;
