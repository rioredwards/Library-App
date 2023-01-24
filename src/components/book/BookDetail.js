import Book from './Book';
import { Link, useParams } from 'react-router-dom';
import { useBookDetail } from '../../hooks/useBookDetail';

function BookDetail() {
  const { id } = useParams(); // TODO: Use id from route
  const { book, loading, error } = useBookDetail(id);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <>
      <Link className="green-link" to="/books">
        {'<< Back To CAT-alog'}
      </Link>
      <hr></hr>
      <Book book={book} book_id={id} showDetail />
    </>
  );
}

export default BookDetail;
