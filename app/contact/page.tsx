"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import PageLayout from "@/components/PageLayout";
import GlobalLoading from "@/components/GlobalLoading";
import ResultModal from "@/components/ResultModal";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
      setPhone("");
      setIsOpen(true);
    }, 500);
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value.replace(/[^0-9\\-]+/g, "");
    setPhone(phone);
  };

  return (
    <PageLayout>
      <GlobalLoading isLoading={isLoading} />
      <ResultModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <div className="relative h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col justify-between gap-5">
              <div className="flex-1">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your name *"
                  className="block w-full py-4 px-4 shadow-sm sm:text-sm border-[#4e807c] bg-[#4e807c] placeholder-white text-white focus:text-white focus:border-[#4e807c]"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">Name is required</span>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email *"
                  className="block w-full py-4 px-4 shadow-sm sm:text-sm border-[#4e807c] bg-[#4e807c] placeholder-white text-white focus:text-white focus:border-[#4e807c]"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    Email is required
                  </span>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={phone}
                  {...register("phone")}
                  onChange={handleChangePhone}
                  placeholder="Phone"
                  className="block w-full py-4 px-4 shadow-sm sm:text-sm border-[#4e807c] bg-[#4e807c] placeholder-white text-white focus:text-white focus:border-[#4e807c]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  {...register("subject")}
                  placeholder="Subject"
                  className="block w-full py-4 px-4 shadow-sm sm:text-sm border-[#4e807c] bg-[#4e807c] placeholder-white text-white focus:text-white focus:border-[#4e807c]"
                />
              </div>
            </div>
            <img src="/images/contact.png" alt="contact" className="w-full h-full object-cover" />
            <div className="md:col-start-1 md:col-end-3">
              <div className="md:grid grid-cols-2 gap-5">
                <div>
                  <textarea
                    className="block w-full border-[#4e807c] bg-[#4e807c] placeholder-white focus:text-white text-white focus:border-[#4e807c]"
                    rows={6}
                    placeholder="Your messenge"
                    {...register("messenge")}
                  />
                </div>
                <div className="flex flex-col items-end justify-between">
                  <div className="text-right">
                    <p>KAI STUDIO</p>
                    <p>DESIGN AND CONSTRUCTION</p>
                  </div>
                  <div className="text-right">
                    <p>278/9c Lê Lợi, 7 ward , Vũng Tàu city ( Ad )</p>
                    <a
                      href="tel:O977979000"
                      className="text-[#4e807c] font-medium block"
                    >
                      O97.79.79.000 ( T )
                    </a>
                    <a href="mailto:info@kaistudio.vn">info@kaistudio.vn ( E )</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-start-1 md:col-end-2">
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#4e807c] focus:outline-none text-white py-2 px-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
