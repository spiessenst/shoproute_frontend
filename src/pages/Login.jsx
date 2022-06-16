import { useState } from "react";
import { usePostLoginMutation } from "../store/loginApi";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [postLogin] = usePostLoginMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await postLogin({
      username,
      password,
    });
    error && setError(true);
    data && setError(false);
    data && dispatch(setUser({ user: data.user }));
    setUsername("");
    setPassword("");
    !error && navigate("/main");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="email"
        />
        <input
          className="form__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="wachtwoord"
        />
        <input className="form__button" type="submit" />
        {error && <p>Geen geldige login!</p>}
      </form>
    </>
  );
};

export default Login;
