import React, { useEffect, useState } from "react";

const UserProfile = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<UserState | null>(null);
  const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState<unknown>(null);

  interface UserState {
    name: string;
    email: string;
    username: string;
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        const data: UserState = await response.json();
        setUser(data);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        // setError(err);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div data-testid="user-element">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
