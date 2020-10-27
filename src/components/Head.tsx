import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: ReactNode,
}

export const Head : React.FunctionComponent<Props> = ({ title }) => (
  <Helmet title={`${title} — Filip Cordas`} />
);


export default Head;
