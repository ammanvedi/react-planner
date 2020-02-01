import React from 'react';
import PropTypes from 'prop-types';
const STYLE = {
    padding: '0 20px',
    overflowY: 'auto'
};
export default function ContentContainer({ children, width, height, style = {} }) {
    return <div style={Object.assign(Object.assign({ width, height }, STYLE), style)} onWheel={event => event.stopPropagation()}>{children}</div>;
}
ContentContainer.propsType = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object
};
