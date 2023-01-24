import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Welcome to the cool book library for cool cats 🐈</p>
      <br></br>
      <Link className="greenLink" to="/books">
        Go to our CAT-alog
      </Link>
    </div>
  );
}

export default Home;
