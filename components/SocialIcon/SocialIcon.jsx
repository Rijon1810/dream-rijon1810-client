import Image from "next/image";

const SocialIcon = ({ src, alt }) => {
  return (
    <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
      <Image
        className="h-6 w-6"
        src={`/assets/icon/${src}`}
        alt={alt}
        width={24}
        height={24}
      />
    </div>
  );
};
export default SocialIcon;
