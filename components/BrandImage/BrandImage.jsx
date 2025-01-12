import Image from "next/image";
import Link from "next/link";

const BrandImage = () => {
  return (
    <Link href="/">
      <Image
        className=""
        src="/Rijon.png"
        alt="Rijon1810"
        width={162}
        height={42}
        priority
      />
    </Link>
  );
};

export default BrandImage;
