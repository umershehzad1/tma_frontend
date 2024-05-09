import React from 'react'
import Image from "next/image";
import allbanner from "@/assets/allbanner.png"

const AllBanner = () => {
  return (
   <>
    <Image
                  src={allbanner}
                  width={0}
                  height={0}
                  alt="shipping"
                  style={{ width: "100%", height: "auto" }}
                />
   </>
  )
}

export default AllBanner
