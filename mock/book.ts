import {MockMethod} from 'vite-plugin-mock';

const book: MockMethod[] = [{
  url: `/api/equiment/findBigTypes`,
  method: 'get',
  response: () => ({
    code: 20000,
    data: [{
      id: 1,
      image: '/6a4d3ebd8e329e47612cc716d3173ee2.png',
      typename: '武器',
    }, {
      id: 2,
      image: '/6a4d3ebd8e329e47612cc716d3173ee2.png',
      typename: '经济',
    }, {
      id: 3,
      image: '/6a4d3ebd8e329e47612cc716d3173ee2.png',
      typename: '政治',
    }, {
      id: 4,
      image: '/6a4d3ebd8e329e47612cc716d3173ee2.png',
      typename: '数学',
    }, {
      id: 5,
      image: '/4a5eeefbe213039baa5396417674dda1.png',
      typename: '食物',
    }, {
      id: 6,
      image: '/4a5eeefbe213039baa5396417674dda1.png',
      typename: '魔法',
    }, {
      id: 7,
      image: '/ac6ed41b6b9e856efa1795bb376e8671.png',
      typename: '装备',
    }, {
      id: 8,
      image: '/c589a760a9ef206a501f706e08f2a39c.png',
      typename: '物理',
    }],
  }),
}, {
  url: `/api/equiment/tinyTypeByBigType`,
  method: 'get',
  response: () => ({
    code: 20000,
    data: [{
      id: 1,
      typename: '刀',
    }, {
      id: 2,
      typename: '剑',
    }, {
      id: 3,
      typename: '镰刀',
    }, {
      id: 4,
      typename: '斧子',
    }, {
      id: 5,
      typename: '弓箭',
    }, {
      id: 6,
      typename: '魔法书',
    }],
  }),
}, {
  url: `/api/equiment/findItemByTinyType`,
  method: 'post',
  response: () => {
    return {
      code: 20000,
      data: {
        records: new Array(Math.floor(Math.random() * 20 + 1)).fill(0).map((_, idx) => ({
          id: idx,
          name: '测试的物品',
          picture: ['/6a4d3ebd8e329e47612cc716d3173ee2.png', '/ac6ed41b6b9e856efa1795bb376e8671.png', '/c589a760a9ef206a501f706e08f2a39c.png', '/4a5eeefbe213039baa5396417674dda1.png'][Math.floor(Math.random() * 4)],
        })),
      },
    };
  },
}, {
  url: `/api/equiment/item`,
  method: 'get',
  response: () => ({
    code: 20000,
    data: {
      achieving: 'awd',
      describe: '一把测试剑哦',
      etype: 1,
      id: 1,
      name: '测试剑',
      picture: '/6a4d3ebd8e329e47612cc716d3173ee2.png',
      richtxt: '<strong>test</strong>test<div>OKOK</div><ul><li>1</li><li>2</li></ul>',
    },
  }),
}];

export default book;
