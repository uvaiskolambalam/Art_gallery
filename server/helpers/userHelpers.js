const client = require("twilio")(
  "AC9aa030d08ef3dc18933486841b234059",
  "d38ff446639127d15b6d93b40dec156e"
);
const serviceId = "VAabb443ddb86ac9db96bfa19ef0992f0a";

module.exports = {
  doSMS: (userData) => {
    console.log(userData, "forsms");
    return new Promise(async (resolve, reject) => {
      let res = {};
      // console.log(userData);
      //console.log('eeeeeeeeeeeeeeee');
      await client.verify
        .services(serviceId)
        .verifications.create({
          to: `+91${userData.mobile}`,
          channel: "sms",
        })
        .then((reeee) => {
          console.log("poda");
          res.valid = true;
          resolve(res);
          console.log(reeee, "reee");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  otpVerify: (userData) => {
    let mobile = userData.location.state.mobile;
    let OTP = userData.otp;
    // console.log(userData.location.state,'alldata');
    // console.log(userData.otp,'otpdata');
    return new Promise(async (resolve, reject) => {
      await client.verify
        .services(serviceId)
        .verificationChecks.create({
          to: `+91${mobile}`,
          code: OTP,
        })
        .then((verifications) => {
          if (verifications) {
            resolve(verifications.valid);
          } else {
            resolve({ varificeationError: true });
          }
        });
    });
  },
};
