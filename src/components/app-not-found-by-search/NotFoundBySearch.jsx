const NotFoundBySearch = ({ handleShowApps }) => {
  return (
    <div className="max-w-[1440px] flex flex-col gap-6 mx-auto my-20 py-10 px-2.5">
      <h1 className="text-center bg-gray-200 py-4 text-4xl font-bold gray rounded-sm">
        No App Found
      </h1>

      <button
        onClick={handleShowApps}
        className="cursor-pointer font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-3.5 px-10 text-white rounded-md w-max mx-auto"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NotFoundBySearch;
