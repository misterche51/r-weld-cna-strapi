"use client";

import { PageWrapper } from "../../../layout/pageWrapper";
import DB from "@/api/db";


const Page = () => {
  const { header } = DB.catalog.chemistry.data.other_accessories;
  const {label, description} = header
  
  return (
    <PageWrapper title={label} description={description}/>
  );
};
export default Page;
