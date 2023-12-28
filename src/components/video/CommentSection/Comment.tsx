"use client";

import { Channel, Comment } from "@prisma/client";

import dayjs from "@/vendor/dayjs";
import Avtar from "@/components/shared/Avtar";

interface CommentProps {
  comment: Comment & { channel: Channel };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div key={comment.id} className="flex items-start gap-2">
      <Avtar imageSrc={comment.channel.imageSrc} />
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center text-sm">
          <p className="font-medium">@{comment.channel.handle}</p>
          <p className="font-light text-neutral-400">
            {dayjs(comment.createdAt).fromNow()}
          </p>
        </div>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
