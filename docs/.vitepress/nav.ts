import pkg from '../../packages/sth/package.json';

function nav() {
  return [
    { text: '导读', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: '', link: '', activeMatch: '' }, // separator
    { text: '前端基础', link: '/basic/', activeMatch: '/basic/' },
    { text: '算法', link: '/algorithm/', activeMatch: '/algorithm/' },
    { text: '框架', link: '/framework/', activeMatch: '/framework/' },
    { text: '主导项目', link: '/project/', activeMatch: '/project/' },
    { text: '领域专精', link: '/speciality/', activeMatch: '/speciality/' },
    { text: '架构设计', link: '/architecture/', activeMatch: '/architecture/' },
    { text: '', link: '', activeMatch: '' }, // separator
    { text: '简历优化', link: '/resume/', activeMatch: '/resume/' },
    { text: '面试题', link: '/interview/questions/', activeMatch: '/interview/' },
    { text: '', link: '', activeMatch: '' }, // separator
    { text: 'sth@' + pkg.version, link: '/sth/', activeMatch: '/sth/' },
  ];
}

export default nav;
