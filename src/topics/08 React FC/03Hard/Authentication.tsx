import React, { useState } from "react";

interface AuthenticationProps {
  onLogin: (username: string, password: string) => void;
  onLogout: () => void;
}

const Authentication: React.FC<AuthenticationProps> = ({
  onLogin,
  onLogout,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Authentication;
