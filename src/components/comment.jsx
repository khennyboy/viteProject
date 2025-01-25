import { useContext } from "react";
import { SectionsRef } from "../App";
import image1 from '../assets/images/image-1.jpg'
import Error from "./errors";
import Wishes from "./wishes";
import { useForm } from "react-hook-form";
import useEditForm from "../hooks/useForm";


export default function BirthdayWishes() {
 const {wishesRef} = useContext(SectionsRef)
 const { register, handleSubmit, formState } = useForm();
 const { sendWishes, isSending } = useEditForm()
 const { errors } = formState;
 
 function onSubmit(data) {
  sendWishes(data)
 }
  return (
    <section ref = {wishesRef} className="mt-24 bg-gray-50 py-12 lg:py-16" >
      <Wishes/>
      <h2 className="md:mb-16 mb-12 text-center text-xl font-bold text-orange-500 md:text-2xl">Leave Your Birthday Wishes</h2>
      <div className="grid md:grid-cols-2 px-4 gap-16 items-center ">
      <div className="max-w-md lg:justify-self-center w-full mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <div
                    className="relative border-orange-500/60 border-[1px] border-solid 
                    rounded-[10px] mb-1 has-[:focus]:border-orange-500"
                >
                    <input
                        type="text"
                        id="name"
                        className="focus:outline-0 bg-transparent py-4 w-full block pl-4 peer"
                        placeholder=" "
                        {...register("name", {
                            required: "This feild can't be empty",
                        })}
                    />
                    <label
                        htmlFor="name"
                        className="absolute top-1/2 left-4 -translate-y-1/2 peer-focus:top-0 
                    peer-focus:-translate-y-1/2 transition-all duration-200 ease-linear opacity-70
                     peer-focus:bg-gray-200  z-50 peer-focus:px-4"
                    >
                        Name...
                    </label>
                </div>
                <Error error={errors?.name?.message} />
            </div>

            <div className="mb-6">
                <div
                    className="relative border-orange-500/80 border-[1px] border-solid 
                    rounded-[10px] mb-1 has-[:focus]:border-orange-500 "
                >
                    <textarea
                        id="wishes"
                        className="bg-transparent  block w-full resize-y min-h-[200px] focus:outline-0 overflow-auto px-4 pt-4 peer"
                        placeholder=" "
                        {...register("wishes", {
                            required: "This feild can't be empty",
                        })}
                    />
                    <label
                        htmlFor="wishes"
                        className="absolute top-4 left-4  peer-focus:top-0 
                    peer-focus:-translate-y-1/2 transition-all duration-200 ease-linear opacity-70
                    peer-focus:bg-gray-200 peer-focus:px-4" 
                    >
                        Wishes...
                    </label>
                </div>
                <Error error={errors?.wishes?.message} />
            </div>

            <div className="flex justify-end">
              <button
                    disabled = {isSending}
                    type="submit"
                    className={`${isSending ? 'cursor-not-allowed': 'cursor-pointer'} font-semibold rounded bg-orange-500 px-4 py-3  text-white shadow-md transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-300`}>
                    {isSending ? 'Sending': 'Post Wishes'}
              </button>
            </div>
        </form>
        </div>

      
        <div className="hidden md:block max-w-80 xl:max-w-[340px] transform -rotate-12 justify-self-end lg:justify-self-center">
          <img
            src={image1}
            alt="Birthday Celebration"
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}


// https://plus.unsplash.com/premium_photo-1677221924410-0d27f4940396?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D