class Collection {

    constructor(items, instance){
        this.data = items.map(instance.create)
        this.isEmpty = !!this.data.length
    }
    
    orderBy(column){
        return _.orderBy(this.data,column)    
    }

    static create(items, instance){
        return new Collection(items, instance)
    }

}

export default Collection