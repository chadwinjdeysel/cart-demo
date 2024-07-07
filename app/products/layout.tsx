import { Navbar } from "@/components/component/navbar";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (

    <>
        <nav>
            <Navbar />
        </nav>

        <main>
            {children}
        </main>
    </>
    
    ); }
