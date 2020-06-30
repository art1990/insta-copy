// react
import {useCallback, useEffect, useState} from 'react';

type TApi = (paging?: {next: string} | null) => Promise<any>;

type TUseFetchData = ({
  api,
  initialValues,
  initialLoad,
  initialParams,
  serializer,
}: {
  api: TApi;
  initialValues?: any;
  initialLoad?: boolean;
  initialParams?: {};
  serializer?: <T>(data: T) => T;
}) => {
  resource: any;
  isLoading: boolean;
  fetchResource: (params?: any) => Promise<any>;
  setResource: (setter: any) => void;
  paging: any;
};

const useFetchData: TUseFetchData = function ({
  api,
  initialValues,
  initialLoad = true,
  initialParams,
  serializer = (data) => data,
}) {
  const [{resource, isLoading, paging}, setValues] = useState({
    isLoading: initialLoad,
    resource: initialValues,
    paging: null,
  });

  const fetchResource = useCallback(
    async (params) => {
      try {
        setValues((state) => ({...state, isLoading: true}));
        const response = await api(params?.isLoadMore && paging);
        setValues((prev) => ({
          resource: params?.isLoadMore
            ? [...prev?.resource, ...serializer(response.data?.data)]
            : serializer(response?.data?.data),
          isLoading: false,
          paging: response?.data.paging,
        }));
        return serializer(response?.data);
      } catch (error) {
        setValues((state) => ({...state, isLoading: false}));
        console.log('API ERROR', error);
      }
    },
    [api, serializer, paging],
  );

  const setResource = useCallback((setter) => {
    setValues((state) => ({
      ...state,
      resource: typeof setter === 'function' ? setter(state.resource) : setter,
    }));
  }, []);

  useEffect(() => {
    if (initialLoad) {
      fetchResource(initialParams);
    }
  }, []);
  return {resource, isLoading, fetchResource, setResource, paging};
};

export default useFetchData;
