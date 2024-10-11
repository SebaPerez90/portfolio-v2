const Beams = () => {
  return (
    <>
      <span className="dark:opacity-50 z-10 absolute h-20 w-20 rounded-full bg-purple-300  [box-shadow:0_0_40px_#dcbfff] left-0 top-0 blur-xl animate-[bouncing2_14s_linear_alternate-reverse_infinite]"></span>

      <span className="dark:opacity-40 z-10 absolute h-10 w-10 rounded-full bg-pink-500  [box-shadow:0_0_40px_#c8ffd4] right-[50%] top-0 blur-lg animate-[bouncing_17s_linear_alternate-reverse_infinite]"></span>

      <span className="dark:opacity-50 opacity-50 z-10 absolute h-24 w-24 rounded-full right-0 top-0 blur-2xl [box-shadow:0_0_40px_#dcbfff] dark:bg-dark-sky/50 bg-blue-600 animate-[bouncing3_19s_linear_alternate-reverse_infinite]"></span>
    </>
  );
};

export default Beams;
