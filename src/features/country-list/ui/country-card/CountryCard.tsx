import { ICountyEntity } from 'entities/country'
import { ILanguage } from 'entities/country/types/country.entity'
import { FC } from 'react'
import cls from './CountryCard.module.scss'



interface CountryCardProps {
    country: ICountyEntity,
    children?: any

}


export const CountryCard: FC<CountryCardProps> = ({ country }) => {

    const { name, code, native, phone, continent, capital, currency, languages, emoji } = country

    const languagesList = languages.map((lang: ILanguage) => {
        return <span className='mr-2'>{lang.name},</span>
    })

    return (
        <div className={cls.CountryCard}>
            <div className={cls.body}>
                <div className={cls.bodyContent}>
                    <h5><span>{emoji}</span>{name}</h5>
                    <p><span>🏟</span>{capital}</p>
                    <p className='flex flex-wrap'>
                        <span>🗣</span>  {languagesList}
                    </p>
                    <p><span>☎</span> +({phone})</p>
                    <p><span>💲</span>{currency?.slice(0, 20)}</p>
                </div>
            </div>
        </div >
    )
}

