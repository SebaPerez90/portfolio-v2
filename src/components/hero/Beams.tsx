const Beams = () => {
  return (
    <>
      <span className="z-10 absolute h-24 w-24 rounded-full bg-purple-600/70 left-0 top-0 blur-2xl animate-[bouncing2_20s_linear_alternate-reverse_infinite] " />

      <span className="z-10 absolute h-20 w-20 rounded-full bg-green-500/80 right-[50%] top-0 blur-2xl dark:blur-xl animate-[bouncing_18s_linear_alternate-reverse_infinite] dark:opacity-50" />

      <span className="z-10 absolute h-28 w-28 rounded-full right-0 top-0 dark:blur-xl blur-2xl bg-blue-600/60 animate-[bouncing3_17s_linear_alternate-reverse_infinite] dark:opacity-50" />
    </>
  );
};

export default Beams;
