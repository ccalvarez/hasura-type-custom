exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type hasura_parties implements Node @dontInfer {
      id: Int!,
      name: String!,
      idToString: String,
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    hasura_parties: {
      idToString: {
        type: "String",
        resolve: source => source.id.toString(),
      },
    },
  })
}
