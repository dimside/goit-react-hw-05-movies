import { Outlet } from 'react-router-dom';

import { HeaderEl, NavList, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <HeaderEl>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </HeaderEl>
      <Outlet />
    </>
  );
};

export default SharedLayout;
