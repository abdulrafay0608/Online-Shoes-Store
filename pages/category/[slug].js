import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wapper'
import React, { useState } from 'react'

// import { useRouter } from "next/router";
const Category = () => {
    const [pageIndex, setPageIndex] = useState(1);
    // const route = useRouter();
    // const slug  = route.query;
    // console.log("router.query.slug", slug.slug);
    // console.log("slugslugslugslug", params);
    
    
    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {"Running shoes"}
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {/* {data?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))} */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* products grid end */}

                {/* PAGINATION BUTTONS START */}
                {/* {data?.meta?.pagination?.total > maxResult && ( */}
                <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                    <button
                        className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                        disabled={pageIndex === 1}
                        onClick={() => setPageIndex(pageIndex - 1)}
                    >
                        Previous
                    </button>

                    <span className="font-bold">
                        {/* {`${pageIndex} of 
                        ${data && data.meta.pagination.pageCount
                            }`} */}
                    </span>

                    <button
                        className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                        // disabled={
                        //     pageIndex ===
                        //     (data && data.meta.pagination.pageCount)
                        // }
                        onClick={() => setPageIndex(pageIndex + 1)}
                    >
                        Next
                    </button>
                </div>
                {/* )} */}
                {/* PAGINATION BUTTONS END */}
                {/* {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )} */}
            </Wrapper>
        </div>
    )
}

export default Category 