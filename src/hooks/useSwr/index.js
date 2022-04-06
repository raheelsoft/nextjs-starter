import useSWR from "swr";
import { message } from "antd";

import { BASE_URL } from "../../utils/constants";

const fetcher = async (...args) =>
  fetch(args[0], args[1]).then((res) => res.json());

const useApi = ({
  url,
  options = {},
  beforeFetch = null,
  afterFetch = null,
}) => {
  options["headers"] = {
    "Content-Type": "application/json",
    "AUTH-TOKEN": "your token",
  };
  if (!options?.method) {
    options["method"] = "GET";
  }
  if (url) {
    url = BASE_URL + url;
  }

  let { data, error } = useSWR(url ? [url, options] : null, fetcher);

  if (afterFetch) {
    data = afterFetch(data);
  }
  if (data?.message) {
    message.success(data?.message);
  }
  if (error) {
    message.error(error.message);
    return { loading, data: null };
  }

  const loading = !data && !error && url;

  return {
    loading,
    data,
  };
};

export default useApi;
