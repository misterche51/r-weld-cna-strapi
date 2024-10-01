"use client";

import DB from "@/api/db";
import styles from "./page.module.css";
import Link from "next/link";
import Heading from "@/app/shared/heading/heading";

import { PageWrapper } from "../layout/pageWrapper";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CATALOG_DB from "@/api/catalog/db";

const SearchContent = () => {
    const searchParams = decodeURIComponent(useSearchParams().toString().toLowerCase().slice(0,-1));  
    const splittedSearchParams = searchParams.split(' ');
    const catalogSearchResult: {label: string, url: string}[] = []
    const catalogCategories = Object.values(CATALOG_DB);

    for (let categoryDB of catalogCategories) {
        if (categoryDB.hasOwnProperty('tags')) {
					// @ts-expect-error
          if (categoryDB.tags.includes(searchParams)) {
						catalogSearchResult.push({label: categoryDB.label, url: categoryDB.target})
						// continue;
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
                console.log({torchesCategories})
                for (let torchesDB of torchesCategories) {
                  console.log(torchesDB.tags, torchesDB.tags.includes(searchParams), searchParams)
                  if (torchesDB.tags.includes(searchParams)) {
                    catalogSearchResult.push({label: torchesDB.label, url:torchesDB.absoluteTarget });
                  }		
                }
								
							}
					 }
				}
    }

    const hasNoResults = catalogSearchResult.length === 0
    console.log({catalogSearchResult})
  return (
    <div className={styles.wrapper}>
      {hasNoResults ?
      <div className={styles.no_content}>
        <Heading rank={1} text={`По запросу "${searchParams}" ничего не найдено`} withUnderline={false}/>
      </div>
      : 
        <section className={styles.results}>
          {catalogSearchResult.length && 
          <>
            <Heading rank={2} text="В каталоге: " withUnderline={false}/>
            <ul className={styles.list}>
              {catalogSearchResult.map(({label, url}) => url && <div key={url} className={styles.item}>
                  <Link href={url}>{label}</Link>
                </div>
                )}
            </ul>
          </>
          
          }
        </section>}
    </div>) 
//     <div className={styles.content}>
//       <ul className={`${styles.list} ${isListExpanded ? styles["list--opened"] : ''}`}>
//         {DB.downloads.map(({label ,id, path}) => 
//           <li key={id} className={styles.item}>
//             <div className={styles.image}></div>
//             <p className={styles.label}>{label}</p>
//             <Link className={styles.link} href={`${path}`} rel="noopener noreferrer" target="_blank">Скачать</Link>
//           </li>
//       )}
//     </ul>
//     <button className={styles.showMoreBtn} onClick={onShowMoreBtnClickHandler}>{isListExpanded ? 'Свернуть' : 'Показать еще'  }</button>
//   </div>
  
}

export default function DocumentationPage() {
  return <PageWrapper title='Результаты поиска' withUnderline content={<SearchContent/>} />
} 
