module.exports = function (app) {

  const widgetModel = require("../models/widget/widget.model.server");

  const multer = require('multer'); // npm install multer --save
  const upload = multer({dest: __dirname + '/../../src/assets/uploads'});
  const baseUrl = "";

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  // REORDER
  app.put("/api/page/:pageId/widget?", reorderWidget);

  // UPLOAD
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  function uploadImage(req, res) {
    const websiteId = req.body.websiteId;
    const pageId = req.body.pageId;
    const widgetId = req.body.widgetId;
    const width = req.body.width;
    const name = req.body.name;
    const text = req.body.text;
    const myFile = req.file;

    console.log(req.file);

    const callbackUrl = baseUrl + "/user/website/" + websiteId + "/page/" + pageId + "/widget";

    if(myFile == null) {
      res.redirect(callbackUrl + '/' + widgetId);
      return;
    }

    const originalname = myFile.originalname; // file name on user's computer
    const filename = myFile.filename;     // new file name in upload folder
    const path = myFile.path;         // full path of uploaded file
    const destination = myFile.destination;  // folder where file is saved to
    const size = myFile.size;
    const mimetype = myFile.mimetype;

    if (widgetId === '') {
      let widget = {type: 'Image', _pageId: pageId, url: 'uploads/' + filename};
      widgetModel.createWidget(pageId, widget).then(function(newWidget) {
        // console.log('created widget image (from upload image)');
        res.redirect(callbackUrl + '/' + newWidget._id);
      });
      return;
    }

    const widget =  {url: 'uploads/' + filename};
    widgetModel.updateWidget(widgetId, widget)
      .then(function (response) {
        // console.log('updated widget image (from upload image): widgetId=' + widgetId);
        res.status(200);
      }, function (err) {
        console.log(err);
        res.status(500);
      });
    res.redirect(callbackUrl + '/' + widgetId);
  }

  function reorderWidget(req, res) {
    const pageId = req.params['pageId'];
    const startIndex = parseInt(req.query.initial);
    const endIndex = parseInt(req.query.final);
    widgetModel
      .reorderWidget(pageId, startIndex, endIndex)
      .then(function(response) {
        // console.log('reordered widget: pageId=' + pageId + ' initial=' + startIndex + ' final=' + endIndex);
        res.status(200).json({});
      }, function(err) {
        res.status(500);
      });
  }

  function createWidget(req, res) {
    const widget = req.body;
    const pageId = req.params['pageId'];
    widget._pageId = pageId;
    widgetModel.createWidget(pageId, widget).then(function(response) {
        // console.log('created widget: ' + response);
        widgetModel.findAllWidgetsForPage(pageId)
          .then(function(widgets) {
          res.status(200).json(widgets);
        })
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function(widgets) {
        res.status(200).json(widgets);
        // console.log('found all widgets for page: ' + widgets);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function findWidgetById(req, res) {
    const widgetId = req.params['widgetId'];
    widgetModel.findWidgetById(widgetId)
      .then(function(widget){
        // console.log('found widget by id: ' + widget);
        res.status(200).json(widget);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function updateWidget(req, res) {
    const widgetId = req.params['widgetId'];
    const widget = req.body;
    widgetModel.updateWidget(widgetId, widget)
      .then(function(response) {
        res.status(200).json({});
        // console.log('updated widget: widgetId = ' + widgetId);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deleteWidget(req, res) {
    const widgetId = req.params['widgetId'];
    widgetModel.deleteWidget(widgetId)
      .then(function(response){
        res.status(200).json({});
        // console.log('deleted widget: widgetId = ' + widgetId);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

};
