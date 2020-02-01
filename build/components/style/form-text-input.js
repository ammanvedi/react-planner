var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from 'react';
import * as SharedStyle from '../../shared-style';
const STYLE_INPUT = {
    display: 'block',
    width: '100%',
    padding: '0 2px',
    fontSize: '13px',
    lineHeight: '1.25',
    color: SharedStyle.PRIMARY_COLOR.input,
    backgroundColor: SharedStyle.COLORS.white,
    backgroundImage: 'none',
    border: '1px solid rgba(0,0,0,.15)',
    outline: 'none',
    height: '30px',
};
export default class FormTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { focus: false };
    }
    render() {
        let _a = this.props, { style } = _a, rest = __rest(_a, ["style"]);
        let textInputStyle = Object.assign(Object.assign({}, STYLE_INPUT), style);
        if (this.state.focus)
            textInputStyle.border = `1px solid ${SharedStyle.SECONDARY_COLOR.main}`;
        return <input onFocus={e => this.setState({ focus: true })} onBlur={e => this.setState({ focus: false })} style={textInputStyle} type="text" {...rest}/>;
    }
}
FormTextInput.defaultProps = {
    style: {}
};
