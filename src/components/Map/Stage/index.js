import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeStage } from '../../../Slices/moduleSlice';
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

const Stage = ({index, title, level, isCheckpoint, translateUnit, isCompleted}) => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const hideModal = () => {setShow(false)};
  console.log(index)

  return (
    <div  style={{display: isCheckpoint && 'none', transform: `translateY(${translateUnit}px)`, background: !isCompleted && 'rgba(0,0,0,0.3)'}} 
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
            <button onClick={() => {hideModal(); dispatch(completeStage(index))}}>Complete Level</button>
          </div>
        </Modal>
    </div>
  )
}

export default Stage;