import instance from ".";

export const postUser = async (data) => {
  try {
    const result = await instance({
      method: "POST",
      url: "/users",
      data: data,
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

export const postLoginToken = async (data) => {
  try {
    const result = await instance({
      method: "POST",
      url: "/users/token",
      data: data,
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
