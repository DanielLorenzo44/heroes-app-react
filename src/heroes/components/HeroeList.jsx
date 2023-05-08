import { useMemo } from "react";
import { getHeroesByPulisher } from "../helpers"
import { HeroCard } from "./";

export const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPulisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map((heroe) => (
                <HeroCard key={heroe.id} {...heroe} />
            ))
        }
    </div>
  )
}
