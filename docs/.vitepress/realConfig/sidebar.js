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
            collapsible: true,
            items: [
                { text: '小程序', link: '/blogs/front/smallProgram' }
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
                    items: [
                        { text: '八字推算', link: '/blogs/other/bzCompter' }
                    ]
                }
            ]
        }
    ]
}
