const { list } = require('@vercel/blob');

module.exports = async (req, res) => {
  try {
    const result = await list({
      token: process.env.BLOB_READ_WRITE_TOKEN
    });

    res.status(200).json(result.blobs);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};