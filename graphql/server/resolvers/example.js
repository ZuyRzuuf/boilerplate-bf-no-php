export default {
    Query: {
        examples: (parent, args, {db}, info) => db.user.findAll(),
        example: (parent, {uuid}, {db}, info) => db.user.findById(uuid),
    }
}