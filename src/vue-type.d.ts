declare module '*.vue' {
  import type {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

//declare module 'vue-kinesis' {
//  import type {DefineComponent} from 'vue';
//  const KinesisContainer: DefineComponent<{}, {}, any>;
//  const KinesisElement: DefineComponent<{}, {}, any>;
//  export {KinesisContainer, KinesisElement};
//}
//
