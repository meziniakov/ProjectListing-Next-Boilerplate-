import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Home = () => {
  const router = useRouter();

  return (
<Main>
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a>
      <h1 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h1>
</Main>
  );
};

export default Home;
