import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Icon from './icon/icon';
import '../icons/wechat.svg'
import '../icons/taobao.svg'

const fn: React.MouseEventHandler<SVGElement> = (e) => {console.log(e);}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <>
    <Icon name="wechat" onClick={fn}/>
    <Icon name="taobao" />
  </>
);