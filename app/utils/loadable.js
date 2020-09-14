import React from 'react';
import dynamic from 'next/dynamic';
import Loader from 'components/Loader';

const loadable = importFunc =>
  dynamic(importFunc, { loading: () => <Loader /> });

export default loadable;
