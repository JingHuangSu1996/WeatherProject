import React from 'react';
import fetcher from './utils/fetcher';
import { ErrorHandler } from '../utils/handler';
import request from '../utils/request';
import useSWR from 'swr';
import Result from 'folktale/result';

const useGet = type => {
  const [submitData, setSubmitData] = React.useState(null);
  const [resolved, setResolved] = React.useState(null);

  const { data } = useSWR(
    submitData ? type(submitData) : null,
    request
  );

  // TODO: show alert
  React.useEffect(() => {
    Result.Ok(data)
      .chain(res => Result.try(_ => ErrorHandler(res)))
      .fold(console.warn, setResolved);
  }, [data]);

  return {
    resolver: {
      data: resolved,
      loading: !data && submitData && true,
    },
    handleOnSubmit: setSubmitData,
  };
};

export default useGet;
