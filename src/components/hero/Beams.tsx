const Beams = () => {
  return (
    <>
      <span className="dark:opacity-50 z-10 absolute h-12 w-12 rounded-full bg-[#d4b0ff]  [box-shadow:0_0_40px_#dcbfff] left-0 top-0 blur-md animate-[bouncing2_14s_linear_alternate-reverse_infinite]"></span>

      <span className="dark:opacity-40 z-10 absolute h-8 w-8 rounded-full bg-[#beffcc]  [box-shadow:0_0_40px_#c8ffd4] right-[50%] top-0 blur-md animate-[bouncing_17s_linear_alternate-reverse_infinite]"></span>

      <span className="dark:opacity-50 opacity-50 z-10 absolute h-24 w-24 rounded-full right-0 top-0 blur-lg dark:bg-dark-sky/50 bg-light-500/50 animate-[bouncing3_19s_linear_alternate-reverse_infinite]"></span>
    </>
  );
};

export default Beams;
