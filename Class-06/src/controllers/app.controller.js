const get = (req, res) => {
    const data = req.body;

    console.log(data);

    return res.status(200).json({
        message: 'Body data received!',
        data
    })
}

const create = (req, res) => {
    res.status(200).json({
        message: 'Data created successfully!'
    })
}

module.exports = {
    get,
    create
}