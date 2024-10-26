"use client";

export const EmailField = () => {
  return (
    <form
      className="flex items-center gap-x-3"
      onSubmit={(e) => {
        e.preventDefault();
        console.info("submitted");
      }}
    >
      <input
        type="text"
        placeholder="Enter email address"
        className="rounded px-6 py-[10px] text-lg outline-[#D4DAE2]"
      />
      <button className="rounded bg-[#F94962] px-6 py-[10px] text-xl font-bold capitalize text-white hover:bg-[#F94962]/90">
        subscribe
      </button>
    </form>
  );
};
