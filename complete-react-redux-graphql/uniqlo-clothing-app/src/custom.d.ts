/* Telling TypeScript to treat all files with the .svg extension as a module. */
declare module '*svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
