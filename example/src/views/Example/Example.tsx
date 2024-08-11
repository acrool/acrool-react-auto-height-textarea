import AuthHeightTextarea from '@acrool/react-auto-height-textarea';
import {useEffect, useRef, useState} from 'react';

import Textarea from '../../components/Textarea';


const Example = () => {
    const [isVisible, setVisible] = useState(true);
    const [value, setValue] = useState<string>('Acrool is an developer driven platform to visually design and manage project infrastructure, collaboratively.\n' +
        '\n' +
        'It\'s the solution for any providerAcrool is an developer driven platform to visually design and manage project infrastructure, collaboratively.\n' +
        '\n' +
        'It\'s the solution for any providerAcrool is an developer driven platform to visually design and manage project infrastructure, collaboratively.\n' +
        '\n' +
        'It\'s the solution for any providerAcrool is an developer driven platform to visually design and manage project infrastructure, collaboratively.\n' +
        '\n' +
        'It\'s the solution for any provider');

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


    return <div style={{maxWidth: '500px', width: '100%', margin: '0 auto'}}>

        <button type="button" onClick={() => setVisible(curr => !curr)}>{String(isVisible)}</button>

        {renderContent()}
    </div>;
};

export default Example;




