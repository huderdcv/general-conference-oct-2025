import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';
import type { RootState } from '../store';

export const PrivateRoute = () => {
  const { status } = useSelector((state: RootState) => state.auth);

  if (status === 'checking') return <p>loading</p>;
  return status === 'authenticated' ? <Outlet /> : <Navigate to={'/'} />;
};
