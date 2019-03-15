---
to: src/components/<%= name %>/index.js
---
<% const comp = h.inflection.undasherize(name) -%>
// @flow
import React, { Component } from 'react'
import styles from './index.module.css'

class <%= comp %> extends Component {
    render() {
        return (
            <div>
                <%= name %>
            </div>
        );
    }
};

export default <%= comp %>


