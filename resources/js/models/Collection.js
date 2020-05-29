class Collection {

    constructor(items = [], instance){
        this.data = !!items.length ? items.map(instance.create) : []
        this.isEmpty = !!this.data.length
    }

    selected(){
        return this.data.filter(({isSelected}) => isSelected)
    }

    static create(items, instance){
        return new Collection(items, instance)
    }

}

export default Collection