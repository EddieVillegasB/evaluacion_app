class Movie {

    constructor({id = '', name = '', published_at = '', image = '', status = false}){
        this.id = id
        this.name = name
        this.image = image
        this.status = status
        this.published_at = published_at
    }

    static create(data){
        return new Movie(data)
    }

}

export default Movie