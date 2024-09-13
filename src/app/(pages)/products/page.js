import data from "../../data/productsData.json";
export default function Products() {
  return (
    <div className="ml-16 mt-10">
      <div className=" text-4xl text-[#97144d] font-semibold ">
        Featured Products
      </div>
      <div className=" mt-3">
        Explore wide range of APIs and choose required APIs that are best suited
        for your use case
      </div>
      <div className=" grid-cols-4 grid">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-11/12 mt-5 h-60 border-2 border-[#97144d] bg-white drop-shadow-xl rounded-md 
            flex flex-col items-center justify-center"
          >
            <div className="text-lg font-semibold">{item.label}</div>
            <div>stars {item.stars}</div>
            <div>
              Average {item.average} ({item.votes} votes)
            </div>
            <div className="px-2 mt-5">{item.description}</div>
            <div className="text-xl font-bold bg-[#97144d] text-white px-3 py-1 rounded-md
             cursor-pointer mt-2 drop-shadow-xl ">
              View More
            </div>
            <ul className="flex">
              {/* {item.items.map((it) => (
                  <div key={it.id} className="flex flex-col w-32 h-32 ">
                    <div>{it.quote}</div>
                  <div>{it.text}</div>
                  </div>
                ))} */}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
