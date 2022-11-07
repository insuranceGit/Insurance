import { Link as RouterLink } from "react-router-dom"
// import { Grid, Typography, TextField, Button, Link } from "@mui/material"
// import { Google } from "@mui/icons-material"
import { AuthLayout } from "../Layout/AuthLayout"

export const LoginPage = () => {
    return (
        <AuthLayout>
            <section className="flex justify-center">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 flex justify-center items-center">
                            <img
                                src="../../../public/ImgLogin.svg"
                                alt="Login image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-6/12 lg:ml-20">
                            <div className="text-center">
                                <img
                                    className="mx-auto w-48"
                                    src="../../../public/Logo_AIR-fullcolor.png"
                                    alt="logo"
                                />
                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                                    Somos AIR Seguros
                                </h4>
                            </div>
                            <form className="">
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-lg shadow-cyan-500/50"
                                        placeholder="Usuario"
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-lg shadow-cyan-500/50"
                                        placeholder="Password"
                                    />
                                </div>

                                {/* <!-- Submit button --> */}
                                    <div className="flex justify-center items-center">
                                        <button
                                            type="button"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            component={ RouterLink } to='../load'
                                        >
                                            Sign in
                                        </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
};
