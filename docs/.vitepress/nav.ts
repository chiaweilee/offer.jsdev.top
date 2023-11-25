import pkg from '../../packages/sth/package.json';

function nav() {
  return [
    { text: '导读', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: '', link: '', activeMatch: '' }, // separator
    { text: '前端基础', link: '/basic/html', activeMatch: '/basic/' },
    { text: '算法', link: '/algorithm/', activeMatch: '/algorithm/' },
    { text: '框架', link: '/framework/', activeMatch: '/framework/' },
    { text: '工程化', link: '/project/', activeMatch: '/project/' },
    { text: '领域专精', link: '/expert/', activeMatch: '/expert/' },
    { text: '架构/管理', link: '/master/', activeMatch: '/master/' },
    { text: '', link: '', activeMatch: '' }, // separator
    { text: '简历优化', link: '/resume/', activeMatch: '/resume/' },
    { text: '面试题', link: '/interview/questions/', activeMatch: '/interview/' },
    { text: '内推', link: '/recommendation/', activeMatch: '/recommendation/' },
    { text: '', link: '', activeMatch: '' }, // separator
    { text: 'sth@' + pkg.version, link: '/sth/', activeMatch: '/sth/' },
  ];
}

export default nav;
