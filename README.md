# Estudando REMIX

### Motivação

Testar para ver se é a melhor opção para criar meu site pessoal utilizando REMIX.

#### Stack

- Remix;
- Supabase (testando também com relação ao Firebase para ver qual faz mais sentido)
- front-matter (Para analisar a string vinda dos Posts em format Markdown)
- tiny-invariant (Uma invariant função recebe um valor e, se o valor for falso, a invariant função será lançada. Se o valor for truthy , a função não será lançada.)

#### Aprendizado

- `app/root.tsx` é o ponto de partida
- As páginas da aplicação ficam dentro de `app/routes`
- Remix possui um componente `Link` padrão para renderizar a tag `<a>` e um componente `NavLink` para navegação
- **Single responsibility** - é aconselhável a criação de módulos que cuidem de responsabilidades específicas
- Para criar URL com parâmetros basta adicionar `$` no início do arquivo, exemplo é o arquivo `app/routes/posts/$slug.tsx`
- Para utilizar a folha de estilos CSS, deve-se criar e depois chamar no arquivo onde ela será utilizada exportando uma const `links` da seguinte forma:

```
export const links = () => {
  return [{ rel: 'stylesheet', href: adminStyles }]
}
```

Isto permitirá que a aplicação carregue a folha de estilos através do componente `Links` que fica em `root.tsx`
