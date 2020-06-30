// react
import {useCallback, useEffect, useState} from 'react';

type TApi = (params: any) => Promise<any>;

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
  fetchResource: (params: any) => Promise<any>;
  setResource: (setter: any) => void;
};

const useFetchData: TUseFetchData = function ({
  api,
  initialValues,
  initialLoad = true,
  initialParams,
  serializer = (data) => data,
}) {
  const [{resource, isLoading}, setValues] = useState({
    isLoading: initialLoad,
    resource: initialValues,
  });

  const fetchResource = useCallback(
    async (params) => {
      try {
        setValues((state) => ({...state, isLoading: true}));
        const response = await api(params);
        setValues({
          resource: serializer(response.data?.data),
          isLoading: false,
        });
        return serializer(response.data);
      } catch (error) {
        setValues((state) => ({...state, isLoading: false}));
        console.log('API ERROR', error);
      }
    },
    [api, serializer],
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
  return {resource, isLoading, fetchResource, setResource};
};

export default useFetchData;
