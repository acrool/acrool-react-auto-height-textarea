import AuthHeightTextarea from '@acrool/react-auto-height-textarea';
import {useState} from 'react';

import Textarea from '../../components/Textarea';


const Example = () => {
    const [isVisible, setVisible] = useState(false);
    const [value, setValue] = useState<string>('AppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleApple');


    const renderContent = () => {

        if(isVisible){
            return <AuthHeightTextarea
                value={value}
                onChange={e => setValue(e.target.value)}
            />;
        }

        return <div
            style={{wordBreak: 'break-all'}}
            className="text-left"
        >
            {value}
        </div>;

    };


    return <div style={{maxWidth: '500px', width: '100%'}}>

        <button type="button" onClick={() => setVisible(curr => !curr)}>{String(isVisible)}</button>

        {renderContent()}


    </div>;
};

export default Example;




