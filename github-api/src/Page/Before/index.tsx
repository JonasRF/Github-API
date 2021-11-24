
import { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import './styles.css';
type FormData = {
  login: string;
}

type address = {
  url: string;
  followers: number;
  location: string;
  name: string;
}

const Before = () => {

const [formData, setFormData] = useState<FormData>({
  login: '',
});

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 console.log('mudou para:' + event.target.value);
  const name = event.target.name;
  const value = event.target.value;

  setFormData({...formData, [name]: value});
}



  return (
     <>
    <div className="github-search-before">
    <h2>Encontre um perfil Github</h2>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
            type="text"
            name="login"
            value={formData.login}
            className="search-input"
            placeholder="Usuário Github"
            onChange={handleChange}
            />
            <button type="submit" className="btn search-button">
            Encontrar
            </button>
          </div>
        </form>
      </div>
    </div>
    <ResultCard title1="Perfil:" description1="http://api.github.com"
                title2="Seguidores:" description2="5478" 
                title3="Localidade:" description3="Uberlândia"
                title4="Nome:" description4="Celio Alves"/>
    
    </>
  );
};

export default Before;
