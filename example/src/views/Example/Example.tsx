import {useState} from 'react';

import Textarea from '../../components/Textarea';
import AuthHeightTextarea from '@acrool/react-auto-height-textarea';


const Example = () => {
    const [value, setValue] = useState<string>('AppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleApple');


    return <div style={{display: 'flex', gap: '10px', maxWidth: '500px', alignItems: 'flex-start', width: '100%'}}>

        <AuthHeightTextarea
            value={value}
            onChange={e => setValue(e.target.value)}
        />


    </div>;
};

export default Example;




