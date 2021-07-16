exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type hasura_parties implements Node {
      idToString: String
    }
  `
  createTypes(typeDefs)
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
