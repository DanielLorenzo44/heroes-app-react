import { heroes } from "../data/heroes";

export const getHeroesByPulisher = (publisher) => {
    const validPublishers = ['DC Comics','Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publiser`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}