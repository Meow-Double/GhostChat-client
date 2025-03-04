import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { ChatPage, FriendsPage, HomePage, LoginPage, NotFound, RegisterPage } from '@/pages';

import { Layout } from './configs/Layout';
import { ROUTES } from './configs/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchGetMe, userSelect } from '@/store/slices/userSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(userSelect);
  const navigate = useNavigate();
  const { id } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      navigate(`/profile/${id}`);
    }
  }, [token]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const tokenParse = JSON.parse(token);
      dispatch(fetchGetMe(tokenParse));
    }
  }, []);

  return (
    <Routes>
      {token && (
        <>
          {/* <Route path={ROUTES.HOME} element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route> */}
          <Route path={ROUTES.CHAT} element={<Layout />}>
            <Route index element={<ChatPage />} />
            <Route path=":id" element={<ChatPage />} />
          </Route>
          <Route path={ROUTES.FRIENDS} element={<Layout />}>
            <Route index element={<FriendsPage />} />
          </Route>
          <Route path={ROUTES.PROFILE} element={<Layout />}>
            <Route path=':id' element={<HomePage />} />
          </Route>
          <Route path={ROUTES.NOTFOUND} element={<Layout />}>
            <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
          </Route>
        </>
      )}
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.NOTFOUND} element={<Navigate to={ROUTES.REGISTER} />} />
    </Routes>
  );
};

export default App;
