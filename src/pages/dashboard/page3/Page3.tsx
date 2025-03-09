import { Helmet } from 'react-helmet-async';

// sections
import Page3View from 'src/sections/dashboard/page3';

// ==============================|| PAGE3 ||============================== //

const Page3 = () => {
  return (
    <>
      <Helmet>
        <title>Page 3 | Dashboard</title>
      </Helmet>
      <Page3View />
    </>
  );
};

export default Page3; 