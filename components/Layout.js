// a simple layout component
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <div>
      <Navbar />
      <main className="layout">{children}</main>
    </div>
  );
}
