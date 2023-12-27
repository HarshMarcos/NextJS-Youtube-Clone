"use client";
import React, { useContext, useState } from "react";
import SignInButton from "./SignInButton";
import { CurrentUserContext } from "@/context/CurrentUserContext";
import IconButton from "@/components/shared/IconButton";
import { MdOutlineVideoCall } from "react-icons/md";
import Avtar, { AvtarSize } from "@/components/shared/Avtar";
import UserMenu from "./UserMenu";
import { CurrentChannelContext } from "@/context/CurrentChannelContext";
import { CreateChannelModalContext } from "@/context/CreateChannelModalContext";
import { useRouter } from "next/navigation";

const UserOptions = () => {
  const currentUser = useContext(CurrentUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentChannel = useContext(CurrentChannelContext);
  const createChannelModal = useContext(CreateChannelModalContext);

  const router = useRouter();

  const handleUploadClick = () => {
    if (!currentChannel) createChannelModal?.onOpen();
    else router.push("/studio/upload");
  };
  return currentUser ? (
    <>
      <div className="flex items-center gap-4 mr-4">
        <IconButton onClick={handleUploadClick}>
          <MdOutlineVideoCall className="h-7 w-7" />
        </IconButton>
        <Avtar
          size={AvtarSize.small}
          imageSrc={currentUser.image}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        />
      </div>
      {isMenuOpen ? <UserMenu onClose={() => setIsMenuOpen(false)} /> : null}
    </>
  ) : (
    <SignInButton />
  );
};

export default UserOptions;
