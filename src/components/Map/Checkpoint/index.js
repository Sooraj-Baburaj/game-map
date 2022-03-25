import Style from './checkpoint.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeStage } from '../../../Slices/moduleSlice';
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


const Checkpoint = ({level, index, moduleIndex, isCompleted}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const hideModal = () => {setShow(false)};

  return (
    <div style={{background: isCompleted && 'rgba(0,0,0,0.7'}} className={Style.Checkpoint}>
        <h1 onClick={() => setShow(true)}>Checkpoint</h1>
        <h3 onClick={() => setShow(true)}>{`level ${level}`}</h3>
        <Modal 
          isOpen={show}
          style={customStyles}
          onRequestClose={hideModal}
          contentLabel={'Checkpoint'}
        >
          <div className={Style.completeStage}>
            <h1>Checkpoint</h1>
            <button onClick={() => {hideModal(); dispatch(completeStage({cueIndex: index, moduleIndex}))}}>Complete Level</button>
          </div>
        </Modal>
    </div>
  )
}

export default Checkpoint;