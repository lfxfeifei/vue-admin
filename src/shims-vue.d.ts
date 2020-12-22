declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
declare module "nprogress"
declare module "js-cookie"
declare module "clipboard"
