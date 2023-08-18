import imgAvif from "../../assets/img/nft8.avif";
import imgWebp from "../../assets/img/nft1.webp";
import imgJPG from "../../assets/img/nft1.jpg";
import styled from "styled-components";

const Picture = ({
  width,
  height,
  position,
  objectFit,
  objectPosition,
  mb,
}: ImgStyledProps) => {
  return (
    <picture>
      <source srcSet={imgAvif} type="image/avif" />
      <source srcSet={imgWebp} type="image/webp" />
      <ImgStyled
        position={position}
        width={width}
        height={height}
        src={imgJPG}
        objectFit={objectFit}
        objectPosition={objectPosition}
        alt="nft"
        mb={mb}
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
};

const ImgStyled = styled.img<ImgStyledProps>`
  border-radius: 24px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  position: ${(props) => props.position || "static"};
  object-fit: ${(props) => props.objectFit || "fill"};
  object-position: ${(props) => props.objectPosition || "50% 50%"};
  margin-bottom: ${(props) => props.mb || "0px"};
`;
