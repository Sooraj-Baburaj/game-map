import Style from './checkpoint.module.scss';

const Checkpoint = ({level}) => {
  return (
    <div className={Style.Checkpoint}>
        <h1>Checkpoint</h1>
        <h3>{`level ${level}`}</h3>
    </div>
  )
}

export default Checkpoint;