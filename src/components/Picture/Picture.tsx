import styled from "styled-components";

const Picture = ({
  width,
  height,
  position,
  objectFit,
  objectPosition,
  mb,
  imgAvif,
  imgWebp,
  imgJPG,
  rotate,
  transform,
  radius,
  widthMob,
  heightMob,
}: ImgStyledProps) => {
  return (
    <picture>
      <source srcSet={imgAvif} type="image/avif" />
      <source srcSet={imgWebp} type="image/webp" />
      <ImgStyled
        radius={radius}
        position={position}
        width={width}
        height={height}
        src={imgJPG}
        objectFit={objectFit}
        objectPosition={objectPosition}
        alt="nft"
        mb={mb}
        rotate={rotate}
        transform={transform}
        widthMob={widthMob}
        heightMob={heightMob}
      />
    </picture>
  );
};

export default Picture;

type ImgStyledProps = {
  width?: string;
  height?: string;
  position?: string;
  objectFit?: string;
  objectPosition?: string;
  mb?: string;
  imgAvif?: string;
  imgWebp?: string;
  imgJPG?: string;
  rotate?: string;
  transform?: string;
  radius?: string;
  widthMob?: string;
  heightMob?: string;
};

const ImgStyled = styled.img<ImgStyledProps>`
  border-radius: ${(props) => props.radius || "24px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  position: ${(props) => props.position || "static"};
  object-fit: ${(props) => props.objectFit || "fill"};
  object-position: ${(props) => props.objectPosition || "50% 50%"};
  margin-bottom: ${(props) => props.mb || "0px"};
  transform: ${(props) => props.rotate || "rotate(0deg)"};
  display: inline-block;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopSM}) {
    width: ${(props) => props.widthMob || "100%"};
    height: ${(props) => props.heightMob || "100%"};
  }
`;
