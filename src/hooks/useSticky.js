import { useEffect } from 'react';

export const useSticky = $elmRef =>  {
    useEffect(() => {
        const sticky = $elmRef.current ? $elmRef.current.offsetTop : 0;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if ($elmRef.current) {
                if (window.pageYOffset > sticky) {
                    $elmRef.current.classList.add("sticky"); // `sticky` is a TailwindCSS class
                    $elmRef.current.classList.add("top-0");
                } else {
                    $elmRef.current.classList.remove("sticky");
                    $elmRef.current.classList.remove("top-0");
                }
            }
        });
        return () => window.removeEventListener("scroll", scrollCallBack)
    })
}