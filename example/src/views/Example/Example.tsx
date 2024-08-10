import AuthHeightTextarea from './AutoHeightTextarea';
import {AnimatePresence, motion, useMotionValue, Variant} from 'framer-motion';
import {useState} from 'react';

import Textarea from '../../components/Textarea';


const Example = () => {
    const [isVisible, setVisible] = useState(false);
    const [value, setValue] = useState<string>('AppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleApple');


    const renderContent = () => {

        return  <div >


            <div
                style={{border: '1px solid red', height: 'auto'}}

            >
                {isVisible ?
                // <AuthHeightTextarea
                //     value={value}
                //     onChange={e => setValue(e.target.value)}
                // />

                    <motion.div
                        style={{overflow: 'hidden', border: '1px solid red', height: 'auto'}}
                        transition={{duration: 0.2}}

                        initial={{opacity: 0,height: 'auto'}}
                        animate={{opacity: 1,height: 100}}
                        exit={{opacity: 0,height: 'auto'}}
                    >
                        <AuthHeightTextarea
                            value={value}
                            onChange={evt => setValue(evt.target.value)}
                        />
                    </motion.div>
                    
                    :
                    <motion.div
                        style={{overflow: 'hidden', border: '1px solid red', height: 'auto'}}
                        transition={{duration: 0.2}}

                        initial={{opacity: 0,height: 'auto'}}
                        animate={{opacity: 1,height: 200}}
                        exit={{opacity: 0,height: 'auto'}}
                    >
                        <div
                            key="box2" style={{ wordBreak: 'break-all', backgroundColor: 'lightgreen'}}
                            className="text-left"
                        >
                            {value}{value}
                        </div>
                    </motion.div>
                }
            </div>

        </div>;

    };


    return <div style={{maxWidth: '500px', width: '100%'}}>

        <button type="button" onClick={() => setVisible(curr => !curr)}>{String(isVisible)}</button>


        {renderContent()}


    </div>;
};

export default Example;




