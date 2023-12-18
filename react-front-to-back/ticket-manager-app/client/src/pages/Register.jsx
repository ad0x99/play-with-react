import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { register } from '../features/auth/authSlice';

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const { name, email, password, confirmedPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      toast.error('Passwords do not match', { autoClose: 3000 });
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData))
        .unwrap()
        .then(() => {
          toast.success('You have been successfully registered', {
            autoClose: 1000,
          });
          navigate('/');
        })
        .catch(toast.error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChange}
              autoComplete="on"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmedPassword"
              name="confirmedPassword"
              placeholder="Confirm your password"
              value={confirmedPassword}
              onChange={onChange}
              autoComplete="on"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Register</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
