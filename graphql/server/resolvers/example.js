export default {
    Query: {
        examples: (parent, args, {db}, info) => db.example.findAll(),
        example: (parent, {uuid}, {db}, info) => db.example.findById(uuid),
    }
}