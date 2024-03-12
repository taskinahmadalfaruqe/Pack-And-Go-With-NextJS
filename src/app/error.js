"use client";

import Image from "next/image";

const ErrorPage = () => {
    return (
        <div className="w-full flex justify-center items-center h-[100vh] flex-col gap-10 p-5">
            <div className="text-PrimaryColor font-bold text-2xl max-w-lg text-center capitalize">
                Sorry Something is going to wrong. Please try some time later.
            </div>
            <Image
                className="mx-auto  rounded-md overflow-hidden "
                src="https://i.ibb.co/z6kw6Lf/404.gif"
                alt="Image"
                width={500}
                height={500}
            />
        </div >
    );
};

export default ErrorPage;