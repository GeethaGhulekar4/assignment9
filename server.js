var express = require('express');
var app = express();
var port = 3000;
var axios = require('axios');

app.get('/say', async (req, res) => {
try {
  if(req.query.keyword) {
    var keyword = req.query.keyword
     var msg = await axios.get('https://d3b7nwmkoa.execute-api.us-east-1.amazonaws.com/Geetha/say?keyword=' + keyword);
    res.send(msg.data)
  }
  else {
      return res.status(400).json({error: 'enter a valid keyword'});
  }

}
catch (err) {
    console.log(err);
    res.status(500).json({
        error: err,
    });
}


});
app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
});