
import './styles.css';

type Props = {
    title1: string;
    description1: string;
    title2: string;
    description2: number;
    title3: string;
    description3: string;
    title4: string;
    description4: string;
    description5: string;
  }


const ResultCard = ( {title1, description1, title2, description2, title3, description3, title4, description4, description5} : Props) => {
  return (
    <div className="result-container">
      <div className="result-card-container">
        <h4>Informações</h4>
        <div className="result-card">
        <h6>{title1}</h6>
        <p>{description1}</p>
        </div>
        <div className="result-card">
        <h6>{title2}</h6>
        <p>{description2}</p>
        </div>
        <div className="result-card">
        <h6>{title3}</h6>
        <p>{description3}</p>
        </div>
        <div className="result-card">
        <h6>{title4}</h6>
        <p>{description4}</p>
        </div>
    </div>
    <div className="result-container-avatar">
        <img src={description5} alt=""/>
        </div>
    </div>
  );
}

export default ResultCard;
