import { Button, Field, Input, Label } from "@headlessui/react";

const LoginForm = () => {
  return (
    <div>
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
      <Button>login</Button>
    </div>
  );
};

export default LoginForm;
