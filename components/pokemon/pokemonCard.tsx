import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces/pokemon-list';
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface PropsPokemon {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<PropsPokemon> = ({ pokemon }) => {

    const router = useRouter();
    const onClick = ()=>{
        router.push(`/pokemon/${pokemon.id}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{pokemon.name}</Text>
                        <Text>#{pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
