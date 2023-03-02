import guide from '../guide/_sidebar';
import basic from '../basic/_sidebar';
import algorithm from '../algorithm/_sidebar';
import framework from '../framework/_sidebar';
import project from '../project/_sidebar';
import speciality from '../speciality/_sidebar';

function sidebar() {
  return {
    '/basic/': basic,
    '/guide/': guide,
    '/algorithm/': algorithm,
    '/framework/': framework,
    '/project/': project,
    '/speciality/': speciality,
  };
}

export default sidebar;
