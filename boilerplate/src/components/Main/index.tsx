import * as Styles from './styles';

const Main = ({
    title = "React avançado",
    description = "NextJs, React, Styled Components e Typescript.",
}) => (
    <Styles.Wrapper>
        <Styles.Logo 
            src="https://d33wubrfki0l68.cloudfront.net/6b19a409f82c8c0c94fff2c927f4dc5bb3291ccd/b93d3/img/logo.svg" 
            alt="Imagem de um átomo e React Avançado escrito ao lado"
        />
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
        <Styles.Illustration 
            src="https://d33wubrfki0l68.cloudfront.net/cf9dfe86983925690340feb07037ee260f872e34/74dff/img/hero-illustration.svg"
            alt="Um desenvolvedor de frente para tela com código"
        />
    </Styles.Wrapper>
)

export default Main;