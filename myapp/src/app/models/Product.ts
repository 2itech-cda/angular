export default class Product {

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public active: boolean,
        public price: number,
        public date_created: Date,
        public date_updated: Date,
    ){ }

}
