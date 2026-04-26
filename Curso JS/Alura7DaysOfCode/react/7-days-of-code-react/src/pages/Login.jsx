import { App } from "../layouts/App";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("Usuário logado:", userCredential.user);
      alert("Login realizado com sucesso!");
      navigate("/home-page"); // redirect after login
    } catch (error) {
      console.error("Erro ao logar:", error.message);
      alert(error.message);
    }
  };

  return (
    <App>
      <h1 className="text-2xl font-bold text-sky-600 mb-6">Aluritter</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto grid grid-cols-1 gap-4 justify-items-center w-full"
      >
        <label className="w-full flex flex-col">
          <input
            type="email"
            placeholder="email@exemplo.com"
            {...register("email", { required: "Email is required" })}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-sky-300"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
        <br />
        <label className="w-full flex flex-col">
          <input
            type="password"
            placeholder="Senha"
            {...register("password", { required: "Password is required" })}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-sky-300"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </label>
        <br />
        <br />
        <button
          type="submit"
          className="bg-sky-600 text-white font-semibold py-2 px-6 rounded hover:bg-sky-700 transition"
        >
          Sign In
        </button>
        <br />
        <p className="text-center text-sm text-gray-600 mt-2">
          Do not have an account?{" "}
          <a href="/" className="text-sky-600 hover:underline">
            Create now!
          </a>
        </p>
      </form>
    </App>
  );
};
