---
to: src/components/<%= name %>/index.module.css
---
<% const comp = h.inflection.undasherize(name) -%>
.<%= comp %>{
    display: block;
}



