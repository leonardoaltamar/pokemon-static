import { useState } from "react";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router"
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { getPokemonINfo, localFavorites } from "../../utils";

import confetti from 'canvas-confetti';
import { PokemonListResponse } from '../../interfaces/pokemon-list';

interface Props {
    pokemon: Pokemon;
    /* id: string;
    name: string; */
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));
    console.log(localFavorites.existInFavorites(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setisInFavorites(!isInFavorites);

        if (isInFavorites) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })
    }

    return (
        <Layout title="Algun pokemon">
            {/* <h1>{pokemon.id} - {pokemon.name}</h1> */}
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button color="gradient" ghost={!isInFavorites} onPress={onToggleFavorite}>
                                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text h1 transform="capitalize">Sprites:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100}
                                    height={100} />
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100}
                                    height={100} />
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100}
                                    height={100} />
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100}
                                    height={100} />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name);

    return {
        paths: pokemonNames.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    /* const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151'); */
    /* console.log(ctx.params);  */
    const { name } = ctx.params as { name: string };    
    return {
        props: {
            pokemon: await  getPokemonINfo( name )
        }
    }
}

export default PokemonByNamePage;