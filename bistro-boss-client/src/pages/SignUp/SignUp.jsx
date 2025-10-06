import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = { name: data.name, email: data.email };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            });
                    })
                    .catch(error => console.log(error));
            });
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-indigo-500 p-6">
                <div className="max-w-4xl w-full bg-white/20 backdrop-blur-md rounded-3xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
                    
                    {/* Left Content */}
                    <div className="lg:w-1/2 p-10 flex flex-col justify-center text-white bg-gradient-to-b from-indigo-700 to-orange-800">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join Us!</h1>
                        <p className="mb-6 text-gray-200">
                            Create your account to enjoy our delicious meals, exclusive offers, and seamless online experience.
                        </p>
                        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=60" alt="Sign Up Illustration" className="rounded-xl shadow-lg hidden lg:block" />
                    </div>

                    {/* Right Content / Form */}
                    <div className="lg:w-1/2 p-10 bg-white rounded-r-3xl">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your name" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg" />
                                {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg" />
                                {errors.photoURL && <span className="text-red-600 text-sm">Photo URL is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg" />
                                {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Password" className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-lg" />
                                {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm">Password must be at least 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600 text-sm">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">Password must include uppercase, lowercase, number & special character.</p>}
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg" />
                            </div>
                        </form>

                        <p className="mt-4 text-center text-gray-600 text-sm">
                            Already have an account? <Link to="/login" className="text-indigo-600 hover:underline font-medium">Login</Link>
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

export default SignUp;
