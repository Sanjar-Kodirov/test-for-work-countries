import { FC } from "react";
import { IListProps } from "./list.types";
import cls from './list.module.scss';
import { CountryCard } from "../country-card/CountryCard";

export const List: FC<IListProps> = ({ counties }) => {
    return (
        <div className={cls.countryList}>
            {counties.map((county) => (
                <CountryCard country={county} />
            ))}
        </div>
    );
}