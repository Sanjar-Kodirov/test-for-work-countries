import { FC } from "react";
import { IListProps } from "./list.types";
import cls from './list.module.scss';

export const List: FC<IListProps> = ({ counties }) => {
    return (
        <div className={cls.wrapper}>
            {counties.map((county) => (
                <pre key={county.code} className={cls.item}>
                    {JSON.stringify(county, null, 3)}
                </pre>
            ))}
        </div>
    );
}