import Sidebar from "../sidebar/page";
 
export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden " style={{backgroundColor :"#f5f5f5"}}>
      <div className="w-full flex-none md:w-64">
        <Sidebar/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}