import React from 'react';
import styled from 'styled-components';

const Layout=({pageTitle,children})=> {
  return <LayoutWrapper>
        <title>{pageTitle}</title>
        <main>
            {children}
        </main>
  </LayoutWrapper>;
}

const LayoutWrapper = styled.div`
position: relative;
`

export default Layout;
