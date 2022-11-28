import './Preloader.css';

function Preloader() {
  return (
    <div className='preloader'>
      <i className='preloader__spinner'></i>
      <span className='preloader__text'>Searching for news...</span>
    </div>
  );
}
export default Preloader;
