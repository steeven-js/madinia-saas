import { Helmet } from 'react-helmet-async';

// sections
import Page2View from 'src/sections/dashboard/page2';

// ==============================|| PAGE2 ||============================== //

const Page2 = () => {
  return (
    <>
      <Helmet>
        <title>Page 2 | Dashboard</title>
      </Helmet>
      <Page2View />
    </>
  );
};

export default Page2; 