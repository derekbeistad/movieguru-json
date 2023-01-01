import { signIn, getCsrfToken, getProviders } from "next-auth/react";
import Header from "../components/Header";

function Signin({ csrfToken, providers }) {
  return (
    <div className="cover-section">
      <Header />
      <div>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} style={{ marginBottom: 0 }}>
              <h4
                className="login-btn"
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: `${window.location.origin}/`,
                  })
                }
              >
                Sign in with {provider.name}
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
