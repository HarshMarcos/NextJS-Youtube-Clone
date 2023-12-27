"use client";

import Button from "@/components/shared/Button";
import UploadVideoModal from "@/components/shared/Modal/UploadVideoModal";
import VideoPreview from "@/components/studio/upload/VideoPreview";
import VideoUploadForm from "@/components/studio/upload/VideoUploadForm";
import { UploadVideoModalContext } from "@/context/UploadVideoModalContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function UploadPage() {
  const router = useRouter();

  const uploadVideoModal = useContext(UploadVideoModalContext);
  useEffect(() => {
    uploadVideoModal?.onOpen();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      thumbnailSrc: "",
      videoSrc: "",
    },
  });

  const changeValue = (id: string, value: string) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit = () => {};

  return (
    <>
      {/* <UploadVideoModal
        onUpload={(value) => {
          changeValue("videoSrc", value);
        }}
      /> */}
      <div className="flex flex-col px-8 pt-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">Video Details</h1>
          <span className="flex gap-4">
            <Button type="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="box" onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
          </span>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-2">
          <VideoUploadForm />
          <VideoPreview />
        </div>
      </div>
    </>
  );
}
