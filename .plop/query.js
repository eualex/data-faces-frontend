module.exports = plop => {
  plop.setGenerator('query', {
    description: 'Create a query',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Query name please'
    }],
    actions: [
      {
        type: 'add',
        path: `../src/graphql/queries/get{{pascalCase name}}/index.ts`,
        templateFile: 'templates/queries/index.ts.hbs'
      },
      {
        type: 'add',
        path: `../src/graphql/queries/get{{pascalCase name}}/query.ts`,
        templateFile: 'templates/queries/query.ts.hbs'
      },
      {
        type: 'add',
        path: `../src/graphql/queries/get{{pascalCase name}}/types.ts`,
        templateFile: 'templates/queries/types.ts.hbs'
      }    
    ]
  })
}