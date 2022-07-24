import * as React from 'react';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...restProps } = props;
  return (
      <svg className={classes(className, 'zui-icon')}
           {...restProps}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
  )
}

export default Icon;