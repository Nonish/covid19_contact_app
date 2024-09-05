import { useParams } from "react-router-dom";
import EditContactForm from "../components/EditContactForm";

const EditContact = () => {
  const { id } = useParams();

  return (
    <div className="flex min-h-screen w-full px-4 pt-40 md:pt-20  bg-white">
      <EditContactForm paramsId={id} />
    </div>
  );
};

export default EditContact;
