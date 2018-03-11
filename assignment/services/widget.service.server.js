module.exports = function (app) {

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget?", reorderWidgets);

  const widgets = [
    {_id: '1', type: 'HEADER', pageId: '321', size: '2', text: 'GIZMODO'},
    {_id: '2', type: 'HEADER', pageId: '321', size: '4', text: 'Lorem ipsum'},
    {_id: '3', type: 'IMAGE', pageId: '321', size: '2', text: 'text', width: '100%',
      url: 'http://lorempixel.com/400/200/'},
    {_id: '4', type: 'IMAGE', pageId: '321', size: '2', text: 'my image', width: '100%',
      url: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/11/4/2/FNM_120109-Sugar-Fix-006_s4x3.jpg'
      + '.rend.hgtvcom.616.462.suffix/1382539033745.jpeg'},
    {_id: '5', type: 'YOUTUBE', pageId: '321', size: '2', text: 'text', width: '100%',
      url: 'https://www.youtube.com/embed/d5nCbSNS9mA'}
  ];

  function createWidget(req, res) {
    const widget = req.body;
    widget._id = String(widgets.length + 1);
    console.log('create new widget: ' + widget._id);
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];
    const resultSet = widgets.filter(function (widget) {
      return widget.pageId === pageId;
    });
    if (resultSet) {
      console.log("find widgets for page: success");
      res.json(resultSet);
    } else {
      console.log("find widgets for page: not found");
      res.json({});
    }
  }

  function findWidgetById(req, res) {
    const widgetId = req.params['widgetId'];
    const widget = widgets.find(function (widget) {
      return widget._id === widgetId;
    });
    if (widget) {
      console.log("find widget by id: " + widget._id);
      res.json(widget);
    } else {
      console.log("find widget by id: not found");
      res.json({});
    }
  }

  function updateWidget(req, res) {
    const widgetId = req.params['widgetId'];
    const widget = req.body;
    for (const i in widgets) {
      if (widgets[i]._id === widgetId) {
        console.log(req.body);
        console.log("update widget: " + widgetId);

        widgets[i].name = widget.name;
        widgets[i].text = widget.text;
        widgets[i].size = widget.size;
        widgets[i].url = widget.url;
        widgets[i].width = widget.width;
        res.status(200).send(widget);
        return;
      }
    }
    res.status(404).send("not found!");  }

  function deleteWidget(req, res) {
    const widgetId = req.params['widgetId'];
    for (const i in widgets) {
      if (widgets[i]._id === widgetId) {
        const j = +i;
        console.log('delete widget: ' + widgetId);
        widgets.splice(j, 1);
        return;
      }
    }
  }

  function reorderWidgets(req, res) {
    //var pageId = req.params.pageId;
    const startIndex = parseInt(req.query.initial);
    const endIndex = parseInt(req.query.final);
    widgets.splice(endIndex, 0, widgets.splice(startIndex, 1)[0]);
    res.json(200);
  }
};
