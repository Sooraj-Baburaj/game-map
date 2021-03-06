import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeStage } from '../../../Slices/moduleSlice';
import { useSpring, animated } from 'react-spring';
import { easeBounceOut  } from 'd3-ease'
import Style from './stage.module.scss';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '300px',
    width: '500px',
  },
};

Modal.setAppElement('#root');


const Stage = ({index, moduleIndex, title, level, isCheckpoint, isCompleted, translateValue}) => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const springProps = useSpring({to: {scale: 1}, from: {scale: 0.5}, delay: 500, config: {easing: easeBounceOut, duration: 1000}})

  const hideModal = () => setShow(false);

  return (
    <animated.div style={springProps}>
    <div  style={{display: isCheckpoint && 'none', transform: `translateY(${translateValue}px)`, background: !isCompleted && 'rgba(0,0,0,0.3)'}} 
          className={Style.Stage} 
          >
        <h1 onClick={() => setShow(true)}>{`level ${level}`}</h1>
        <Modal 
          isOpen={show}
          style={customStyles}
          onRequestClose={hideModal}
          contentLabel={title}
        >
          <div className={Style.completeStage}>
            <h1>{title}</h1>
            <button onClick={() => {hideModal(); dispatch(completeStage({cueIndex: index, moduleIndex}))}}>{isCompleted ? 'Completed' : 'Complete Level'}</button>
          </div>
        </Modal>
    </div>
    </animated.div>
  )
}

export default Stage;