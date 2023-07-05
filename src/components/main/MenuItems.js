import React from "react";
import { Popover } from "@headlessui/react";
import LazyLoadingImage from "../LazyLoadingImage";
import DashboardLoading from "../loading/DashboardLoading";
import Link from "next/link";

const MenuItems = () => {
    const categories = [
        {
            thumbnail: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M12 16V22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M15 19H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            ),
            title: "Applications",
            description: "New items in 2023",
            route: "/applications",
        },
        {
            thumbnail: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M21.5 2.5L16 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M15 2.5H21.5V9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            ),
            title: "Resources",
            description: "New arrivals of July",
            route: "/resources",
        },
    ];

    return (
        <>
            <div className="p-7 max-h-[40vh] overflow-y-auto scrollbar-hide">
                {categories?.map(
                    ({ _id, title, thumbnail, description, route }) => (
                        <Popover.Panel key={_id}>
                            {({ active }) => (
                                <Link
                                    className={`${
                                        active
                                            ? "bg-gray-100/10 text-slate-900/50 shadow-sm"
                                            : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    href={`${route}`}
                                >
                                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-[#eff9ff] text-[#00a8e7] rounded-md sm:h-12 sm:w-12 object-cover">
                                        <LazyLoadingImage
                                            src={thumbnail?.url}
                                            alt={thumbnail?.public_id}
                                            className={
                                                "h-8 w-8 object-cover max-w-full rounded-md"
                                            }
                                            height={"32"}
                                            width={"32"}
                                        />
                                    </div>
                                    <div className="ml-4 space-y-0.5">
                                        <p className="text-sm font-medium ">
                                            {title}
                                        </p>
                                        <p className="text-xs text-neutral-500 line-clamp-1">
                                            {description}
                                        </p>
                                    </div>
                                </Link>
                            )}
                        </Popover.Panel>
                    )
                )}
            </div>
        </>
    );
};

export default MenuItems;
