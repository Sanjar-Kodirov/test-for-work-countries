import { FC, useEffect, useState } from "react";
import cls from './search.module.scss'
import { ISearchProps } from "./search.types";

export const Search: FC<ISearchProps> = ({ query, onChange }) => {

    const [value, setValue] = useState<string>(query);

    useEffect(() => {
        const newTimer = setTimeout(() => onChange(value), 300);
        return () => clearTimeout(newTimer);
    }, [onChange, value]);

    return (
        <div className={cls.search}>
            <input value={value}
                onChange={(e) => setValue(e.target.value)} placeholder='Search for country:' type="text" id="large-input" className="" />
        </div>
    )
}

