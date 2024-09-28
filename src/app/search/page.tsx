"use client";

import DB from "@/api/db";
import styles from "./page.module.css";
import Link from "next/link";
import { PageWrapper } from "../layout/pageWrapper";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CATALOG_DB from "@/api/catalog/db";

const SearchContent = () => {
//   const [isListExpanded, setIsListExpanded] = useState(false);
//   const onShowMoreBtnClickHandler = () => {
//     setIsListExpanded(val => !val)
//   }  
    const searchParams = decodeURIComponent(useSearchParams().toString().toLowerCase().slice(0,-1));  
    const splittedSearchParams = searchParams.split(' ');
    const catalogSearchResult: {label: string, url: string}[] = []
    const catalogCategories = Object.values(CATALOG_DB);
		console.log({searchParams})
    for (let categoryDB of catalogCategories) {
        if (categoryDB.hasOwnProperty('tags')) {
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
									catalogSearchResult.push({label: subCategoryDB.routing.label, url: subCategoryDB.routing.target});
								}		
							}
					 }
				}
    }
    console.log({catalogSearchResult})

    //     return label.split(' ').includes(decodeURIComponent(searchParams))});
    // console.log({links})
  return (
    <>{catalogSearchResult.length === 0 ? <>пусто</>: catalogSearchResult.map(({url}) => url).join(' ')}</>
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
  )
}

export default function DocumentationPage() {
  return <PageWrapper title='Результаты поиска' withUnderline content={<SearchContent/>} />
} 
