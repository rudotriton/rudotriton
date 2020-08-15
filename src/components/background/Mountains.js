import React from 'react';
import styled from 'styled-components';

const LeftMountain = styled.div`
  position: absolute;
  width: 48vw;
  height: 10vh;
  z-index: ${(props) => props.zindex};
  top: 60vh;
	left: 0;
  background: ${(props) => props.theme.black};
  clip-path: polygon(
    0 0%,
    1% 5%,
    3% 11%,
    6% 18%,
    8% 18%,
    11% 15%,
    13% 11%,
    16% 5%,
    18% 11%,
    20% 15%,
    22% 11%,
    25% 7%,
    29% 18%,
    31% 21%,
    33% 25%,
    36% 28%,
    39% 32%,
    41% 34%,
    44% 37%,
    48% 39%,
    50% 43%,
    53% 43%,
    56% 47%,
    60% 51%,
    64% 60%,
    67% 55%,
    71% 60%,
    76% 70%,
    82% 78%,
    89% 89%,
    100% 100%,
    0 100%
  );
`;

const RightMountain = styled.div`
  position: absolute;
  width: 48vw;
  height: 10vh;
  z-index: ${(props) => props.zindex};
  top: 60vh;
  right: 0;
  background: ${(props) => props.theme.black};
  clip-path: polygon(
    0% 100%,
    11% 89%,
    18% 78%,
    24% 70%,
    29% 69%,
    33% 65%,
    36% 60%,
    40% 51%,
    44% 46%,
    47% 39%,
    50% 35%,
    52% 30%,
    56% 33%,
    59% 34%,
    61% 32%,
    64% 28%,
    67% 25%,
    69% 21%,
    71% 18%,
    75% 9%,
    78% 11%,
    80% 15%,
    82% 11%,
    84% 15%,
    87% 11%,
    89% 5%,
    92% 10%,
    94% 10%,
    97% 11%,
    99% 5%,
    100% 0%,
    100% 100%
  );
`;

const Mountains = () => (
  <>
    <LeftMountain zindex="10" />
    <RightMountain zindex="10" />
  </>
);

export default Mountains;
