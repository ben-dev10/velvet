import * as Form from "@radix-ui/react-form";
import { styled } from "@stitches/react";
import { blackA, violet, mauve } from "@radix-ui/colors";

const FormUI = () => (
  <FormRoot
    className="w-full px-5 md:max-w-[600px]"
    onSubmit={(e) => {
      e.preventDefault();
      alert("Thanks for submitting the form!");
    }}
  >
    <FormField name="Name">
      <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <FormLabel>Name</FormLabel>
        <FormMessage match="valueMissing">Please enter your email</FormMessage>
        <FormMessage match="typeMismatch">
          Please provide a valid email
        </FormMessage>
      </Flex>
      <Form.Control asChild>
        <Input type="text" required />
      </Form.Control>
    </FormField>

    <FormField name="email">
      <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <FormLabel>Email</FormLabel>
        <FormMessage match="valueMissing">Please enter your email</FormMessage>
        <FormMessage match="typeMismatch">
          Please provide a valid email
        </FormMessage>
      </Flex>
      <Form.Control asChild>
        <Input type="email" required />
      </Form.Control>
    </FormField>

    <FormField name="question">
      <Flex css={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <FormLabel>Question</FormLabel>
      </Flex>
      <Form.Control asChild>
        <Textarea />
      </Form.Control>
    </FormField>
    <Form.Submit asChild>
      <Button css={{ marginTop: 10 }}>Give us a call</Button>
    </Form.Submit>
  </FormRoot>
);

const FormRoot = styled(Form.Root, {});

const FormField = styled(Form.Field, {
  display: "grid",
  marginBottom: 10,
});

const FormLabel = styled(Form.Label, {
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "35px",
  color: "var(--accent)",
});

const FormMessage = styled(Form.Message, {
  fontSize: 12,
  color: "#dc2626",
  opacity: 0.8,
});

const Flex = styled("div", { display: "flex" });

const inputStyles = {
  all: "unset",
  boxSizing: "border-box",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  outline: "0px",
  fontSize: 12,
  color: "#1D0281",
  backgroundColor: blackA.blackA2,
  boxShadow: "0 0 0 1px rgba(94,67,194,.5)",
  "&:hover": { boxShadow: `0 0 0 1px rgba(94,67,194,.9)` },
  "&:focus": { boxShadow: `0 0 0 2.5px rgba(94,67,194,.4)` },
  "&::selection": { backgroundColor: "rgba(94,67,194,.8)", color: "white" },
};

const Input = styled("input", {
  ...inputStyles,
  height: 35,
  lineHeight: 1,
  padding: "0 10px",
});

const Textarea = styled("textarea", {
  ...inputStyles,
  resize: "none",
  padding: 10,
});

const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  cursor: "pointer",
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  width: "100%",

  backgroundColor: "white",
  color: violet.violet11,
  boxShadow: `0 2px 5px ${blackA.blackA4}`,
  "&:hover": { backgroundColor: mauve.mauve3 },
  "&:focus": { boxShadow: `0 0 0 2px rgba(94,67,194,.5)` },
});

export default FormUI;
