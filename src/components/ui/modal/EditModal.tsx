import Input from "../form/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BioSchema } from "../../../schema/schema";
import { ButtonSmall } from "../buttons/Button";
import { useRef, useState, type ChangeEvent, type RefObject } from "react";
import type { Bio, Error } from "../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getHeader, editBioApi } from "../../../utils/apis/putRequests";
import alert from "../alert/alert";

function EditModal({ ref }: { ref: RefObject<HTMLDialogElement | null> }) {
  const [image, setImage] = useState<File | null>(null);
  const inputLabelRef = useRef<HTMLLabelElement | null>(null);
  const queryClient = useQueryClient();
  const header = getHeader();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BioSchema),
  });

  const editBio = useMutation({
    mutationKey: ["editBio"],
    mutationFn: ({
      editFormData,
      header,
    }: {
      editFormData: Bio;
      header: Header;
    }) => {
      return editBioApi({ editFormData, header });
    },
    onError: (error: Error) => {
      alert(error.response.data.message);
      reset();
      closeModal();
    },
    onSuccess: () => {
      reset();
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
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
      setValue("profilePic", file);
      if (inputLabelRef.current) {
        inputLabelRef.current.textContent = file.name;
      }
    }
  }

  function handleEdit(editedData: Bio) {
    const editFormData = new FormData();
    editFormData.append("bio", editedData.bio);
    editFormData.append("profilePic", image);

    editBio.mutate({ editFormData, header });
  }

  return (
    <dialog
      ref={ref}
      className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] backdrop:bg-black/35 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) text-white"
    >
      <form
        onSubmit={handleSubmit(handleEdit)}
        className="p-3 flex flex-col gap-2"
      >
        <Input
          id="bio"
          name="bio"
          type="text"
          error={errors.bio}
          register={register}
        />
        <label
          htmlFor="profilePic"
          ref={inputLabelRef}
          className="font-[space_grotesk] p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) outline-none focus:bg-(--glass-fill-white) text-center"
        >
          Select Profile Pic
        </label>
        <input
          {...register("profilePic")}
          onChange={handleImgUpload}
          type="file"
          name="profilePic"
          id="profilePic"
          accept="image/png, image/jpg"
          className="hidden"
        />
        <div className="px-2 text-red-400 h-[30px]">
          {typeof errors.profilePic === "undefined"
            ? ""
            : errors.profilePic.message}
        </div>

        <ButtonSmall name="update" isPending={editBio.isPending} />
      </form>
    </dialog>
  );
}

export default EditModal;
