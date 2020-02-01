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
import Button from './button';
import * as SharedStyle from '../../shared-style';
const STYLE = {
    borderColor: "#415375",
    backgroundColor: "#415375",
    color: SharedStyle.COLORS.white
};
const STYLE_HOVER = {
    borderColor: "#1f3149",
    backgroundColor: "#1f3149",
    color: SharedStyle.COLORS.white
};
export default function FormSubmitButton(_a) {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return <Button type="submit" style={STYLE} styleHover={STYLE_HOVER} {...rest}>{children}</Button>;
}
