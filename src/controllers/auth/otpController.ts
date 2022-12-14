import OTP from '../../services/authServices/OTP/otpService';
class OTPController {
    sendOTP = async (req: any, res: any) => {
        try {
            const phoneMail = req.body.params.phoneMail;
            if (phoneMail) {
                const data: any = await OTP.sendOTP(phoneMail);
                if (data) {
                    return res.status(200).json(data);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    verifyOTP = async (req: any, res: any) => {
        try {
            const phoneMail = req.body.params.phoneMail;
            const otp = req.body.params.otp;
            const data: any = await OTP.verifyOTP(phoneMail, otp);
            if (data) {
                return res.status(200).json(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
}
export default new OTPController();
