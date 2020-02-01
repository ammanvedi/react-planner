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
import React from 'react';
import PropTypes from 'prop-types';
import * as SharedStyle from '../../shared-style';
const STYLE = {
    color: SharedStyle.PRIMARY_COLOR.alt,
    fontWeight: 300,
};
export default function ContentTitle(_a) {
    var { children, style = {} } = _a, rest = __rest(_a, ["children", "style"]);
    return <h1 style={Object.assign(Object.assign({}, STYLE), style)} {...rest}>{children}</h1>;
}
ContentTitle.propsType = {
    style: PropTypes.object
};
