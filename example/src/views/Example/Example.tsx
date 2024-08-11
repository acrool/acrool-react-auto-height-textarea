import AuthHeightTextarea from '@acrool/react-auto-height-textarea';
import {useEffect, useRef, useState} from 'react';

import Textarea from '../../components/Textarea';


const Example = () => {
    const [isVisible, setVisible] = useState(false);
    const [value, setValue] = useState<string>('AppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleApple');

    const mainRef = useRef<HTMLTextAreaElement>(null);


    useEffect(() => {
        if(isVisible) {
            if(mainRef.current) {
                mainRef.current.focus();
            }
        }

    }, [isVisible]);

    const renderContent = () => {

        if(isVisible){
            return <AuthHeightTextarea
                ref={mainRef}
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


    return <div style={{maxWidth: '500px', width: '100%', height: '1000px', backgroundColor: 'red'}}>

        <div style={{height: '1200px', backgroundColor: 'blue'}}></div>
        <button type="button" onClick={() => setVisible(curr => !curr)}>{String(isVisible)}</button>

        {renderContent()}


    </div>;
};

export default Example;




