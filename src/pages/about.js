import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Text, Image, Flex, Link } from '@chakra-ui/core';
import ArticleContentFormatted from '../components/ArticleContentFormatted';
import { Emoji } from '../components/Emoji';

const SecondPage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "mc.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="About" />
            <ArticleContentFormatted>
                <Flex justifyContent="center">
                    <Image
                        rounded="full"
                        size="200px"
                        alt="Photo de Matthieu Coulon beaucoup trop sérieuse"
                        src={data.placeholderImage.childImageSharp.fluid.src}
                    />
                </Flex>
                <Text as="h3">A propos de moi</Text>
                <Text>
                    Lead Dév Front End chez&nbsp;
                    <Link href="https://paygreen.io/">PayGreen</Link>, je suis
                    passionné d'informatique et de photographie. Je joue tank
                    sur Overwatch et essaie tant bien que mal de faire rire mes
                    amis et collègues. <Emoji val="🤷" />
                </Text>

                <Text as="h3">Ma stack actuelle ?</Text>
                <Text>
                    Je fais tout en JS sauf les apis où j'aurai tendance à
                    partir sur du php pour le back (<Emoji val="🤷" />) personne
                    n'est parfait je sais ). Pour le FrontEnd j'ai commencé sur
                    du Angular pour vite débarquer sur du React.js. Le tout en
                    ES6, le typescript ne s'est pas encore assez bien manifesté
                    dans mon coeur pour l'inclure <Emoji val="💔" />.
                </Text>
                <Text pt={1} as="h3">
                    Mes étude ?{' '}
                </Text>
                <Text>
                    Après un petit Bac S (SI) je me suis orienté vers un DUT
                    Informatique à l'université du Havre pour enchaîner sur une
                    licence pour la même université mais à l'étranger : à
                    l'Université du Québec à Chicoutimi (
                    <a href="https://www.uqac.ca/">UQAC</a>
                    ). Et enfin direction Rouen pour faire mon master 2 GIL
                    (Génie de l'informatique logicielle) à l'UFR.
                </Text>

                <Text as="h3">En dehors du dev ?</Text>
                <Text>
                    Quand je touche pas à du code pour le boulot ou la persone,
                    je pousse des PayLoad sur Overwatch, je fais du vélo (Gravel
                    et VéloTaf) et je prends des photos de tout avec mon petit
                    Fuji adoré :{' '}
                    <a href="https://www.instagram.com/mattcoulon/">
                        mon insta
                    </a>
                    .
                </Text>
            </ArticleContentFormatted>
        </Layout>
    );
};

export default SecondPage;
