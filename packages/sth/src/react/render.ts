interface Element {
  type: 'TEXT_ELEMENT' | keyof HTMLElementTagNameMap;
  props?: any;
  children?: any[];
}

export function render(element: Element, parentNode) {
  const { type, props, children = [] } = element;

  const node = type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(type);

  for (const key in props) {
    node[key] = props[key];
  }

  children?.forEach((child) => render(child, node));

  parentNode.appendChild(node);
}
