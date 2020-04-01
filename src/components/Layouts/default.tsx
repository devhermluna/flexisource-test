import React from 'react';

interface Props {}

const TopbarMenu = styled.div`
  margin-bottom: 30px;
`;

const FooterMenu = styled.div`
  border-top: 1px solid black;
  padding-top: 20px;
  margin-top: 30px;
`;

const defaultLayout = (props: Props) => {
  return <div></div>;
};

export default defaultLayout;
