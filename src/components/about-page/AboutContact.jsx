import BadgeUI from "../ui/BadgeUI";
import FormUI from "../ui/FormUI";

export default function Contact() {
  return (
    <div className="about-hero wrapper p-4 container-4xl">
      <div className="flex justify-center">
        <BadgeUI text="Contact Us" accent="accent" />
      </div>
      <div className="my-3">
        <h3 className="h4">Have Something to say? Contact Us below. </h3>
        <p className="text-gray-500">
          Fill the forms below with a request or question and we&apos;ll get
          black to you within 24hrs.{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <FormUI />
      </div>
    </div>
  );
}
