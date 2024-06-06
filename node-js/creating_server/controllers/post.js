// exports.getPost = (req, res) => {
//     res.send('Hello World from express js');
//   };

//showing in json format
exports.getPost = (req, res) => {
    res.json({
        posts: [
            { title: 'First post' },
            { title: 'Second post' }
        ]
    });
};