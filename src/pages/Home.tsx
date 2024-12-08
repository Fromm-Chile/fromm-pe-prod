export const Home = () => {
  return (
    <>
      <div className="relative bg-cover bg-center bg-no-repeat overflow-hidden mb-8">
      <video
        className="min-w-full min-h-[600px] object-cover top-0 right-0"
        src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/frommgroup.mp4"
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source type="video/mp4" />
      </video>
      <div className="text-white font-bold text-3xl absolute top-[30%] right-0 z-10">
        {/* <p>Transformamos el embalaje en una experiencia</p> */}
      </div>
      </div>
    </>
  );
};
