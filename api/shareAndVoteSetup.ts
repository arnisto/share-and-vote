import axios from "axios";

const get = async (params: any) => {
  const { endPoint = "/", query } = params;
  const url = process.env.NEXT_PUBLIC_BACKEND_URL + endPoint;
  const response = await axios
    .get(url, { params: query })
    .then((res: any) => {
      if (res.status === 200) return { success: true, data: res.data };
      return {
        success: false,
      };
    })
    .catch((err) => {
      return { success: false, status: "res.status", message: err };
    });
  return response;
};

const deleteItem = async (params: any) => {
  const { endPoint = "/" } = params;
  const url = process.env.NEXT_PUBLIC_BACKEND_URL + endPoint;
  const response = await axios
    .delete(url)
    .then((res) => {
      if (res.status === 200) return { success: true, data: res.data };
      return {
        success: false,
      };
    })
    .catch((err: any) => {
      return { success: false, status: "res.status", message: err };
    });
  return response;
};

const post = async (params: any) => {
  const { endPoint = "/", body } = params;
  const url = process.env.NEXT_PUBLIC_BACKEND_URL + endPoint;
  const response = await axios
    .post(url, body)
    .then((res) => {
      if (res.status === 200) return { success: true, data: res.data };
      return {
        success: false,
      };
    })
    .catch((err) => {
      return { success: false, status: "res.status", message: err };
    });
  return response;
};

const patch = async (params: any) => {
  const { endPoint, query, body } = params;
  const url = process.env.NEXT_PUBLIC_BACKEND_URL + endPoint;
  const response = await axios
    .patch(url, body, { params: query })
    .then((res) => {
      if (res.status === 200) return { success: true, data: res.data };
      return {
        success: false,
        status: "res.status",
        message: "message depend on res.status",
      };
    })
    .catch((err: any) => {
      return { success: false, status: "res.status", message: err };
    });
  return response;
};

const shareAndVoteSetup = {
  get,
  post,
  patch,
  deleteItem,
};
export default shareAndVoteSetup;
