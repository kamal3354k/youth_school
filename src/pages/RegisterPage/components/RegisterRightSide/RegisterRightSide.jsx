import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import MailIcon from "../../../../assets/images/Mail.png";
import NameIcon from "../../../../assets/images/Name.png";
import NumberIcon from "../../../../assets/images/Number.png";
import { getAllUser, postUser } from "../../../../config/UserAPI";
import {
  getTodayDateWithtime,
  validateEmail,
  validateMobile,
} from "../../../../custom/function/formInputValidation";
import { toast } from "react-toastify";
import { initaiError, initaiForm } from "./constant";

const RegisterRightSide = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initaiForm);
  const [error, setError] = useState(initaiError);
  const [isApiCall, setIsApiCall] = useState(false);
  useEffect(() => {
    const FetchUserHandler = async () => {
      const response = await getAllUser().catch((err) => console.log(err));
      if (response?.data) {
        setData(response?.data);
      }
    };

    FetchUserHandler();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((pre) => ({ ...pre, [name]: value }));
  };
  const onSubmitHandler = async () => {
    let isError = {};
    await Object.entries(formData)?.map((item) => {
      setError((pre) => ({
        ...pre,
        [item[0]]: !item[1]
          ? "This field is required!"
          : item[0] === "name" && item[1].length < 3
          ? "Name is too short!"
          : item[0] === "name" && item[1].length > 20
          ? "Name is too long!"
          : item[0] === "email" && !validateEmail(item[1])
          ? "Invalid email!"
          : item[0] === "phone" && !validateMobile(item[1])
          ? "Enter valid 10-digit mobile number!"
          : item[0] === "phone" &&
            data?.map((user) => user?.phone == item[1]).includes(true)
          ? "This number already register!"
          : "",
      }));
      isError[item[0]] = !item[1]
        ? true
        : item[0] === "name" && item[1].length < 3
        ? true
        : item[0] === "name" && item[1].length > 20
        ? true
        : item[0] === "email" && !validateEmail(item[1])
        ? true
        : item[0] === "phone" && !validateMobile(item[1])
        ? true
        : item[0] === "phone" &&
          data?.map((user) => user?.phone == item[1]).includes(true)
        ? true
        : false;
    });

    // if no error found
    if (!Object.values(isError).includes(true)) {
      setIsApiCall(true);
      const response = await toast
        .promise(
          postUser({
            ...formData,
            id: data?.length>0?data[data?.length - 1].id + 1:1,
            date: await getTodayDateWithtime(),
          }),
          {
            pending: "Request pending",
            success: "Registeration Successfull!",
          }
        )
        .catch((err) => {
          toast.error(err?.message);
          console.log(err);
        });
      if (response?.status === 200) {
        setFormData(initaiForm);
        setIsApiCall(false);
      }
    }
  };

  const debounceFun = debounce(onSubmitHandler, 500);

  return (
    <div className="Register-Right-Side-container">
      <div className="register-right-content-container">
        <div className="register-right-content-title">Stay Tuned!</div>
        <div className="register-right-content-text">
          Things brewing! Get notified as we launch.
        </div>
        <div className="form-container">
          <div>
            <div className="input-field-container">
              <img src={NameIcon} alt="linkedin image" />

              <input
                name="name"
                placeholder="Full Name"
                type="text"
                onChange={handleChange}
                value={formData?.name}
              />
              <p className="error-text">{error.name}</p>
            </div>
          </div>
          <div>
            <div className="input-field-container">
              <img src={MailIcon} alt="linkedin image" />
              <input
                name="email"
                placeholder="Email ID"
                type="text"
                onChange={handleChange}
                value={formData?.email}
              />
            </div>
            <p className="error-text">{error.email}</p>
          </div>
          <div>
            <div className="input-field-container">
              <img src={NumberIcon} alt="linkedin image" />
              <input
                name="phone"
                placeholder="Mobile No."
                type="text"
                onChange={handleChange}
                value={formData?.phone}
              />
            </div>
            <p className="error-text">{error.phone}</p>
          </div>
          <div className="btn-field-container">
            <input
              type="button"
              disabled={isApiCall}
              onClick={debounceFun}
              value="Keep me posted"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRightSide;
