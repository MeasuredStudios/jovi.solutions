import React from "react";
import styled from "@emotion/styled";

import mediaQueries from "@styles/media";
import customLogo from '../../../../assets/logos/jovi-logo.svg'

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  const _fill = fill === '#000' ? null : fill
  return (
    <LogoContainer>
      <img src={customLogo} style={{height:40, width:40, padding:1, backgroundColor: _fill}} />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }
  ${mediaQueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
