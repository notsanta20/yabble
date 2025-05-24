import { ButtonSmall } from "../buttons/Button";
import { useState, type ChangeEvent, type RefObject } from "react";
import Input from "../form/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../../../schema/schema";
import type { Error, Header, PostFormData } from "../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getHeader, createPostApi } from "../../../utils/apis/postRequests";
import alert from "../alert/alert";

function PostModal({ ref }: { ref: RefObject<HTMLDialogElement | null> }) {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File | null>(null);
  const header = getHeader();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const postData = useMutation({
    mutationKey: ["post"],
    mutationFn: ({
      postFormData,
      header,
    }: {
      postFormData: PostFormData;
      header: Header;
    }) => {
      return createPostApi(postFormData, header);
    },
    onError: (error: Error) => {
      alert(error.response.data.message);
      reset();
      closeModal();
    },
    onSuccess: () => {
      reset();
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["allPost"] });
    },
  });

  function closeModal() {
    if (ref.current) {
      ref.current.close();
    }
  }

  function handleImgUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setValue("img", file);
    }
  }

  function handleOnSubmit(data: PostFormData) {
    const postFormData = new FormData();
    postFormData.append("title", data.title);
    postFormData.append("description", data.description);
    postFormData.append("img", image);

    postData.mutate({ postFormData, header });
  }

  return (
    <dialog
      ref={ref}
      className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] backdrop:bg-black/35 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur)"
    >
      <form
        className="flex flex-col gap-2 p-3 text-white"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <h1 className="text-white text-sm text-center font-[Syncopate] font-bold">
          Create Post
        </h1>
        <Input
          type="text"
          name="title"
          id="title"
          error={errors.title}
          register={register}
        />
        <textarea
          {...register("description")}
          name="description"
          id="description"
          placeholder="add description"
          cols={50}
          rows={10}
          className="font-[space_grotesk] p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) outline-none focus:bg-(--glass-fill-white)"
        ></textarea>
        <div className="px-2 text-red-400 h-[30px]">
          {typeof errors.description === "undefined"
            ? ""
            : errors.description.message}
        </div>
        <input
          {...register("img")}
          onChange={handleImgUpload}
          type="file"
          name="postImg"
          accept="image/png, image/jpg"
          className="font-[space_grotesk] p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) outline-none focus:bg-(--glass-fill-white)"
        />
        <div className="px-2 text-red-400 h-[30px]">
          {typeof errors.img === "undefined" ? "" : errors.img.message}
        </div>
        <ButtonSmall name="Add Post" isPending={postData.isPending} />
      </form>
    </dialog>
  );
}

export default PostModal;
