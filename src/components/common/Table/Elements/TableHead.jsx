function TableHead({ children }) {
  return (
    <div className="grow flex *:flex-1 *:shrink items-center text-sm bg-[#F6F8FA] h-10 *:grow *:px-3">
      {children}
    </div>
  );
}

export default TableHead;
