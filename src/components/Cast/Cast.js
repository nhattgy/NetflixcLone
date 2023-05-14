import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Action } from "../../components/store/action/movieActions";
import { baseUrl } from "../../components/store/config/config";
import "./Cast.scss";

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getCreditsData = async () => {
      try {
        const creditsData = await Action(id);
        console.log(creditsData);
        setCredits(creditsData);
        setIsAnimated(true);
      } catch (error) {
        console.error(error);
      }
    };
    getCreditsData();
  }, [id]);

  return (
    <div>
      <h1 className="h1-cast">Top Billed Cast</h1>
      <div className={`castList${isAnimated ? " animate" : ""}`}>
        {credits &&
          credits.slice(0, 6).map((cast) => (
            <div key={cast.id} className="castItem">
              <img
                src={`${baseUrl}${cast.profile_path}`}
                alt={cast.name}
                className="castImage"
              />
              <div className="castInfo">
                <p className="cast-name">{cast.name}</p>
                <p className="cast-character">{cast.character}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cast;
