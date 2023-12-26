import Image from "next/image";
import React from "react";

export enum AvtarSize {
  extraSmall = 24,
  small = 32,
  medium = 40,
  large = 128,
}

interface AvtarProps {
  className?: string;
  onClick?: () => void;
  size?: AvtarSize;
  imageSrc?: string | null;
}

const Avtar: React.FC<AvtarProps> = ({
  className,
  onClick,
  imageSrc,
  size = AvtarSize.medium,
}) => {
  return (
    <Image
      alt="Avatar"
      className={`rounded-full aspect-square object-contain ${
        onClick && "cursor-pointer"
      } ${className}`}
      height={size}
      width={size}
      onClick={onClick}
      src={imageSrc || "/images/avatar.png"}
    />
  );
};

export default Avtar;
