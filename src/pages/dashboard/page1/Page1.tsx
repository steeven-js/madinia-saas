import { Helmet } from 'react-helmet-async';

// sections
import Page1View from 'src/sections/dashboard/page1';

// ==============================|| PAGE1 ||============================== //

const Page1 = () => {
  return (
    <>
      <Helmet>
        <title>Page 1 | Dashboard</title>
      </Helmet>
      <Page1View />
    </>
  );
};

export default Page1; 