import axios from "axios";

export const postUser = async (data) => {
  try {
    const result = await axios({
      method: "POST",
      url: "http://localhost:8000/users",
      data: data,
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
