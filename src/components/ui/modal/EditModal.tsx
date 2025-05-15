import Input from "../form/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BioSchema } from "../../../schema/schema";
import { ButtonSmall } from "../buttons/Button";
import type { RefObject } from "react";
import type { EditBioProps, Bio } from "../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getHeader, editBioApi } from "../../../utils/apis/putRequests";
import alert from "../alert/alert";

function EditModal({ ref }: { ref: RefObject<HTMLDialogElement | null> }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BioSchema),
  });

  const header = getHeader();
  const queryClient = useQueryClient();

  const editBio = useMutation({
    mutationKey: ["editBio"],
    mutationFn: (editData: EditBioProps) => {
      return editBioApi(editData);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
    onSuccess: () => [
      queryClient.invalidateQueries({ queryKey: ["currentUser"] }),
    ],
  });

  function handleEdit(editedData: Bio) {
    editBio.mutate({ editedData, header });
    reset();
    if (ref.current) {
      ref.current.close();
    }
  }

  return (
    <dialog
      ref={ref}
      className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] backdrop:bg-black/35 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur)"
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

        <ButtonSmall name="update" isPending={editBio.isPending} />
      </form>
    </dialog>
  );
}

export default EditModal;
