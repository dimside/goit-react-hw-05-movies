import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

import { getMovieCredits } from 'services/movie-service';
import CastCard from 'components/CastCard/CastCard';
import { SpinnerContainer, CastContainer } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [rejected, setRejected] = useState();
  const [isLoading, setIsLoading] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    try {
      setIsLoading(true);
      (async () => {
        const data = await getMovieCredits(movieId);
        setCredits(data);
        setIsLoading(false);
      })();
    } catch (error) {
      setIsLoading(false);
      setRejected(error.message);
    }
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <SpinnerContainer>
          <ColorRing
            colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
          />
        </SpinnerContainer>
      )}

      {rejected && !isLoading && <div>{rejected}</div>}

      {!isLoading && (
        <CastContainer>
          {credits.map(({ name, character, profile_path: actorImg, id }) => (
            <CastCard
              key={id}
              name={name}
              character={character}
              actorImg={actorImg}
              id={id}
            />
          ))}
        </CastContainer>
      )}
    </>
  );
};

export default Cast;
