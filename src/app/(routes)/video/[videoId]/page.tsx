import increaseVideoViewCount from "@/actions/increaseVideoViewCount";
import React from "react";

interface VideoPageParams {
  videoId?: string;
}

export default async function VideoPage({
  params,
}: {
  params: VideoPageParams;
}) {
  const { videoId } = params;
  const video = await increaseVideoViewCount({ videoId });
  return <>{video ? <div>{videoId}</div> : <h1>Video not found :(</h1>}</>;
}
