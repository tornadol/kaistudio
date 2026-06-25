import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
