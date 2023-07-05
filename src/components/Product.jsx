import Link from "next/link";
import React from "react";

const Product = ({ title, href }) => {
    return (
        <div className="relative flex-shrink-0 bg-slate-50 rounded-xl p-4">
            <Link href={href}>
                <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
                    {title}
                </h2>
            </Link>
            <div className="flex flex-row-reverse">
                <Link href={href}>
                    <button class="mt-4 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  bg-white text-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 ml-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-3.5 h-3.5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                            ></path>
                        </svg>
                        <span class="ml-1">Quick view</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Product;
