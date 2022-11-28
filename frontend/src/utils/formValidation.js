import * as Yup from "yup";

export const EMAIL_REQUIRED = "Email is required.";
export const EMAIL_FORMAT = "Invalid email.";
export const EMAIL_TYPE = "Email must contain only alphabets characters.";
export const NAME_REQUIRED = "Name is required.";
export const NAME_TYPE = "Name must contain only alphabets characters.";
export const PASSWORD_TYPE = "Password must be at string format.";
export const PASSWORD_REQUIRED = "Password is required.";
export const PASSWORD_MIN = "The password must contain a min of 7 characters.";
export const PASSWORD_MAX = "The password must contain a max of 14 characters.";
export const PASSWORD_CONFIRM_REQUIRED = "Please confirm your password";
export const PASSWORD_MATCH = "The passwords do not match.";
export const PHONE_REQUIRED = "Phone is required.";
export const PHONE_TYPE = "Phone must contain only numbers.";
export const PHONE_FORMAT = "Invalid format.";
export const PHONE_MIN = "The phone must contain a min of 10 numbers.";
export const MSG_REQUIRED = "Message is required.";
export const MSG_MIN = "Message must contain a min of 15 characters.";
export const MSG_TYPE = "Phone must be at string format.";
export const ACCESS_REQUIRED = "Must be insert the validation key.";

export const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    msg: "",
    key: ""
}

export const valuesSchema = {
    name: Yup
        .string(NAME_TYPE)
        .required(NAME_REQUIRED),
    email: Yup
        .string(EMAIL_TYPE)
        .email(EMAIL_FORMAT)
        .required(EMAIL_REQUIRED),
    password: Yup
        .string(PASSWORD_TYPE)
        .required(PASSWORD_REQUIRED)
        .min(7, PASSWORD_MIN)
        .max(14, PASSWORD_MAX),
    confirmPassword: Yup
        .string()
        .required(PASSWORD_CONFIRM_REQUIRED)
        .min(7, PASSWORD_MIN)
        .max(14, PASSWORD_MAX)
        .oneOf([Yup.ref('password'), null], PASSWORD_MATCH),
    phone: Yup
        .number(PHONE_TYPE)
        .required(PHONE_REQUIRED)
        .min(10, PHONE_MIN),
    msg: Yup
        .string(MSG_TYPE)
        .required(MSG_REQUIRED)
        .min(10, MSG_MIN),
    access: Yup
        .string()
        .required(ACCESS_REQUIRED),
}

export const formSchema = (valuesSchema) => {
    return Yup.object().shape(valuesSchema);
}