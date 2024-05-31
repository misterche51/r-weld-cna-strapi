"use client";

import { useState, useMemo } from "react";
import styles from "./dealers.module.css";
import DB from "@/api/db";
import Location from "./components/location";
import SearchBar from "@/app/shared/searchBar/searchBar";
import { TRegionItem } from "@/api/dealers/declarations";

const Region = ({ region, list }: TRegionItem) => {
  return (
    <div className={styles.region}>
      <p className={styles.region__name}>{region}</p>
      <ul className={styles.region__list}>
        {list.map((props, i) => (
          <li key={i} className={styles.region__item}>
            <Location {...props} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Dealers() {
  const [searchedCity, setSearchedCity] = useState("");
  const onSubmitHandler = (val: string) => {
    setSearchedCity(val.toLowerCase());
  };

  const renderedDealers = useMemo(
    () =>
      DB.dealers.filter(({ list }) => {
        return (
          list.filter(({ city }) => city.startsWith(searchedCity)).length > 0
        );
      }),
    [searchedCity]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchBar
          placeholder="Введите название города"
          icon="location"
          onSearchStart={onSubmitHandler}
        />
      </div>
      <ul className={styles.list}>
        {renderedDealers.map(({ region, list }) => (
          <li className={`${styles.list__item}`} key={region}>
            <Region region={region} list={list} />
          </li>
        ))}
      </ul>
    </div>
  );
}
