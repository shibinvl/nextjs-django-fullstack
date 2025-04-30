import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuthContext";

export const useAuthRedirect = ({
  requireAuth = false,
  redirectTo = "/login",
  redirectIfAuthenticated = false,
  redirectToIfAuth = "/dashboard",
}) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        router.replace(redirectTo);
      }
      if (redirectIfAuthenticated && user) {
        router.replace(redirectToIfAuth);
      }
    }
  }, [loading, redirectIfAuthenticated, redirectTo, redirectToIfAuth, requireAuth, router, user]);

  return { loading };
};
