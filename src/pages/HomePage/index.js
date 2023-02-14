import React from 'react';
import Container from '@mui/material/Container';

import PricingForm from '@molecules/PricingForm';

function HomePage() {
  return (
    <Container maxWidth={'sm'}>
      <PricingForm />
    </Container>
  );
}

export default HomePage;
