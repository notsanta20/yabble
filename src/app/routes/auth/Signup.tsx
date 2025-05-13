import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import type { Header, SignFormData } from "../../../types/types";
import { signupSchema } from "../../../schema/schema";
import { HeadingLarge, FormHeading } from "../../../components/texts/Heading";
import Input from "../../../components/ui/form/Input";
import { ButtonSmall } from "../../../components/ui/buttons/Button";
import { getHeader, signupApi } from "../../../utils/apis/postRequests";
import alert from "../../../components/ui/alert/alert";

function Signup() {
  const navigate = useNavigate();
  const header = getHeader();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["signup"],
    mutationFn: ({ data, header }: { data: SignFormData; header: Header }) => {
      return signupApi(data, header);
    },
    onSettled: (error) => {
      if (error) {
        alert(error.response.data.message);
      } else {
        navigate("/login", { replace: true });
      }
    },
  });

  function onFormSubmit(formData: SignFormData) {
    const data: SignFormData = {
      username: formData.username.toLowerCase(),
      email: formData.email.toLowerCase(),
      password: formData.password.toLowerCase(),
      confirmPassword: formData.confirmPassword.toLowerCase(),
    };
    mutate({ data, header });
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
          <FormHeading text="SIGN UP" />
          <Input
            id="username"
            name="username"
            type="text"
            error={errors.username}
            register={register}
          />
          <Input
            id="email"
            name="email"
            type="text"
            error={errors.email}
            register={register}
          />
          <Input
            id="password"
            name="password"
            type="password"
            error={errors.password}
            register={register}
          />
          <Input
            id="confirmPassword"
            name="confirm password"
            type="password"
            error={errors.confirmPassword}
            register={register}
          />
          <ButtonSmall name="Sign Up" isPending={isPending} />
        </form>
      </div>
    </main>
  );
}

export default Signup;
