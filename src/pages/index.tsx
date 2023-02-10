import * as React from 'react';

import Seo from '@/components/atoms/seo/Seo';
import Layout from '@/components/layout/Layout';
import Class from '@/components/molecules/Class';
import Crousel from '@/components/molecules/Crousel';
import Footer from '@/components/molecules/Footer';
import Goals from '@/components/molecules/Goals';
import Main from '@/components/molecules/Main';
import Navbar from '@/components/molecules/Navbar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !Guide: -> Select !Guide: and CMD + SHIFT + F
// Before you begin editing, follow all comments with `Guide`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div className=' flex justify-center  '>
      <div className='w-full max-w-[1400px]'>
        <Layout>
          {/* <Seo templateTitle='Home' /> */}
          <Seo />
          <div className=''>
            <Navbar />
          </div>
          <div className=' bg-[#fbfcf7]'>
            <Main />
          </div>
          <Goals />
          <Class />
          <Crousel />
          <div className=' bg-[#635d5d]'>
            <Footer />
          </div>
        </Layout>
      </div>
    </div>
  );
}
