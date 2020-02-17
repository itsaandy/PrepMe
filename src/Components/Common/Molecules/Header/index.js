import React from 'react';
import BackButton from '../../Atoms/BackButton';
import Heading1 from '../../Atoms/Heading1';

const Header = ({label, backAction}) => (
  <>
    <BackButton onPress={backAction} />
    <Heading1>{label}</Heading1>
  </>
);

export default Header;
