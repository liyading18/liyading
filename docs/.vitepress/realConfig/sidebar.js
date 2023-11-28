export const sidebar = {
    '/blogs/study': [
        {
            text: '利其器',
            collapsible: true,
            items: [
                {text: '可能不知道的实用网站', link: '/blogs/study/index'},
                {text: 'vitepress+gitee pages搭建博客', link: '/blogs/study/buildBlog'},
            ]
        }
    ],
    '/blogs/front/': [
        {
            text: '前端',
            items: [
                {
                    text: '小程序',
                    collapsed: true,
                    collapsible: true,
                    items: [
                        { text: '配置业务域名', link: '/blogs/front/miniPro/smallProIndex' }
                    ]
                },
                {
                    text: 'js',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '基础方法', link: '/blogs/front/js/jsIndex' }
                    ]
                }
                
            ]
        }
    ],
    '/blogs/gongKao': [
        {
            text: '公考',
            collapsible: true,
            items: [
                { text: '行测', link: '/blogs/gongKao/index' }
            ]
        }
    ],
    '/blogs/other': [
        {
            text: '其他',
            collapsible: true,
            items: [
                {
                    text: '玄学',
                    collapsible: true,
                    items: [
                        { text: '八字推算', link: '/blogs/other/bzCompter' }
                    ]
                }
            ]
        }
    ]
}
