const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const ixx = await promiseTheaterIXX();
    const vgc = await promiseTheaterVGC();

    let arrHasil = ixx.concat(vgc);
    return arrHasil.filter((obj) => obj.hasil === emosi.length);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
