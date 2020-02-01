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
import ReactRange from '@mapbox/react-range';
import FormTextInput from './form-text-input';
const sliderContainerStyle = { display: 'inline-block', width: '80%', marginRight: '5%' };
const sliderStyle = { display: 'block', width: '100%', height: '30px' };
const textContainerStyle = { display: 'inline-block', width: '15%', float: 'right' };
const textStyle = { height: '34px', textAlign: 'center' };
export default function FormNumberInput(_a) {
    var { value, onChange } = _a, rest = __rest(_a, ["value", "onChange"]);
    return (<div>
      <div style={sliderContainerStyle}>
        <ReactRange type='range' style={sliderStyle} onChange={onChange} value={value} {...rest}/>
      </div>

      <div style={textContainerStyle}>
        <FormTextInput value={value} onChange={onChange} style={textStyle}/>
      </div>
    </div>);
}
