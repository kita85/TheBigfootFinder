export default {
    methods: {
        sortGroupedObjects (result) {
            return Object.keys(result).sort().reduce(
                (obj, key) => { 
                    obj[key] = result[key]
                    return obj
                }, 
                {}
            )
        }
    }
}