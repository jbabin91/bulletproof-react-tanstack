import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export function Head({ title = '', description = '' }: HeadProps) {
  return (
    <Helmet>
      <title>{title ? `${title} | ` : ''} Bulletproof React Tanstack</title>
      <meta content={description} name="description" />
    </Helmet>
  );
}
