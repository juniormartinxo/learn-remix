# Estudando REMIX

### Motivação

Testar para ver se é a melhor opção para criar meu site pessoal utilizando REMIX.

#### Stack

- Remix;
- Supabase (testando também com relação ao Firebase para ver qual faz mais sentido)
- front-matter (Para analisar a string vinda dos Posts em format Markdown)
- tiny-invariant (Uma invariant função recebe um valor e, se o valor for falso, a invariant função será lançada. Se o valor for truthy , a função não será lançada.)

#### Aprendizado

Remix possui um componente `Link` padrão para renderizar a tag `<a>` e um componente `NavLink` para navegação
Single responsibility - é aconselhável a criação de módulos que cuidem de responsabilidades específicas

## PARTE QUE EU PAREI:

Dê uma olhada! Agora estamos extraindo nossas postagens de uma fonte de dados em vez de incluir tudo no navegador como JavaScript.

Nota rápida sobre isso invariant. Como paramsvem do URL, não podemos ter certeza de que params.slugserá definido - talvez você altere o nome do arquivo para $postId.ts! É uma boa prática validar essas coisas com invariant, e isso também deixa o TypeScript feliz.

Existem muitos analisadores de markdown, usaremos "marked" para este tutorial porque é muito fácil começar a trabalhar.

💿 Analise o markdown em HTML
