import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Alert } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { TSignInForm } from "../types/typesForm.ts";
import useAuth from "../hooks/useAuth.ts";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TSignInForm>();
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [error, setError] = useState<string>();
    const [visiblePass, setVisiblePass] = useState(false);

    const onSubmitLogin: SubmitHandler<TSignInForm> = (data) => {
        signIn(data).then((res) => {
            if (typeof res === "string") {
                setError(res);
            } else {
                navigate("/cabinet");
            }
        });
    };

    return (
        <main className="flex min-h-full flex-1 flex-col mt-32 justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                {error ? (
                    <Alert className="mt-3 -mb-4" severity="error">
                        {error}
                    </Alert>
                ) : (
                    ""
                )}
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmitLogin)}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                {...register("email", {
                                    required: "This field is required",
                                })}
                                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.email && (
                            <Alert className="mt-3" severity="error">
                                {errors.email?.message}
                            </Alert>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                type={visiblePass ? "text" : "password"}
                                autoComplete="current-password"
                                {...register("password", {
                                    required: "This field is required",
                                })}
                                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {visiblePass ? (
                                <EyeSlashIcon
                                    onClick={() => setVisiblePass(false)}
                                    className="w-5 absolute top-2 right-2 text-gray-300 hover:text-black cursor-pointer duration-300"
                                />
                            ) : (
                                <EyeIcon
                                    onClick={() => setVisiblePass(true)}
                                    className="w-5 absolute top-2 right-2 text-gray-300 hover:text-black cursor-pointer duration-300"
                                />
                            )}
                        </div>
                        {errors.password && (
                            <Alert className="mt-3" severity="error">
                                {errors.password?.message}
                            </Alert>
                        )}
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Sign in"
                            className="flex w-full cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                    <div>
                        <Link
                            to="/sign-up"
                            type="submit"
                            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black border shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default SignIn;
