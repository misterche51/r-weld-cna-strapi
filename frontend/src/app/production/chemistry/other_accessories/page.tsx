"use client";

import { CATALOG_DB } from "@/api/db";
import { PageWrapper } from "../../../layout/pageWrapper";


const Page = () => {
  const { label, description } = CATALOG_DB.chemistry.other_accessories;
  
  return (
    <PageWrapper title={label} description={description}/>
  );
};
export default Page;
