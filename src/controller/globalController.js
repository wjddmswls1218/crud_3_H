import crud2 from "../models/curd2";

const homeController = async (req, res) => {
  try {
    const result = await crud2.find({ isDelete: false });

    res.render("srceens/home", { list: dataList });
  } catch (e) {
    console.log(e);
    res.render("screens/home", { list: [] });
  }
};

const detailController = async (req, res) => {
  const {
    query: { id },
  } = req;
  try {
    const detailData = await crud2.find({ _id: id });
    console.log(detailData);
  } catch (e) {
    console.log(e);
  }
};

const createController = (req, res) => {
  res.render("screens/create");
};

const globalController = {
  homeController,
  createController,
  detailController,
};

export default globalController;
