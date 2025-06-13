import Header from "@/components/Header";
import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <DashBoard />
      <Footer />
    </div>
  );
}
