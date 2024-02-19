import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { getDiscountedPricePercentage } from "@/utils/helper";

const ProductCard = () => {
    return (
        <Link
            href={`/product/${"details"}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={"/assets/product-1.webp"}
                alt={"p.name"}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Product Name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{"250"}
                    </p>

                    {/* {p.original_price && ( */}
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{"300"}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {/* {getDiscountedPricePercentage(
                                    300,
                                    250
                                )} */}
                               30% off
                            </p>
                        </>
                    {/* )} */}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;