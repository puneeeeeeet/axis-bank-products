import Navbar from '../components/Navbar'

export default function DashboardLayout({
    children, // will be a page or nested layout
  }){
    return (
      <div className="flex bg-[#f9f9f9] ">
      {/* Sidebar (Navbar) */}
      <div className="">
        <Navbar />
      </div>

      {/* Main content area */}
      <div className="w-10/12 bg-[#f9f9f9] mt-20 ml-48">
        {children} {/* This is where the product page content will be rendered */}
      </div>
    </div>
    )
  }