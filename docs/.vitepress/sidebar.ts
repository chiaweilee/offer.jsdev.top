import guide from '../guide/_sidebar';
import basic from '../basic/_sidebar';
import algorithm from '../algorithm/_sidebar';
import framework from '../framework/_sidebar';

function sidebar() {
  return {
    '/basic/': basic,
    '/guide/': guide,
    '/algorithm/': algorithm,
    '/framework/': framework,
  };
}

export default sidebar;
