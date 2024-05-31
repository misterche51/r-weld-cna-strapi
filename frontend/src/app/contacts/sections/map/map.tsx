"use client";
import Controls from "./components/controls/controls";
import Info from "./components/info/info";
import { useCallback, useState } from "react";
import Script from "next/script";
import DB from "@/api/db";
import styles from "./map.module.css";
import Image from "next/image";
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapControls,
  YMapGeolocationControl,
  YMapZoomControl,
  YMapMarker,
} from "ymap3-components";
import * as YMaps from "@yandex/ymaps3-types";
import { API_KEY, CUSTOMIZATION } from "./helpers";

export default function Map() {
  const [activeId, setActiveId] = useState<number>(0);
  const [ymap, setYmap] = useState<YMaps.YMap>();

  const options = DB.contacts.map(({ id, city }) => ({
    id,
    label: city,
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Controls
          options={options}
          activeId={activeId}
          onChangeHandler={setActiveId}
        />
      </div>
      <div className={styles.info}>
        <Info id={activeId} />
      </div>
      <YMapComponentsProvider apiKey={API_KEY} lang="ru_RU">
        {DB.contacts.map(({ location, id }) => (
          <div
            key={`map_${id}`}
            className={`${styles.map} ${
              activeId === id && styles["map--active"]
            }`}
            id={`map_${id}`}
          >
            <YMap
              key="map"
              ref={(ymap: YMaps.YMap) => setYmap(ymap)}
              location={location}
              mode="vector"
              theme="dark"
            >
              {/* @ts-expect-error */}
              <YMapDefaultSchemeLayer customization={CUSTOMIZATION} />
              <YMapDefaultFeaturesLayer />
              {/* @ts-expect-error */}
              <YMapMarker coordinates={location.center}>
                <Image
                  src={"/ic-location.svg"}
                  alt="icon"
                  width={32}
                  height={32}
                />
              </YMapMarker>
              <YMapControls position="bottom">
                <YMapZoomControl />
              </YMapControls>
              <YMapControls position="bottom left">
                <YMapGeolocationControl />
              </YMapControls>
            </YMap>
          </div>
        ))}
      </YMapComponentsProvider>
    </div>
  );
}
