import React from "react";
import { useForm } from "react-hook-form";

const useFormSubmit = (onSearch) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => onSearch(data);
  //image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImages[0].backdrop_path}`}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="nav-search"
        placeholder="Search"
        name="name"
        defaultValue=""
        ref={register}
      />
    </form>
  );
};

export default function Search({ onSearch }) {
  return useFormSubmit(onSearch);
}
