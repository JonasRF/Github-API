import axios from 'axios';
import { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import { address } from '../../types/address';
import { FormData } from '../../types/formData';
import './styles.css';

const Before = () => {
  const [address, setAddress] = useState<address>();

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('mudou para:' + event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setAddress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
        console.log(error);
      });
  };
  return (
    <>
      <div className="github-search-before">
        <h2>Encontre um perfil Github</h2>
        <div className="container search-container">
          <form onSubmit={handleSubmit}>
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
      { address && (
      <>
      <ResultCard
        title1="Perfil:"
        description1={address.url}
        title2="Seguidores:"
        description2={address.followers}
        title3="Localidade:"
        description3={address.location}
        title4="Nome:"
        description4={address.name}
        description5={address.avatar_url}
      />
      </>
      )}
    </>
  );
};

export default Before;
