export const sidebar = {
    '/blogs/study': [
        {
            text: '利其器', collapsed: true, collapsible: true,
            items: [
                { text: '可能不知道的实用网站', link: '/blogs/study/other/index' },
                { text: 'vitepress+gitee pages搭建博客', link: '/blogs/study/other/buildBlog' },
                {
                    text: 'git相关知识',
                    items: [
                        { text: 'git tag 操作', collapsed: true, collapsible: true, link: '/blogs/study/git/gitTag' }
                    ]
                },
            ]
        },
        {
            text: '面试', collapsible: true, collapsed: true,
            items: [
                {
                    text: 'vue', collapsible: true, collapsed: true,
                    items: [
                        { text: 'v-for 和 v-if为什么不共存？', link: '/blogs/study/other/InterviewVue' }
                    ]
                },
            ]
        }
    ],
    '/blogs/front/': [
        {
            text: '前端',
            items: [
                {
                    text: '小程序', collapsed: true, collapsible: true,
                    items: [
                        { text: '配置业务域名', link: '/blogs/front/miniPro/smallProIndex' }
                    ]
                },
                {
                    text: 'js', collapsible: true, collapsed: true,
                    items: [
                        { text: '基础方法', link: '/blogs/front/js/jsIndex' }
                    ]
                },
                
            ]
        }
    ],
    '/blogs/gongKao': [
        {
            text: '公考', collapsible: true, collapsed: true,
            items: [
                {
                    text: '行测',
                    items: [
                        {
                            text: '判断推理', collapsed: true, collapsible: true,
                            items: [
                                { text: '第一章 图形推理', link: '/blogs/gongKao/xc/indexXC' },
                                { text: '第二章 定义判断', link: '/blogs/gongKao/xc/secondXC' },
                                { text: '第三章 类比推理', link: '/blogs/gongKao/xc/thirdXC' },
                                { text: '第四章 逻辑判断', link: '/blogs/gongKao/xc/fourthXC' },
                            ]
                        },
                        {
                            text: '数量关系与资料分析', collapsed: true, collapsible: true,
                            items: [
                                { text: '第一部分 数学运算', link: '/blogs/gongKao/xc/fiveXC' },
                                { text: '第二部分 资料分析', link: '/blogs/gongKao/xc/zlfxXC' }
                            ]
                        },
                        {
                            text: '言语理解与表达', collapsed: true, collapsible: true,
                            items: [
                                { text: '第一章 片段阅读', link: '/blogs/gongKao/xc/yylj01' },
                                { text: '第二章 语句表达', link: '/blogs/gongKao/xc/yylj02' },
                                { text: '第三章 逻辑填空', link: '/blogs/gongKao/xc/yylj03' },
                            ]
                        },
                        {
                            text: '常识', collapsed: true, collapsible: true,
                            items: [
                                { text: '第一章 历史文化', link: '/blogs/gongKao/xc/changshi01' },
                                { text: '第二章 自然科技', link: '/blogs/gongKao/xc/changshi02' },
                                { text: '第三章 法律', link: '/blogs/gongKao/xc/changshi03' },
                                { text: '第四章 政治经济', link: '/blogs/gongKao/xc/changshi04' },
                                { text: '第五章 地理环境', link: '/blogs/gongKao/xc/changshi05' },
                                { text: '常识拓展一', link: '/blogs/gongKao/xc/changshi06' },
                                { text: '常识拓展二', link: '/blogs/gongKao/xc/changshi07' },
                            ]
                        },
                    ]
                }
            ]
        }
    ],
    '/blogs/other': [
        {
            text: '其他', collapsible: true, collapsed: true,
            items: [
                {
                    text: '玄学', collapsible: true,
                    items: [
                        { text: '八字推算', link: '/blogs/other/bzCompter' }
                    ]
                }
            ]
        }
    ]
}
