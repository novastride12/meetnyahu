import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>MeetnYahu</h1>

      {user ? (
        <>
          <h2>Welcome {user.userid}</h2>

          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>
        </>
      ) : (
        <h2>Not Logged In</h2>
      )}
    </div>
  );
}