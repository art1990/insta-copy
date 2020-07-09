// react
import { useCallback, useState } from 'react';
// type
import { IInstagramPostProps } from 'components/InstagramPost';

type TApi = (paging?: { next: string } | null) => Promise<any>;

type TUseFetchData = ({
  api,
  initialValues,
  serializer,
}: {
  api: TApi;
  initialValues?: IInstagramPostProps[];
  serializer?: <T>(data: T) => T;
}) => {
  resource?: IInstagramPostProps[];
  isLoading: boolean;
  fetchResource: (params?: any) => Promise<any>;
  setResource: (setter: any) => void;
  paging?: { next: string } | null;
};

const useFetchData: TUseFetchData = function ({
  api,
  initialValues,
  serializer = (data) => data,
}) {
  const [{ resource, isLoading, paging }, setValues] = useState({
    isLoading: false,
    resource: initialValues,
    paging: null,
  });

  const fetchResource = useCallback(
    async (params) => {
      try {
        setValues((state) => ({ ...state, isLoading: true }));
        const response = await api(params?.isLoadMore && paging);
        setValues((prev) => ({
          resource:
            params?.isLoadMore && prev?.resource
              ? [...prev?.resource, ...serializer(response.data?.data)]
              : serializer(response?.data?.data),
          isLoading: false,
          paging: response?.data.paging,
        }));
        return serializer(response?.data);
      } catch (error) {
        setValues((state) => ({ ...state, isLoading: false }));
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

  return { resource, isLoading, fetchResource, setResource, paging };
};

export default useFetchData;
