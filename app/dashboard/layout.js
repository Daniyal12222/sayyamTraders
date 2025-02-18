import Sidebar from "../sidebar/page";
 
export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden relative " style={{backgroundColor :"#f5f5f5"}}>
      <div className="w-full flex-none md:w-64 absolute z-10  sm:top-0 sm:left-0 md:relative">
        <Sidebar/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 mt-20 z-0 ">{children}</div>
    </div>
  );
}