import Loadable from 'react-loadable';

const Intro = Loadable({
  loader: () => import('./Welcome'),
  loading: () => null
});

export default Intro;
