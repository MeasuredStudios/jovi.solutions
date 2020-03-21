import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import mediaQueries from '@styles/media';

const Logo = ({ fill = '#fff' }: { fill?: string }) => {
  const _fill = fill === '#000' ? null : fill;
  return (
    <LogoContainer>
      <BrandText>JOVI</BrandText>
    </LogoContainer>
  );
};

export default Logo;

const commonStyles = (p) => css`
  font-weight: bold;
  color: ${p.theme.colors.primary};
  font-family: ${p.theme.fonts.sansserif};
`;

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

const BrandText = styled.h4`
  font-size: 1 rem;
  word-break: keep-all;
  font-size: 18px;
  line-height: 1.45;
  font-weight: bold;
  ${commonStyles};
`;
