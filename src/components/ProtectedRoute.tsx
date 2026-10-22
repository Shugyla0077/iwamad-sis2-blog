import { Navigate, Outlet } from 'react-router'

interface ProtectedRouteProps {
  isSignedIn: boolean
}

export const ProtectedRoute = ({ isSignedIn }: ProtectedRouteProps) => {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
