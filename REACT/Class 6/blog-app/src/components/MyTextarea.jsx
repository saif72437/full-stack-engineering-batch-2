function MyTextArea({ onChange, value, placeholder }) {
  return (
    <textarea
      className="w-full resize-none outline-none rounded-md border border-slate-300 text-base md:text-lg py-3 px-4 focus:ring-2 focus:ring-indigo-400"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      rows={5}
    ></textarea>
  );
}

export default MyTextArea;


