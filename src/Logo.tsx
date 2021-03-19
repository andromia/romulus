import React, { ReactElement } from 'react';
import Image from 'react-bootstrap/Image';

const Logo = (): ReactElement => {
  return <Image src="../assets/icon.png" width="200px" alt="icon" />;
};

export default Logo;