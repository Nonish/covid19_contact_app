import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/slice/contactSlice/index";

import { Contact } from "../utils/types";

const AddContactForm = () => {
  const uniqueId = uuidv4();
  const dispath = useDispatch();

  const [contactData, setContactData] = useState<Contact>({
    firstName: "",
    lastName: "",
    status: "inactive",
    id: uniqueId,
  });
  const [isContactValid, setIsContactValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // check if all the input fields have been filled or not
    const validContactData = Object.values({
      ...contactData,
      [name]: value,
    }).some((value) => value.trim() === "");

    setIsContactValid(!validContactData);
  };

  const handleForm = (e: any) => {
    e.preventDefault();
    if (isContactValid) {
      dispath(addContact(contactData));

      // update the form input value
      const newUUID = uuidv4();
      setContactData({
        firstName: "",
        lastName: "",
        status: "inactive",
        id: newUUID,
      });

      window.alert("Contact added successfully!");
    }
  };

  return (
    <div className="w-full">
      <form className="mx-auto w-full max-w-xl rounded-lg bg-gray-200 p-6 shadow-md">
        <div className="mb-4">
          <label className="mb-2 block font-semibold" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={contactData.firstName}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-semibold" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={contactData.lastName}
            onChange={handleChange}
            required
            className="w-full rounded-md border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-semibold">Status</label>
          <div className="flex">
            <label className="mr-4">
              <input
                className="mr-4"
                type="radio"
                value="active"
                name="status"
                checked={contactData.status === "active"}
                onChange={handleChange}
              />
              Active
            </label>
            <label className="mr-4">
              <input
                className="mx-4"
                type="radio"
                value="inactive"
                name="status"
                checked={contactData.status === "inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500"
          onClick={handleForm}
        >
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default AddContactForm;
