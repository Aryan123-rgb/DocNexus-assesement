const BlogModel = require("../models/Blog");

const handleCreateBlog = async (req, res) => {
  const { title, summary, content, author } = req.body;

  try {
    const blogDoc = await BlogModel.create({ title, summary, content, author });

    return res.json(blogDoc);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server error");
  }
};

const handleUpdateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, summary, content } = req.body;

  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      id,
      { title, summary, content },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json("Blog not found");
    }

    return res.json(updatedBlog);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
  }
};

const handleDeleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json("Blog not found");
    }

    return res.json(deletedBlog);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
  }
};

const handleGetAllBlog = async (req, res) => {
  try {
    const allBlogs = await BlogModel.find();
    return res.json(allBlogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error");
  }
};

module.exports = {
  handleCreateBlog,
  handleDeleteBlog,
  handleGetAllBlog,
  handleUpdateBlog,
};
