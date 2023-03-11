import {times} from 'remeda';
import styles from '../page.module.css';
import {SpaceShip} from '../../space-ship-store-front/domain/space-ship';
import {ShipComponent} from '../../space-ship-store-front/ui-adapter/ship-component';

async function getData() {
    const res = await fetch('http://localhost:3000/api/inYard',  { cache: 'no-store' });
    return res.json();
}

async function getShips() {
  const shipTemplate: SpaceShip = {
    name: "XV-1 Turbo Alpha",
    price: 50_000,
    location: "Ganymed",
    image: "/ship1.jpg",
    mileage: 1000,
    speed: 500,
    constructionYear: 3451}

  return times(9, () => shipTemplate)
}

export default async function Ships() {
  // const apiData = await getData()
  const ships = await getShips()

  return (
    <main className={styles.main}>
      <div className="ship-catalogue">
        {ships.map(ship => <ShipComponent ship={ship}/>)}
      </div>
    </main>
  )
}
