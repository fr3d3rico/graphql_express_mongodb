const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
var personMondel = require('../models/Person');

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
  	_id: { type: GraphQLString },
  	firstName: { type: GraphQLString },
  	age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
  	person: {
  		type: PersonType,
  		args: { _id: { type: GraphQLString } },
  		resolve(parentValue, args) {

		  return personMondel.findById(args._id);

  		}
  	}
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});