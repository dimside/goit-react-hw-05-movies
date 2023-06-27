import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { MdKeyboardBackspace } from 'react-icons/md';

import { getMovieDetails } from 'services/movie-service';
import emptyImg from 'images/emptyImg.png';

import {
  BackButton,
  MovieDetailsSection,
  MovieInfoContainer,
  ImgContainer,
  AdditionalInfo,
  StyledLink,
  SpinnerContainer,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rejected, setRejected] = useState();

  const { movieId } = useParams();
  const { state } = useLocation();

  const backLink = useRef(state?.from || '/');

  const {
    title,
    poster_path: image,
    overview,
    genres,
    vote_average: score,
  } = movieInfo;

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieInfo(data);
        setIsLoading(false);
      })();
    } catch (error) {
      setIsLoading(false);
      setRejected(error.message);
    }
  }, [movieId]);

  return (
    <main>
      <MovieDetailsSection>
        <BackButton to={backLink.current}>
          {' '}
          <MdKeyboardBackspace /> Go back
        </BackButton>

        {isLoading && (
          <SpinnerContainer>
            <ColorRing
              colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            />
          </SpinnerContainer>
        )}
        {title && (
          <>
            <MovieInfoContainer>
              <ImgContainer>
                {image ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${image}`}
                    alt={title}
                  />
                ) : (
                  <img src={emptyImg} alt="There are no images" width={150} />
                )}
              </ImgContainer>
              <div>
                <h2>{title}</h2>
                <p>{`User Score: ${Math.round(score * 10)}%`}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(({ name }) => name).join(' ')}</p>
              </div>
            </MovieInfoContainer>
            <AdditionalInfo>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <StyledLink to="cast">Cast</StyledLink>
                </li>
                <li>
                  <StyledLink to="reviews">Reviews</StyledLink>
                </li>
              </ul>
            </AdditionalInfo>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </>
        )}

        {rejected && !isLoading && <div>{rejected}</div>}
      </MovieDetailsSection>
    </main>
  );
};

export default MovieDetails;
