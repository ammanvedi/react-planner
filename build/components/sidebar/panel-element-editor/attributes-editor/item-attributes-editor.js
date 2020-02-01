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
import FormNumberInput from '../../../style/form-number-input';
import FormTextInput from '../../../style/form-text-input';
const tableStyle = { width: '100%' };
const firstTdStyle = { width: '6em' };
const inputStyle = { textAlign: 'left' };
export default function ItemAttributesEditor(_a, { translator }) {
    var { element, onUpdate, attributeFormData, state } = _a, rest = __rest(_a, ["element", "onUpdate", "attributeFormData", "state"]);
    let name = attributeFormData.has('name') ? attributeFormData.get('name') : element.name;
    let renderedX = attributeFormData.has('x') ? attributeFormData.get('x') : element.x;
    let renderedY = attributeFormData.has('y') ? attributeFormData.get('y') : element.y;
    let renderedR = attributeFormData.has('rotation') ? attributeFormData.get('rotation') : element.rotation;
    return (<table style={tableStyle}>
      <tbody>
        <tr>
          <td style={firstTdStyle}>{translator.t('Name')}</td>
          <td>
            <FormTextInput value={name} onChange={event => onUpdate('name', event.target.value)} style={inputStyle}/>
          </td>
        </tr>
        <tr>
          <td style={firstTdStyle}>X</td>
          <td>
            <FormNumberInput value={renderedX} onChange={event => onUpdate('x', event.target.value)} style={inputStyle} state={state} precision={2} {...rest}/>
          </td>
        </tr>
        <tr>
          <td style={firstTdStyle}>Y</td>
          <td>
            <FormNumberInput value={renderedY} onChange={event => onUpdate('y', event.target.value)} style={inputStyle} state={state} precision={2} {...rest}/>
          </td>
        </tr>
        <tr>
          <td style={firstTdStyle}>{translator.t('Rotation')}</td>
          <td>
            <FormNumberInput value={renderedR} onChange={event => onUpdate('rotation', event.target.value)} style={inputStyle} state={state} precision={2} {...rest}/>
          </td>
        </tr>
      </tbody>
    </table>);
}
ItemAttributesEditor.propTypes = {
    element: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    attributeFormData: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
};
ItemAttributesEditor.contextTypes = {
    translator: PropTypes.object.isRequired,
};
