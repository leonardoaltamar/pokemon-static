
import Head from "next/head";
import { FC, PropsWithChildren } from "react"
import { Navbar } from '../ui';

type Props = {
    title?:string;
};
export const Layout:FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="author" content="Leonardo altamar" />
            <meta name="description" content="Informacion sobre el nombre del pokemon XXXXXXXX" />
            <meta name="keywords" content="XXXXXX, pokemon, pokedex" />
        </Head>

        <Navbar />
        <main style={{
            padding: "0 20px",
        }}>
            { children }
        </main>
    </>
  )
}
