# Teste Técnico - React Pleno

**Olá! Obrigado pelo seu tempo e disponibilidade**

### O que iremos avaliar ?

- Qualidade do código
- Recursos avançados que você usou
- Modularização/componentização
- Domínio de html/css
- Domínio de javascript
- Recursos utilizados do React
- Versionamento
- Tempo de desenvolvimento

# Segue as telas que foram desenvolvidas

![Captura de tela de 2020-01-10 13-44-23](https://user-images.githubusercontent.com/45033721/72170918-85c8a000-33b0-11ea-8919-aaa6d78b5205.png)

![Captura de tela de 2020-01-10 13-44-27](https://user-images.githubusercontent.com/45033721/72171074-e3f58300-33b0-11ea-9282-ff47864b1daa.png)

![Captura de tela de 2020-01-10 13-59-26](https://user-images.githubusercontent.com/45033721/72171420-b4934600-33b1-11ea-8d3f-ed71e1bd457d.png)

![Captura de tela de 2020-01-10 14-14-02](https://user-images.githubusercontent.com/45033721/72172332-a9411a00-33b3-11ea-915a-62adacb1282f.png)

![Captura de tela de 2020-01-10 14-17-54](https://user-images.githubusercontent.com/45033721/72172544-31bfba80-33b4-11ea-9c8c-421ce2242820.png)

## Como rodar a Aplicação ?

na parte do frontend você pode rodar normalmente atraves do

'yarn start'

ja na parte do backend eu criei dois containers docker atraves do compose um esta rodando o servidor node na porta 3333 e o outro
o banco mongodb,para rodar execute:

'docker-compose up -d'

dentro da pasta do backend

```
async index(req, res) {
  const types = await TypePost.find();

  if(types.length === 0){
    const type1 = TypePost.create({ title: "Documentos" });
    const type2 = TypePost.create({ title: "Tutoriais" });
    const type3 = TypePost.create({ title: "Reuniões" });
    const type4 = TypePost.create({ title: "Páginas" });

    Promise.all([type1, type2, type3, type4]).then(function(values) {
       return res.json(values);
     });
    }
    if (types.length > 0) {
      return res.json(types);
    }
}
```

ja deixei tudo pre-configurado com os tipos de post que o usuário
pode fazer um cadastro e so consumir os dados que forão criados

# Voltando para o front

no front eu fiz um controle global atraves do redux e dos meus sagas ,so precisei controlar a questão da busca dos posts pela
paginação e na parte do header que possui os numeros de cada tipo
criei uma rota que envia esses dados atualizados ,então sempre
que mudava o estado solicitava essa informação da minha api

```
  takeLatest("GET_ATUALIZED_POSTS_REQUEST", getPostsAtualized),
  takeLatest("CREATE_POST_SUCCESS", getPostsAtualized),
  takeLatest("UPDATE_POST_SUCCESS", getPostsAtualized),
  takeLatest("UPDATE_POST_SUCCESS", getPosts),
  takeLatest("CREATE_POST_SUCCESS", getPosts),
  takeLatest("GET_POSTS_REQUEST", getPosts),
  takeLatest("CREATE_POST_REQUEST", createPost),
  takeLatest("UPDATE_POST_REQUEST", updatePost),
  takeLatest("REMOVE_POST_REQUEST", removePost),
  takeLatest("REMOVE_POST_SUCCESS", getPostsAtualized),
  takeLatest("REMOVE_POST_SUCCESS", getPosts),
  takeLatest("NEXT_PAGE_REQUEST", nextPage),
  takeLatest("PREV_PAGE_REQUEST", prevPage),
  takeLatest("NEXT_PAGE_SUCCESS", getPosts),
  takeLatest("PREV_PAGE_SUCCESS", getPosts)
```
