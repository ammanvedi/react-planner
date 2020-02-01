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
import ItemAttributesEditor from './item-attributes-editor';
import LineAttributesEditor from './line-attributes-editor';
import HoleAttributesEditor from './hole-attributes-editor';
export default function AttributesEditor(_a) {
    var { element, onUpdate, onValid, attributeFormData, state } = _a, rest = __rest(_a, ["element", "onUpdate", "onValid", "attributeFormData", "state"]);
    switch (element.prototype) {
        case 'items':
            return <ItemAttributesEditor element={element} onUpdate={onUpdate} onValid={onValid} attributeFormData={attributeFormData} state={state} {...rest}/>;
        case 'lines':
            return <LineAttributesEditor element={element} onUpdate={onUpdate} onValid={onValid} attributeFormData={attributeFormData} state={state} {...rest}/>;
        case 'holes':
            return <HoleAttributesEditor element={element} onUpdate={onUpdate} onValid={onValid} attributeFormData={attributeFormData} state={state} {...rest}/>;
        case 'areas':
            return null;
    }
    return null;
}
AttributesEditor.propTypes = {
    element: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onValid: PropTypes.func,
    attributeFormData: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
};
