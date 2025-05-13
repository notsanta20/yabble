import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import type { LoginFormData } from "../../../types/types";
import { loginSchema } from "../../../schema/schema";
import { HeadingLarge, FormHeading } from "../../../components/texts/Heading";
import Input from "../../../components/ui/form/Input";
import { ButtonSmall } from "../../../components/ui/buttons/Button";
import { loginApi } from "../../../utils/apis/postRequests";
import alert from "../../../components/ui/alert/alert";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, data, error } = useMutation({
    mutationFn: (formData: LoginFormData) => {
      return loginApi(formData);
    },
    retry: false,
  });

  function onFormSubmit(formData: LoginFormData) {
    const lowerCasedData: LoginFormData = {
      username: formData.username.toLowerCase(),
      password: formData.password.toLowerCase(),
    };

    mutate(lowerCasedData);
  }

  if (error) {
    alert(error.response.data.message);
  }

  if (data) {
    Cookies.set("token", data.data.token);
    navigate("/home", { replace: true });
  }

  return (
    <main className="flex flex-col items-center h-screen p-3">
      <div className="self-start">
        <HeadingLarge />
      </div>
      <div className="h-full flex justify-center items-center">
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <FormHeading text="LOG IN" />
          <Input
            id="username"
            name="username"
            type="text"
            error={errors.username}
            register={register}
          />
          <Input
            id="password"
            name="password"
            type="password"
            error={errors.password}
            register={register}
          />
          <ButtonSmall name="Log In" isPending={isPending} />
        </form>
      </div>
    </main>
  );
}

export default Login;
