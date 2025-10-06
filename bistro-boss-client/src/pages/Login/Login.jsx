import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password).then(result => {
            const user = result.user;
            Swal.fire({
                title: 'Login Successful!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
            });
            navigate(from, { replace: true });
        });
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        setDisabled(!validateCaptcha(user_captcha_value));
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-indigo-500 p-6">
                <div className="max-w-4xl w-full bg-white/20 backdrop-blur-md rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
                    {/* Left Content */}
                    <div className="md:w-1/2 p-10 flex flex-col justify-center text-white bg-gradient-to-b from-indigo-700 to-orange-800">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Back!</h1>
                        <p className="mb-6 text-gray-200">
                            Log in to continue enjoying our delicious meals and exclusive offers. Smooth, simple, and secure login experience.
                        </p>
                        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=60" alt="Login illustration" className="rounded-xl shadow-lg hidden md:block" />
                    </div>

                    {/* Right Content / Form */}
                    <div className="md:w-1/2 p-10 bg-white rounded-r-3xl">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg" />
                                <label className="label">
                                    <Link to="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</Link>
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label mb-2">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Enter captcha" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg" />
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" value="Login" className={`btn w-full text-white font-semibold rounded-lg ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`} />
                            </div>
                        </form>

                        <p className="mt-4 text-center text-gray-600 text-sm">
                            New here? <Link to="/signup" className="text-indigo-600 hover:underline font-medium">Create an account</Link>
                        </p>

                        <div className="mt-6">
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
