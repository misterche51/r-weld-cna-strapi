// "use client";
import styles from "./controls.module.css";
import { useState } from "react";
type TControlItemData = {
  id: number;
  label: string;
};
type TControlItemProps = TControlItemData & { onChange: (id: number) => void };

const CONTROLS_DATA: TControlItemData[] = [
  {
    id: 0,
    label: "Рязань",
  },
  {
    id: 1,
    label: "Москва",
  },
  {
    id: 2,
    label: "Санкт-Петербург",
  },
  {
    id: 3,
    label: "Екатеринбург",
  },
  {
    id: 4,
    label: "Красноярск",
  },
];
const ControlItem = ({
  id,
  label,
  isActive,
  onChange,
}: TControlItemProps & { isActive: boolean }) => {
  const onChangeHandler = () => onChange(id);
  return (
    <label className={styles.wrapper}>
      <input
        className={styles.radio}
        type="radio"
        name="map"
        checked={isActive}
        value={id}
        onChange={onChangeHandler}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export type TControlsProps = {
  options: TControlItemData[];
  activeId: number;
  onChangeHandler: (id: number) => void;
};
export default function Controls({
  options,
  activeId,
  onChangeHandler,
}: TControlsProps) {
  return (
    <ul className={styles.list}>
      {options.map(({ id, label }) => (
        <li key={id} className={styles.item}>
          <ControlItem
            id={id}
            isActive={activeId === id}
            label={label}
            onChange={onChangeHandler}
          />
        </li>
      ))}
    </ul>
  );
}
