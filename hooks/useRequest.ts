import { api } from "@/services/api";
import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

type Props = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: any;
  auto?: boolean;
};

export function useRequest<T>({
  method = "GET",
  url,
  auto = true,
  body,
  headers,
}: Props): {
  data: T | undefined;
  error: Error | AxiosError | undefined;
  loading: boolean;
  fetchData: () => Promise<void>;
} {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.request({
        method,
        url,
        data: body,
        headers,
      });

      setData(response.data);
    } catch (err) {
      setError(err as never);
    } finally {
      setLoading(false);
    }
  }, [body, headers, method, url]);

  useEffect(() => {
    if (auto) {
      fetchData();
    }
  }, [auto, fetchData]);

  return { data, error, loading, fetchData };
}
