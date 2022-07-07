/// <reference types="react-scripts" />
/// <reference types="react" />


declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: any;
    export default src;
}

declare module "*.jpg" {
    const content: string;
    export default content;
  }
  
  declare module "*.png" {
    const content: string;
    export default content;
  }
  
  declare module "*.json" {
    const content: string;
    export default content;
  }