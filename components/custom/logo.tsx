import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src="/blocks/yali-lagos.svg"
        alt="logo"
        width={100}
        height={100}
        style={{ width: '150px', height: 'auto' }}
        className="dark:hidden"
      />
      <Image
        src="/blocks/yali-lagos.svg"
        alt="logo"
        width={260}
        height={100}
        style={{ width: 'auto', height: 'auto' }}
        className="dark:block hidden"
      />
    </>
  );
};

export default Logo;
