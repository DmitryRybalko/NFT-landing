import sprite from "../../assets/svg/sprite.svg";

type SVGiconPropsType = {
  symbolId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const SVGicon = ({ symbolId, width, height, viewBox }: SVGiconPropsType) => {
  return (
    <svg
      width={width || "196"}
      height={height || "48"}
      viewBox={viewBox || "0 0 196 48"}
    >
      <use href={`${sprite}#${symbolId}`} />
    </svg>
  );
};

export default SVGicon;
