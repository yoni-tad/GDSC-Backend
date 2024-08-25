const news_model = require("../model/news_model");

exports.getNews = async (req, res) => {
  try {
    const news = await news_model.find(
      {},
      "title content category author createdAt"
    );
    if (!news) {
      return res.status(404).json({ message: "Not found!" });
    }
    res.status(200).json(news);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
    console.log("Error: ", e);
  }
};

exports.getOneNews = async (req, res) => {
  try {
    const news = await news_model.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "Not found!" });
    }
    res.status(200).json(news);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
    console.log("Error: ", e);
  }
};

exports.postNews = async (req, res) => {
  try {
    const addNews = await news_model.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.content,
      author: req.body.author,
    });

    res.status(201).json(addNews);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
    console.log("Error: ", e);
  }
};

exports.putNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await news_model.findById(newsId);
    if (!news) {
      return res.status(404).json({ message: "Not found!" });
    }
    const updateNews = await news_model.findByIdAndUpdate(
      newsId,
      {
        title: req.body.title,
        content: req.body.content,
        category: req.body.content,
        author: req.body.author,
      },
      { new: true }
    );
    res.status(200).json(updateNews);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
    console.log("Error: ", e);
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await news_model.findById(newsId);
    if (!news) {
      return res.status(404).json({ message: "Not found!" });
    }
    const deleteNews = await news_model.findByIdAndDelete(newsId);
    res.json({message: "News successfully deleted"})
  } catch (e) {
    res.status(500).json({ message: "Server error" });
    console.log("Error: ", e);
  }
};
