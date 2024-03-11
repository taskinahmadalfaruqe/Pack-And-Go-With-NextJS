"use client";

import Image from "next/image";

const ErrorPage = () => {
    return (
        <div>
            <Image
                src="https://i.ibb.co/z6kw6Lf/404.gif"
                alt="Image"
                width={200}
                height={200}
            />
        </div>
    );
};

export default ErrorPage;