import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import { saveUserToDb } from "../../api/Auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const userData = { email, name };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();

    // password validation check
    // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    //   setError("password not valid need 8 char ");
    //   return;
    // }
    // if (!name || !email || !password || !photoUrl) {
    //   setError("Please fill in all fields");
    //   return;
    // }

    const registerSuccess = () => {
      return Swal.fire("Registration Successful!", "Explore Now!", "success");
    };

    registerUser(email, password)
      .then((result) => {
        console.log(result);
        setUser(true);
        registerSuccess();
        setSuccess("Registration Successful");
        updateUserProfile(result.user?.name, result.user?.photoUrl)
          .then(() => {
            // save user to db
            saveUserToDb(userData);
            navigate(from, { replace: true });
          })
          .catch(() => {});
      })
      .catch(() => {
        setError("");
      });
  };

  return (
    <>
      <Helmet>
        <title>Register - EndGamer College</title>
      </Helmet>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register Please</h1>
          </div>
          <form className="card w-full lg:w-[800px] max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control pt-5">
                {user ? (
                  <p className="text-success mb-2">{success}</p>
                ) : (
                  <p className="text-error mb-2">{error}</p>
                )}
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  value={photoUrl}
                  type="text"
                  name="photo-url"
                  placeholder="photo-url"
                  className="input input-bordered"
                />
              </div>
              <div onClick={handleRegister} className="form-control mt-6">
                <button className="btn bg-[#c84c30] hover:bg-[#cd320f] border-none">
                  Register
                </button>
              </div>

              <label className="label">
                <p href="#" className="label-text-alt">
                  Already Member of{" "}
                  <span className="text-[#c84c30]">EndGamer College</span>?
                  Please{" "}
                  <Link to="/login" className="text-[#1c5c7c] hover:underline">
                    Login
                  </Link>
                </p>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
