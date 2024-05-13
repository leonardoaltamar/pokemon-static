const toggleFavorite = (id:number)=>{
    console.log('toggleFavorite Llamado')
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    if( favorites.includes(id) ){
        favorites = favorites.filter(pokeId => pokeId !== id);
    }else{
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = (id:number): boolean => {
    if (typeof window === 'undefined'){
        /* console.log('entre aqui') */
        return false;  
    } 
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    /* console.log(favorites.includes(id)) */
    return favorites.includes(id)
}


const pokemons = ():number[] =>{
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    existInFavorites,
    toggleFavorite,
    pokemons
}