"use client"
import WilayaSelector from "./selectwilaya";
import { useForm } from "react-hook-form";

export default function BuyNowAlert({alert , setAlert}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const submit = (data) => {
        console.log(data)   
    }
  
    return (
        <section className={`${alert ?"flex":"hidden"} flex-col justify-center items-center rounded-2xl bg-black py-10 px-4  fixed w-full  md:w-2/3 gap-4  translate-y-1/2 bottom-1/2  left-1/2 -translate-x-1/2 `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>setAlert(false)} className="size-10 absolute top-0 right-0 hover:cursor-pointer hover:text-gray">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h1 className="text-2xl font-bold text-center font-josefin">Fill the form with your informations</h1>

            <form className="flex flex-col gap-6 w-full justify-center items-center" onSubmit={handleSubmit(submit)}>
                <div className="flex w-full">
                    <div className="relative w-1/2 ">
                            <input placeholder="👨 first name" type="text" {...register("firstname", { required:{value:true ,message:"First name is required"} , pattern:{ value: /^[A-Za-z]+$/, message: "First name can only contain letters" }})} />
                            {errors.firstname && (<p className="text-red absolute bottom-0 inset-11 left-2 text-xs">{errors.firstname.message}</p>)}
                    </div>
                    <div className="relative w-1/2">
                            <input placeholder="🆔 last name" type="text" {...register("lastname",{required:{value:true , message :"Last name is required"},pattern:{ value: /^[A-Za-z]+$/, message: "First name can only contain letters" }})} />
                             {errors.lastname && (<p className="text-red absolute bottom-0 inset-11 left-2 text-xs">{errors.lastname.message}</p>)}

                    </div>
                </div>
                <div className=" w-full">
                    <div className="relative w-1/2">
                        <input  placeholder="✉️ email" type="email" {...register("email",{required:{value:true , message :"Email is required"}})} />
                        {errors.email && (<p className="text-red absolute bottom-0 inset-11 left-2 text-xs">{errors.email.message}</p>)}
                    </div>
                    <div className="relative w-1/2">
                        <input placeholder="📞 phone" type="tel" {...register("phone",{required:{value:true , message :"Phone is required"},pattern: {value: /^\d{10}$/, message: "Invalid phone number" }})} />
                        {errors.phone && (<p className="text-red absolute bottom-0 inset-11 left-2 text-xs">{errors.phone.message}</p>)}
                    </div>
                </div>
                <WilayaSelector register={register} errors={errors} />
                <div className="relative w-full">
                    <input placeholder="🏠 address" type="text" {...register("address",{required:{value:true , message :"Address is required"}})} />
                    {errors.address && (<p className="text-red absolute bottom-0 inset-11 left-2 text-xs">{errors.address.message}</p>)}
                </div>
                <button className="bg-blue py-2 px-4 rounded-xl" type="submit">
                    Buy now
                </button>
            </form>
        </section>
    );
}
