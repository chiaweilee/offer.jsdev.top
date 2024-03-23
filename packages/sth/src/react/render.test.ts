import { JSDOM } from 'jsdom';
import { createElement } from './element';
import { render } from './render';

const dom = new JSDOM('<html><body></body></html>');
const {
  window: { document },
} = dom;
// @ts-ignore
global.document = document;

const App = (props) => {
  const { name } = props;
  return createElement(
    'div',
    { style: 'background: salmon; padding: 8px; text-align: center;' },
    createElement('h1', {}, 'Hello, ' + name),
    createElement('div', { style: 'color: #fff;' }, 'by React')
  );
};

test('render', () => {
  render(App({ name: 'world' }), document.body);
  expect(document.body.innerHTML).toBe(
    '<div style="background: salmon; padding: 8px; text-align: center;"><h1>Hello, world</h1><div style="color: rgb(255, 255, 255);">by React</div></div>'
  );
});
