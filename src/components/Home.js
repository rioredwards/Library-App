import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Welcome to the cool book library for cool cats 🐈</p>
      <br></br>
      <Link className="green-link" to="/books">
        Go to our CAT-alog
      </Link>
      <hr></hr>
    </div>
  );
}

export default Home;
