/**
 * USAGE: 
 * 
 * @media ${DEVICE.laptop} {  // -> "@media (min-width: ${BREAKPOINT.laptop})" -> "@media (min-width: 1024px)"
 *   max-width: 800px;
 * }
 * 
 */

const BREAKPOINT = {
  mobileXS : '320px',
  mobileSM : '375px',
  mobileLG : '425px',
  tablet   : '768px',
  laptop   : '1024px',
  desktop  : '1440px',
  tvscreen : '2560px'
}

export const DEVICE = {
  mobileXS : `(min-width: ${BREAKPOINT.mobileXS})`,
  mobileSM : `(min-width: ${BREAKPOINT.mobileSM})`,
  mobileLG : `(min-width: ${BREAKPOINT.mobileLG})`,
  tablet   : `(min-width: ${BREAKPOINT.tablet})`,
  laptop   : `(min-width: ${BREAKPOINT.laptop})`,
  desktop  : `(min-width: ${BREAKPOINT.desktop})`,
  tvscreen : `(min-width: ${BREAKPOINT.tvscreen})`
};


