import {motion} from 'framer-motion'


const transition = (Component:any) => {
    return () => {
        <>
            <Component /> 
            <motion.div className='dissapear'/>
            <motion.div className ='appear'/>
        </>
    };
};

export default transition;