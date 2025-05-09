import { HeadingLarge, FormHeading } from "../../../components/texts/Heading";
import Input from "../../../components/ui/form/Input";
import Button from "../../../components/ui/buttons/Button";

const tempErr = null;

function Signup() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="self-start">
        <HeadingLarge />
      </div>
      <div className="h-full flex justify-center items-center">
        <form className="flex flex-col gap-2">
          <FormHeading text="SIGN UP" />
          <Input id="username" name="username" type="text" error={tempErr} />
          <Input id="email" name="email" type="text" error={tempErr} />
          <Input
            id="password"
            name="password"
            type="password"
            error={tempErr}
          />
          <Input
            id="confirm-password"
            name="confirm password"
            type="password"
            error={tempErr}
          />
          <Button url="/login" name="Sign Up" />
        </form>
      </div>
    </main>
  );
}

export default Signup;
