declare module "Button" {
  export default class Button {}
}

declare module "ui" {
  export {default as Button} from "Button"
}