import { memo } from "react";
import styles from "./svg.module.scss";

export default memo((props: SvgProps) => {
  const {src, color, className='', width=24, height=24, onClick} = props;

  return (
    <div onClick={onClick} className={`${className} ${styles.svgWrapper}`}>
      <div className={styles.svg} 
           style={{
             width, height,
             backgroundColor: color || '#000', 
             WebkitMaskImage: `url(${src})`, 
             maskImage: `url(${src})`
             }}></div>
    </div>
  )
});

interface SvgProps {
  /** Icon src */
  src: string,

  /** Icon color 
   * @default #fff
  */
  color?: string,

  /** Icon width
   * @default 24
   */
  width?: number | string,

  /** Icon height
   * @default 24
   */
  height?: number|string,

  /** click event handler */  /** click event handler */  /** click event handler */
  onClick?: any,
  
  /** className for container wrapping Svg component */
  className?: string,
}