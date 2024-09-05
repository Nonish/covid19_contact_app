import ContactForm from "../components/AddContactForm";

const Contact = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center  px-4 pt-40 md:pt-20 bg-white">
      <h1 className="text-2xl font-semibold mb-5">Contact Form Page</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
