import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation/Navigation";
import CurrentUserProvider, {
  CurrentUserContext,
} from "@/context/CurrentUserContext";
import getCurrenUser from "@/actions/getCurrentUser";
import CreateChannelModalProvider from "@/context/CreateChannelModal";
import CreateChannelModal from "@/components/shared/Modal/CreateChannelModal";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "YouTube",
  description: "Broadcast Yourself!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrenUser();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CreateChannelModalProvider>
          <CreateChannelModal />
          <CurrentUserProvider user={currentUser}>
            <Navigation />
            <div className="pt-16">{children}</div>
          </CurrentUserProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  );
}
