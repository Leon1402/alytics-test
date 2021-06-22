import './Table.css'

export const Table = () => {
  return (
    <table className='table'>
      <thead className='table__header header'>
        <tr className='header__row header__row_top'>
          <th className='header__item'>Источники трафика</th>
          <th className='header__item' colSpan={6}>Трафик</th>
          <th className='header__item' colSpan={3}>
            <div className='header__content'>
              <img src="https://testing1.alytics.ru/images/multichannel/crm.png" alt="CRM"
                className='header__icon' />
              Продажи
            </div>
            <div className='header__content header__content_second'>
              <img src="https://testing1.alytics.ru/images/goal_models/png/model_linear.png" alt="model_linear"
                className='header__icon' />
              Линейная модель
            </div>
          </th>
          <th className='header__item' colSpan={3}>
            <div className='header__content'>
              <img src="https://testing1.alytics.ru/images/multichannel/composite.png" alt="composite"
                className='header__icon' />
              Цель с осн. GA
            </div>
            <div className='header__content header__content_second'>
              <img src="https://testing1.alytics.ru/images/goal_models/png/composite.png" alt="goal_models"
                className='header__icon' />
              Составная цепь
            </div>
          </th>
        </tr>
        <tr className="header__row">
          <th className="header__item">Название</th>
          <th className="header__item">Показы</th>
          <th className="header__item">Клики</th>
          <th className="header__item">Сеансы</th>
          <th className="header__item">CTR, %</th>
          <th className="header__item">Цена клика</th>
          <th className="header__item">Затраты</th>
          <th className="header__item">Кол-во</th>
          <th className="header__item">CPA</th>
          <th className="header__item">Выручка</th>
          <th className="header__item">Кол-во</th>
          <th className="header__item">CPA</th>
          <th className="header__item">CR, %</th>
        </tr>
      </thead>
      <tbody className='main'>
        <tr className="main__row">
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
          <td className="main__item">1</td>
        </tr>
      </tbody>
    </table>
  )
}