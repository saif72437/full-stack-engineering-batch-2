function MyTextArea({onChange, value,  placeholder}) {
  return (
      <textarea className='w-2xl outline-none rounded-md border-none ring-1 ring-slate-300 text-xl py-2 px-3' placeholder={placeholder}
      
        onChange={onChange}
        value={value}

        rows={5}

      ></textarea>
  )
}

export default MyTextArea
