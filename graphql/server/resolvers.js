/**
 * GraphQL resolvers definition
 *
 * To merge the resolvers package merge-graphql-schemas is used.
 *
 * @link https://github.com/okgrow/merge-graphql-schemas
 */
import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

export default mergeResolvers(resolversArray);
