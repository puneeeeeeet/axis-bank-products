
import Link from "next/link";
export default function Home() {
  return (
    <div  className="flex items-center justify-center h-screen">
      
      <Link href={'/products'} className="bg-[#97144d] px-3 py-2 text-white rounded-md animate-bounce drop-shadow-xl"> Go to the Axis bank website!</Link>
    </div>
  );
}
