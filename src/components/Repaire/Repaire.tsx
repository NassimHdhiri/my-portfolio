

export default function Repaire() {
  return (
    <div className=" absolute top-0 left-0 right-0  flex justify-center  ">
            {/* <div className="grid grid-cols-12 gap-10">
            {Array(12)
                .fill(0)
                .map((_, index) => (
                <div
                    key={index}
                    className="w-[20px] h-[6800px] bg-blue-500 bg-opacity-50 text-white flex items-center justify-center"
                >
                    {index + 1}
                </div>
                ))}
            </div> */}

            <div className="grid grid-cols-12 gap-5">
            {Array(12)
                .fill(0)
                .map((_, index) => (
                <div
                    key={index}
                    className="w-[75px] bg-blue-200 h-[6800px] bg-opacity-50 text-white flex items-center justify-center"
                >
                    {index + 1}
                </div>
                ))}
            </div>
    </div>
  )
}