import '../style/homepage.css';
import Header from './Header';
import { Link } from 'react-router-dom';


function HomePage() {
  return (

    <div className='homepage'>
        <Header />

        <div className="homepage__img__container">
            <img src="../public/home__bg.png" className='homepage__img' />
        </div>

        <div className="homepage__body">
            <h1 className="homepage__title">Cat Breed Identifier</h1>
            <p className="homepage__rules">Do you have a furry friend at home but aren’t sure about their breed? No worries! Just upload a clear image of your cat, and we’ll do our best to identify their breed for you!<br />
            Remember, every cat is unique, and regardless of their breed, they are all full of love and purrs! 💖<br />
            So, snap a photo, and let’s uncover the mystery together!</p>
            <Link to="/predict" className='homepage__btns'>
                <button className="homepage__btn dark__btn">Upload</button>
            </Link>
        </div>
    </div>
  )
}

export default HomePage
