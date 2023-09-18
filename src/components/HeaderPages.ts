export type PageType = {
  name: string
  href?: string
  onClick?: () => void
  target?: 'router' | 'blank' | 'self'
}

export const Pages: { [id: string]: PageType } = {
  index: {
    name: '首页',
    href: '/',
    target: 'router',
  },
  news: {
    name: '新闻',
    href: '/news',
    target: 'router',
  },
  book: {
    name: '图鉴',
    href: '/book',
    target: 'router',
  },
  forum: {
    name: '论坛',
    // href: '/forum',
    // target: 'self',
    onClick: () => {}
  },
  about: {
    name: '关于',
    // href: '/about',
    // target: 'router',
    onClick: () => {}
  }
};
