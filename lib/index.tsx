import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Icon from './icon';
import '../icons/wechat.svg'
import '../icons/taobao.svg'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <>
    <Icon name="wechat" />
    <Icon name="taobao" />
  </>
);