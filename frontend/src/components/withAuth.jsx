import Login from "../pages/Login";

const withAuth = (
  WrappedComponent
) => {

  return (props) => {

    const token =
      localStorage.getItem("token");

    if(!token){
      return <Login />;
    }

    return (
      <WrappedComponent
        {...props}
      />
    );
  };
};

export default withAuth;