import UserModel from '../models/UserModel'

export default class AppManager {
    static shared = new AppManager()

    currentUser: UserModel = null

    isHaveUid = () => {
        return this.currentUser?.uid != null && this.currentUser?.uid != ''
    }
}
