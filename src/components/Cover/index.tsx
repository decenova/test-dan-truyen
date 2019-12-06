import styled from 'styled-components';

interface Props {
  image?: string,
  width?: string,
  height?: string,
}

const URL_IMAGE_PREFIX = 'https://d2jcbbv6tauwnr.cloudfront.net';

export const Cover = styled.div<Props>`
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  background-image: url("${props => props.image ? URL_IMAGE_PREFIX + props.image : 'https://via.placeholder.com/240'}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
