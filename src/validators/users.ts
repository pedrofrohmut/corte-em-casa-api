import isEmail from "validator/lib/isEmail"
import isUUID from "validator/lib/isUUID"

export const validateEmail = (email: string | undefined): string =>
  email === undefined
    ? "E-mail is not defined"
    : email === ""
    ? "E-mail is blank"
    : !isEmail(email)
    ? "E-mail does not match the pattern or is not complete with @ and domain"
    : ""

export const validateId = (id: string | undefined): string =>
  id === undefined
    ? "Id is not defined"
    : id === ""
    ? "Id is blank"
    : !isUUID(id, 4)
    ? "Id does not match uuid v4 pattern"
    : ""

export const validateName = (name: string | undefined): string =>
  name === undefined
    ? "Name is not defined"
    : name === ""
    ? "Name is blank"
    : name.length < 2
    ? "Name is too short"
    : name.length > 120
    ? "Name is too long"
    : ""

export const validatePassword = (password: string | undefined): string =>
  password === undefined
    ? "Password in not defined"
    : password === ""
    ? "Password is blank"
    : password.length < 4
    ? "Password is too short"
    : password.length > 32
    ? "Password is too long"
    : ""
