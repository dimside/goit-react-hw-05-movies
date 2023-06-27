import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const SharedLayout = lazy(() => import('pages/SharedLayout/SharedLayout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Suspense fallback={<div>Loading...</div>}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Suspense>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
