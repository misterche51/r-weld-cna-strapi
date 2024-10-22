"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Heading from "@/app/shared/heading/heading";

import { PageWrapper } from "../layout/pageWrapper";
import { useSearchParams } from "next/navigation";
import CATALOG_DB from "@/api/catalog/db";
import { DOWNLOADS_DB } from "@/api/documentation";
import DB from "@/api/db";
import { Suspense } from 'react'
import { Region } from "../contacts/sections";
import { DocumentationList } from "../documentation/components/documentationList";

const SearchContent = () => {
    const searchParams = decodeURIComponent(useSearchParams().toString().toLowerCase().slice(0,-1));  

    const catalogSearchResult: {label: string, url: string}[] = []
    const catalogCategories = Object.values(CATALOG_DB);

    for (let categoryDB of catalogCategories) { 
        if (categoryDB.hasOwnProperty('tags')) {
					// @ts-expect-error
          if (categoryDB.tags.includes(searchParams)) {
						catalogSearchResult.push({label: categoryDB.label, url: categoryDB.target})
					}
        }

				if (categoryDB.hasOwnProperty('data')) {
	
					const subCatagories =  Object.values(categoryDB.data)
					 for (let subCategoryDB of subCatagories) {
							if (subCategoryDB.hasOwnProperty('tags')) {
								if (subCategoryDB.tags.includes(searchParams)) {
									catalogSearchResult.push({label: subCategoryDB.label ?? subCategoryDB.routing?.label, url:subCategoryDB.absoluteTarget ?? subCategoryDB.routing.absoluteTarget});
								}		
							}
              if (subCategoryDB.hasOwnProperty('mig')) {
                const torchesCategories = [
                  // @ts-expect-error
                  ...Object.values(subCategoryDB.mig.categories).reduce((acc, curr)=> {
                     // @ts-expect-error
                    return [...acc, ...curr]
                  } ,[]),
                   // @ts-expect-error 
                  ...Object.values(subCategoryDB.tig.categories).reduce((acc, curr)=> {
                     // @ts-expect-error
                    return [...acc, ...curr]
                  } ,[])
                ];
               
                for (let torchesDB of torchesCategories) {
                  if (torchesDB.tags.includes(searchParams)) {
                    catalogSearchResult.push({label: torchesDB.searchResultLabel, url:torchesDB.absoluteTarget });
                  }		
                }
							}
					 }
				}
    }

    const documentsSearchResult: number[] = DOWNLOADS_DB.reduce((acc, curr) => {
      if (curr.tags?.includes(searchParams)) {
        return [...acc, curr.id]
      } else {
        return acc
      }
    }, [] as number[])


    const dealersSearchResult = DB.dealers.filter(({ list }) => {
      return list.filter(({ city, name }) => {
        return (city.startsWith(searchParams)) ||
        (name.toLowerCase().replace('«', ' ').replace('»', ' ').split(' ').includes(searchParams))
      }).length > 0});

    const blogSearchResult = DB.posts.filter(post => post.tags.includes(searchParams));
    const hasCatalogSearchResult = catalogSearchResult.length > 0;
    const hasDocumentsSearchResult = documentsSearchResult.length > 0;
    const hasDealersSearchResult = dealersSearchResult.length > 0;
    const hasBlogSearchResult = blogSearchResult.length > 0;
  const hasNoResults = !hasBlogSearchResult && !hasCatalogSearchResult && !hasDealersSearchResult && !hasDocumentsSearchResult;
  
  return (
    <Suspense>
    <div className={styles.wrapper}>
      {hasNoResults ?
      <div className={styles.no_content}>
        <Heading rank={1} text="По данному запросу ничего не найдено" withUnderline={false}/>
      </div>
      : 
        <section className={styles.results}>
          {hasCatalogSearchResult && 
          <div className={styles.results__block}>
            <Heading rank={2} text="В каталоге" withUnderline={false}/>
            <ul className={styles.list}>
              {catalogSearchResult.map(({label, url}) => url && <li key={url} className={styles.item}>
                  <Link href={url}>{label}</Link>
                </li>
                )}
            </ul>
          </div>}
           {hasDocumentsSearchResult && 
            <div className={styles.results__block}>
              <Heading rank={2} text="В документах" withUnderline={false}/>
              <DocumentationList list={DOWNLOADS_DB.filter(({id}) => documentsSearchResult.includes(id))} />
            </div>
          }
          {hasDealersSearchResult && 
           <div className={styles.results__block}>
              <Heading rank={2} text="Среди дилеров" withUnderline={false}/>
              <ul className={styles.list}>
                {dealersSearchResult.map(({ region, list }) => (
                  <li className={`${styles.list__item}`} key={region}>
                      <Region region={region} list={list} />
                  </li>
                ))}
              </ul>
           </div>
          }
          {hasBlogSearchResult && 
          <div className={styles.results__block}>
            <Heading rank={2} text="В блоге" withUnderline={false}/>
            <ul className={styles.list}>
              {blogSearchResult.map(({articleTitle, id}) => <li key={id} className={styles.item}>
                  <Link href={`/blog/${id}`}>{articleTitle}</Link>
                </li>
                )}
            </ul>
          </div>
          }
        </section>
        }
    </div>
    </Suspense>) 
}

const Documentation = ()  => {
  const searchParams = decodeURIComponent(useSearchParams().toString().toLowerCase().slice(0,-1));  
  return <PageWrapper 
      title={`Результаты поиска по запросу "${searchParams.replace('+', ' ')}"`} 
      withUnderline 
      content={<SearchContent/>} 
      />
} 

export default function DocumentationPage(){
  return <Suspense><Documentation/></Suspense>
}
