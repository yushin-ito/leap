import type { ReactNode } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

interface TopLayoutProps {
  children: ReactNode;
}

const TopLayout = async ({ children }: TopLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TopLayout;
