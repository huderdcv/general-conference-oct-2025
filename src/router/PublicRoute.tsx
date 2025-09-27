import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';
import type { RootState } from '../store';

export const PublicRoute = () => {
  const { status } = useSelector((state: RootState) => state.auth);

  return status === 'not-authenticated' ? <Outlet /> : <Navigate to={'/'} />;
};
