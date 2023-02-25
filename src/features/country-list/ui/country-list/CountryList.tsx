import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ICountyEntity, ICountyGql } from "entities/country";
import cls from './county-list.module.scss';
import { List } from "../list/List";

export const CountryList = () => {
    const [query, setQuery] = useState('');

    const { data } = useQuery<{ countries: ICountyEntity[] }>(ICountyGql.QueryCounty, {
        variables: query
            ? { filter: { code: { eq: query.toUpperCase() } } }
            : {},
    });

    return (
        <div className={cls.wrapper}>
            <List counties={data?.countries ?? []} />
        </div>
    );
}