import { SubmitHandler, useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { TSignUpForm } from "../types/typesForm.ts";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TSignUpForm>();
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [error, setError] = useState<string>();
    const authState = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (authState.isAuth) {
            navigate("/cabinet");
        }
    });
    const onSubmitRegistration: SubmitHandler<TSignUpForm> = (data) => {
        signUp(data).then((res) => {
            if (typeof res === "string") {
                setError(res);
            } else {
                navigate("/cabinet");
            }
        });
    };

    const [visiblePass, setVisiblePass] = useState(false);

    return (
        <main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Registartion
                </h2>
                {error ? (
                    <Alert
                        className="mt-7 -mb-9 w-2/3 mx-auto"
                        severity="error"
                    >
                        {error}
                    </Alert>
                ) : (
                    ""
                )}
            </div>
            <form
                onSubmit={handleSubmit(onSubmitRegistration)}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                id="first-name"
                                autoComplete="given-name"
                                {...register("first_name", {
                                    required: "This field is required",
                                })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.email && (
                            <Alert className="mt-3" severity="error">
                                {errors.first_name?.message}
                            </Alert>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                id="last-name"
                                autoComplete="family-name"
                                {...register("last_name", {
                                    required: "This field is required",
                                })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.email && (
                            <Alert className="mt-3" severity="error">
                                {errors.last_name?.message}
                            </Alert>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                {...register("email", {
                                    required: "This field is required",
                                })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.email && (
                            <Alert className="mt-3" severity="error">
                                {errors.email?.message}
                            </Alert>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Password
                        </label>
                        <div className="mt-2.5 relative">
                            <input
                                type={visiblePass ? "text" : "password"}
                                id="password"
                                autoComplete="organization"
                                {...register("password", {
                                    required: "This field is required",
                                })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {visiblePass ? (
                                <EyeSlashIcon
                                    onClick={() => setVisiblePass(false)}
                                    className="w-5 absolute top-2.5 right-2 text-gray-300 hover:text-black cursor-pointer duration-300"
                                />
                            ) : (
                                <EyeIcon
                                    onClick={() => setVisiblePass(true)}
                                    className="w-5 absolute top-2.5 right-2 text-gray-300 hover:text-black cursor-pointer duration-300"
                                />
                            )}
                        </div>
                        {errors.email && (
                            <Alert className="mt-3" severity="error">
                                {errors.password?.message}
                            </Alert>
                        )}
                    </div>
                </div>
                <div className="mt-10">
                    <input
                        type="submit"
                        value="Sign up"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    />
                </div>
                <div>
                    <Link
                        to="/sign-in"
                        type="submit"
                        className="flex mt-5 w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black border shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default SignUp;
