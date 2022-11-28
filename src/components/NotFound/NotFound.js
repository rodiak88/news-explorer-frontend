import './NotFound.css';
import notFound from '../../images/not_found.png';

function NotFound() {
  return (
    <div className='notfound'>
      <img
        className='notfound__icon'
        src={notFound}
        alt='sad emoji inside microscope'
      />
      <h2 className='notfound__title'>Nothing found</h2>
      <p className='notfound__text'>
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}
export default NotFound;
