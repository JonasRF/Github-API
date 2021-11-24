
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {

    return(
        <>
        <div className="home-container">
        <h4>Desafio Github API</h4>
        <p>Bootcamp Spring React - DevSuperior</p>
        </div>
        <div className="home-container-button">
        <Link to="/before">
        <button className="btn home-button">Começar</button>
        </Link>
        </div>
        </>
    );
}
export default Home;