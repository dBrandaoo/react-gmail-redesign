import Card from "../../components/Card"

import cardListStyles from './cardlist.module.css'
import cardStyles from './card.module.css'

const CardList = () => (
    <div className={`${cardListStyles.cardlist} bg-gray-100`}>
          
    <input type="text" placeholder='Search' className="w-4/5 h-10 mt-12 rounded-full text-center sticky top-0"></input>
    <div className={cardListStyles.sorting}>
      <p className="text-xs text-gray-500 text-left pl-8">SORT</p>
      <select className="bg-transparent w-28 text-xs text-right">
        <option value="date">Date</option>
        <option value="alpha">Alphabetical</option>
      </select>
    </div>

    <Card styles={cardStyles}/>
    <Card styles={cardStyles}/>
    <Card styles={cardStyles}/>
    <Card styles={cardStyles}/>
    <Card styles={cardStyles}/>
    <Card styles={cardStyles}/>

  </div>
)

export default CardList