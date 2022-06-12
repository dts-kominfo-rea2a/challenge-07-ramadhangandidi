const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let ixx = await promiseTheaterIXX();
    let vgc = await promiseTheaterVGC();

    let dataArr = ixx.concat(vgc);
    return dataArr.filter((obj) => obj.hasil === emosi).length;

    // return emotionArr.filter((data) => data.hasil === emosi).lenght;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
