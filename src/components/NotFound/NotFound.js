import './NotFound.css';
import notFound from '../../images/not_found.svg';

function NotFound({ isSearchError }) {
  return (
    <div className='notfound'>
      {isSearchError ? (
        <p className='notfound__text'>
          Sorry, something went wrong during the request. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      ) : (
        <>
          <img
            className='notfound__icon'
            src={notFound}
            alt='sad emoji inside microscope'
          />
          <h2 className='notfound__title'>Nothing found</h2>
          <p className='notfound__text'>
            Sorry, but nothing matched your search terms.
          </p>
        </>
      )}
    </div>
  );
}
export default NotFound;
