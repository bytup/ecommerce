import { hideMiniCart } from "@/store/features/cart";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import LazyLoadingImage from "../LazyLoadingImage";
import Link from "next/link";

const MiniCartModal = ({ isOpen }) => {
    const dispatch = useDispatch();
    const { currentProduct } = useSelector((state) => state.cart);

    function closeModal() {
        dispatch(hideMiniCart());
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-end"></div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto z-50">
                        <div className="flex min-h-full items-start justify-end p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Product Added to Cart
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {/* {JSON.stringify(
                                            currentProduct,
                                            null,
                                            2
                                        )} */}
                                        <div
                                            key={currentProduct?._id}
                                            className="flex py-5 last:pb-0"
                                        >
                                            <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                                <LazyLoadingImage
                                                    src={
                                                        currentProduct?.product
                                                            ?.thumbnail?.url
                                                    }
                                                    alt={
                                                        currentProduct?.product
                                                            ?.thumbnail
                                                            ?.public_id
                                                    }
                                                    height={"96"}
                                                    width={"80"}
                                                    className={
                                                        "object-contain object-center h-24 w-20"
                                                    }
                                                />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <h3 className="text-base font-medium">
                                                                <Link
                                                                    className="text-base font-medium line-clamp-2"
                                                                    href={`/product/${currentProduct?.title
                                                                        ?.toLowerCase()
                                                                        .replace(
                                                                            /\s/g,
                                                                            "-"
                                                                        )}/${
                                                                        currentProduct?.InstanceId
                                                                    }`}
                                                                >
                                                                    {
                                                                        currentProduct?.ResourceGroup
                                                                    }
                                                                </Link>
                                                            </h3>
                                                            <p className="text-sm text-gray-500">
                                                                {
                                                                    currentProduct?.Location
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="mt-0.5">
                                                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                                <span className="text-green-500 !leading-none">
                                                                    $
                                                                    {Number(
                                                                        currentProduct?.Cost
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">
                                                        Qty{" "}
                                                        {
                                                            currentProduct?.quantity
                                                        }
                                                    </p>
                                                    {/* <div className="flex">
                                                        <button
                                                            type="button"
                                                            className="font-medium text-red-600"
                                                            onClick={handleRemove(
                                                              currentProduct
                                                            )}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default MiniCartModal;
