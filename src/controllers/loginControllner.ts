import user from '../services/authServices/login';
require('dotenv').config();
import Serve from '../connectDatabase/connect';

class loginControllner {
    login = async (req: any, res: any) => {
        const error = ['<script></script>', '<script>', '</script>'];
        const phoneNumberEmail = req.body.params.nameAccount;
        const password = req.body.params.password;
        if (!phoneNumberEmail || !password || phoneNumberEmail.includes(error) || password.includes(error)) {
            return res.status(500).json({ errCode: 0, message: 'Please enter your Account!' });
        } else {
            const userData: any = await user.login(phoneNumberEmail, password, res);
            console.log('close');
            if (userData) {
                return res.status(200).json({
                    errCode: userData.errCode,
                    errMessage: userData.errMessage,
                    user: userData.data ? userData.data : {},
                });
            }
        }
    };
}
export default new loginControllner();
