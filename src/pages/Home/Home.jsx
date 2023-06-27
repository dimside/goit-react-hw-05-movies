import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ColorRing } from 'react-loader-spinner';
import { RiMovie2Line } from 'react-icons/ri';

import { getTrending } from 'services/movie-service';
import {
  HomeSection,
  HomeTitle,
  StyledLink,
  MoviesList,
  SpinnerContainer,
} from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [rejected, setRejected] = useState();
  const [isLoading, setIsLoading] = useState();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getTrending();
        setTrendingMovies(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setRejected(error.message);
      }
    })();
  }, []);

  return (
    <main>
      <HomeSection>
        <HomeTitle>Trending today</HomeTitle>

        {isLoading && (
          <SpinnerContainer>
            <ColorRing
              colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            />
          </SpinnerContainer>
        )}

        {trendingMovies.length > 0 ? (
          <MoviesList>
            {trendingMovies.map(({ title, id, name }) => (
              <li key={id}>
                <RiMovie2Line />{' '}
                <StyledLink to={`movies/${id}`} state={{ from: location }}>
                  {title || name}
                </StyledLink>
              </li>
            ))}
          </MoviesList>
        ) : (
          isLoading === false &&
          !rejected && <div>There are no movies today...</div>
        )}

        {rejected && !isLoading && <div>{rejected}</div>}
      </HomeSection>
    </main>
  );
};

export default Home;
