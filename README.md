# Acrool React Auto Height Textarea

<a href="https://acrool-react-auto-height-textarea.pages.dev/" title="Acrool React Auto Height Textarea">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-auto-height-textarea/main/example/public/og.webp" alt="Acrool React Auto Height Textarea Logo"/>
</a>

<p align="center">
    Auto-height Textarea element.
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-auto-height-textarea.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-auto-height-textarea)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-auto-height-textarea?style=for-the-badge)](https://github.com/acrool/@acrool/react-auto-height-textarea/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-auto-height-textarea?style=for-the-badge)](https://github.com/acrool/react-auto-height-textarea/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-auto-height-textarea.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-auto-height-textarea)
[![npm](https://img.shields.io/npm/dt/@acrool/react-auto-height-textarea.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-auto-height-textarea)

</div>





## Features

- Auto-height Textarea element.


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
import AutoHeightTextarea from '@acrool/react-auto-height-textarea';

const Example = () => {
    const [value, setValue] = useState('');
    
    return <Comment
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type your message"
        rows={1}
    />;
}


```

## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)

