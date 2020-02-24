import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {
    Text,
    Image,
    Flex,
    Link,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/core';
import ArticleContentFormatted from '../components/ArticleContentFormatted';

const SecondPage = props => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "mc.png" }) {
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
                        alt="Matthieu Coulon"
                        src={data.placeholderImage.childImageSharp.fluid.src}
                    />
                </Flex>
                <Text as="h3">A propos de moi</Text>
                <Text>
                    Développeur ( Front-End / Back-End) et Responsable UX
                    chez&nbsp;
                    <Link href="https://paygreen.io/">PayGreen</Link>, je suis
                    un passionné d'informatique et de photographie. Je vais au
                    travail en vélo et fais attention à mon empreinte carbone.
                </Text>
                <Text as="h3">Qu'est ce que j'ai fais comme étude ? </Text>
                <Text>
                    J'ai débuté par un DUT Informatique puis une licence à
                    l'Université du Havre. Mon année de licence s'est fait à
                    l'Université du Québec à Chicoutimi (
                    <a href="https://www.uqac.ca/">UQAC</a>
                    ). Puis direction Rouen pour faire mon master GIL (Génie de
                    l'informatique logicielle) à l'UFR.
                </Text>
                <Text as="h3">Ma stack actuelle ?</Text>
                <Text>
                    Chez PayGreen quand je fais du back, je suis principalement
                    sur du PHP, sinon nous avons commencé à mettre en place du
                    ReactJS pour mon plus grand plaisir &#128525;. Du coup ma
                    petite passion du moment c'est le JS, et en ce moment les
                    petites technos :<strong>Electron</strong> et les{' '}
                    <strong>Web Components</strong>.
                </Text>
                <Text as="h3">En dehors de l'informatique ?</Text>
                <Text>
                    En dehors de l'info, je fais du vélo (Gravel et VéloTaf) et
                    quand j'en retrouve le temps, de la photo et voilà c'est tout.
                </Text>
            </ArticleContentFormatted>
        </Layout>
    );
};

export default SecondPage;
