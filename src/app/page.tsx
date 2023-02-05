'use client';

import ChakraWrapper from './chakrawrapper';
import HeaderComponent from '@/components/Header/page';
import PricingComponent from '@/components/Pricing/page';
import FeatureComponent from '@/components/Features/page';



export default function Home() {
  return (
    <ChakraWrapper>

      <HeaderComponent />
      <PricingComponent />
      <FeatureComponent />

    </ChakraWrapper>
  );
}
