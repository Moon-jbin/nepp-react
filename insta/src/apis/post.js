import instance from ".";

export const getPostsMain = async (data) => {
  try {
    const result = await instance({
      method: "GET",
      url: "/posts/main",
      data: data,
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
