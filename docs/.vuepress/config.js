/*配置网站标题、描述、主题等*/
module.exports = {
    title: "Bingo's blog",
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],

    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            { text: "bingo.kim", link: "http://bingo.kim" }
        ],
        sidebar: [
            {
                title: "JavaScript",
                collapsable: true,
                children: [
                    "JavaScript/home",
                    "JavaScript/b",
                    "JavaScript/Diff",
                    "JavaScript/js01",
                    "JavaScript/js02",
                    "JavaScript/js03",
                    "JavaScript/js04",
                ],
                sidebarDepth: 0
            },
            {
                title: "markdown",
                collapsable: true,
                children: [
                    "markdown/markdown",
                ],
                sidebarDepth: 0
            },
        ], // 侧边栏配置

        //sidebarDepth: 2, // 侧边栏显示2级
    }
};