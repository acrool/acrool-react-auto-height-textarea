# Acrool React Auto Height Textarea

<a href="https://acrool-react-auto-height-textarea.pages.dev/" title="Acrool React Auto Height Textarea - This is a react method to quickly combine buttons with Auto Height Textarea">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-auto-height-textarea/main/example/public/og.webp" alt="Acrool React Auto Height Textarea Logo"/>
</a>

<p align="center">
    This is a react method to quickly combine buttons with Auto Height Textarea
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-auto-height-textarea.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-auto-height-textarea)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-auto-height-textarea?style=for-the-badge)](https://github.com/acrool/@acrool/react-auto-height-textarea/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-auto-height-textarea?style=for-the-badge)](https://github.com/acrool/react-auto-height-textarea/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-auto-height-textarea.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-auto-height-textarea)
[![npm](https://img.shields.io/npm/dt/@acrool/react-auto-height-textarea.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-auto-height-textarea)

</div>





## Features

- Quickly create various Pickers such as Datepicker, timepicker, Select dropdown, etc.
- Plug and unplug using `framer-motion`
- Simulate the browser's native drop-down menu behavior (click outside to close, lose focus to close, open the menu when the keyboard is pressed or blank)
- The agent menu OnChange and value changes can be controlled freely and will be saved when the menu is closed.


## Install

```bash
yarn add @acrool/react-auto-height-textarea
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-auto-height-textarea/dist/index.css";
```

add in your App.tsx


```tsx
import {isEmpty} from '@acrool/js-utils/equal';
import clsx from 'clsx';
import React, {ForwardedRef} from 'react';
import styled, {css} from 'styled-components';

import NumberKeyboard from './NumberKeyboard';
import {createPicker, usePicker} from '@acrool/react-auto-height-textarea';


```

## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)

