import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/menu',
    method: 'get',
    response: () => {
      return {
        code: '200',
        message: '获取成功',
        data: [
          {
            icon: 'HomeFilled',
            name: '首页',
            index: '/',
          },
          {
            icon: 'Check',
            name: '图标选择器',
            index: '/chooseIcon',
          },
          {
            icon: 'Sort',
            name: '趋势标记',
            index: '/trend',
          },
          {
            icon: 'DArrowRight',
            name: '进度条',
            index: '/progress',
          },
        ],
      }
    },
  },
] as MockMethod[]
