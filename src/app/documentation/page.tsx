"use client";
import DB from "@/api/db";
import { PageWrapper } from "../layout/pageWrapper";
import { DocumentationList } from "./components/documentationList";

export default function DocumentationPage() {
  return <PageWrapper title='Документация' withUnderline content={<DocumentationList list={DB.downloads}/>} />
} 
