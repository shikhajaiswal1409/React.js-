import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("userToken");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

/*    return <Navigate to="/login" replace />;
return

Stops the function
Sends JSX back to React to render
<Navigate />
A React Router component
Causes a redirect
to="/login"
Destination route
Sends user to the login page
replace
Replaces the current history entry

Prevents user from clicking “Back” and re-entering protected page
✅ Why this exists

This forces unauthenticated users to go to /login.

7️⃣ return children;
return

Sends JSX back to React

children

The protected component passed in

Example: <Dashboard />

✅ Why this exists

If the user IS authenticated, allow them to see the protected page.
*/