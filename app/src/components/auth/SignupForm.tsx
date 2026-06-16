import { Button, Field, Input, Label } from "@headlessui/react";

const SignupForm = () => {
  return (
    <div>
      <Field>
        <Label>Name</Label>
        <Input type="text" name="name" className={"border border-white"} />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="email" name="email" className={"border border-white"} />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          className={"border border-white"}
        />
      </Field>
      <Button>sign up</Button>
    </div>
  );
};

export default SignupForm;
