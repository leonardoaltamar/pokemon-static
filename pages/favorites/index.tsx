import React, { useEffect } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites, Favorites } from '../../components/ui'
import { useState } from 'react';
import { localFavorites } from '../../utils'
import { Card, Grid } from '@nextui-org/react';



const FavoritesPage = () => {
  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemons(localFavorites.pokemons)
  }, []);

  return (
    <Layout title='Favorites'>
      {
        favoritesPokemons.length == 0 ? (<NoFavorites />): ( <Favorites favoritesPokemons={favoritesPokemons} />)
      }
    </Layout>
  )
}

export default FavoritesPage