import Image from "next/image";
import logo from "./assets/whiteLogo.png"
export default function Home() {

  const sideBarData = [
    {
      id: 1,
      label: "Featured Use Cases",
    },
    {
      id: 2,
      label: "Product API",
    },
    {
      id: 3,
      label: "Cross Cutting",
    },
  ];

  return (
    <div className="bg-[#f4f4f4] flex flex-col">
      <div className="bg-[#97144d] h-8"> </div>
      <div className="bg-[#97144d] h-20 w-fit p-2    top-6 rounded-br-md ">
        <Image src={logo} alt="logo" className=" ml-10 mr-6  h-18 w-56"></Image>
      </div>
      <div className="w-2/12 bg-white h-screen ">
      <div className=" flex flex-col items-center item-justify gap-y-3 mt-10">
      {
        sideBarData.map((item)=>(
          <div key={item.id} className="bg-[#f4f4f4] w-44 p-3  cursor-pointer rounded-md ">
            {item.label}
          </div>
        ))
      }

      </div>
      
      </div>
    </div>
  );
}
