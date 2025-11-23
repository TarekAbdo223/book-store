import axios from "axios";
import { Alert } from "react-native";

const endpointURL = "https://69186e1521a96359487003a9.mockapi.io/books";

export const getListOfBooks = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};

export const getBookByID = async ({ id, onSuccess, onError }) => {
  try {
    const response = await axios.get(`${endpointURL}/${id}`);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};

export const deleteBookByID = async ({ id, onSuccess, onError }) => {
  try {
    const response = await axios.delete(`${endpointURL}/${id}`);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
    Alert.alert("Book Deleted Successfully");
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};

export const postBookDetails = async ({ onSuccess, onError, body }) => {
  try {
    const response = await axios.post(endpointURL, body);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};

export const updateBookByID = async ({ id, book, onSuccess, onError }) => {
  try {
    const response = await axios.put(`${endpointURL}/${id}`, book);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};
