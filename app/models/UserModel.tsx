export default class UserModel {
    uid: String = ''
    name: String = ''
    phone: String = ''
    email: String = ''
    image: String = ''
    address: String = ''

    constructor(dict: any) {
        if (dict === undefined || dict === null) {
            return
        }
        this.uid = dict?.uid
        this.name = dict?.name
        this.phone = dict?.phone
        this.email = dict?.email
        this.image = dict?.image
        this.address = dict?.address
    }
}
