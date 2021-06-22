module.exports = {
    title: 'MaxChen',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
      logo: '/logo.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        //{text: '技术文档', link: '/tech/interview/' },
        {text: 'CSDN主页', link: 'https://blog.csdn.net/qq_33651064'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2
    }
  };