import authenticationRoute from './auth/login';
import registerRoute from './auth/register';
import refreshRouter from './auth/refresh';
import logOutRouter from './auth/logOut';
import jwtAuth from '../middleware/jwtAuth';
import userAccount from './userAccounts';
import otpRouter from './auth/otpRouter';
import accountRouter from './account/account';
function route(app: any) {
    app.use('/api/login', authenticationRoute);
    app.use('/api/register', registerRoute);
    app.use('/api/refresh', refreshRouter);
    app.use('/api/logout', jwtAuth.verifyToken, logOutRouter);
    app.use('/api/otp', otpRouter);
    app.use('/api/account', accountRouter);
    app.use('/api/', jwtAuth.verifyToken, userAccount);
}
export default route;
