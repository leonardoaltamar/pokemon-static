import { Card, Grid } from '@nextui-org/react'
import React from 'react'
import { FC, PropsWithChildren } from 'react';
import { FavoriteCardPokemon } from '../favoriteCardPokemon/FavoriteCardPokemon';

type Props = {
    favoritesPokemons:number[];
}

export const Favorites:FC<PropsWithChildren<Props>> = ({favoritesPokemons}) => {
    return (
        <Grid.Container gap={2} direction="row" justify='flex-start'>
            { favoritesPokemons.map(id => <FavoriteCardPokemon id={id} key={id} />) }
        </Grid.Container>
    )
}

