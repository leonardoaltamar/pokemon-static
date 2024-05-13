import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonINfo = async (nameOrId:string)=> {    
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    try {
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }        
    } catch (error) {
        return null;
    }
}