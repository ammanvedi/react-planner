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
import FormTextInput from './form-text-input';
const STYLE = {
    padding: 0,
    border: 0,
};
const EREG_NUMBER = /^.*$/;
export default function FormColorInput(_a) {
    var { onChange } = _a, rest = __rest(_a, ["onChange"]);
    let onChangeCustom = event => {
        let value = event.target.value;
        if (EREG_NUMBER.test(value)) {
            onChange(event);
        }
    };
    return <FormTextInput type="color" style={STYLE} onChange={onChangeCustom} autoComplete="off" {...rest}/>;
}
