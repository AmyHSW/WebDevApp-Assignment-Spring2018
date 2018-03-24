module.exports = function (app) {

  const pageModel = require("../models/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  const pages = [
    {_id: '321', name: 'page321', websiteId: '321', description: 'test page 321'},
    {_id: '111', name: 'page111', websiteId: '111', description: 'test page 111'},
    {_id: '222', name: 'page222', websiteId: '222', description: 'test page 222'},
    {_id: '333', name: 'page3', websiteId: '333', description: 'test page 333'},
    {_id: '432', name: 'page432', websiteId: '432', description: 'test page 432'},
    {_id: '234', name: 'page234', websiteId: '234', description: 'test page 234'}
  ];

  function createPage(req, res) {
    const websiteId = req.params.websiteId;
    const page = req.body;

    pageModel.createPage(websiteId, page)
      .then(function(response){
        res.status(200).send(response);
      });


    // const new_page = {
    //   _id: (new Date()).getTime().toString(),
    //   name: req.body.name,
    //   websiteId: req.params['websiteId'],
    //   title: req.body.title
    // };
    // console.log('create new page: ' + new_page._id + ' ' + new_page.name);
    // pages.push(new_page);
    // res.json(new_page);
  }

  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(websiteId)
      .then(function(pages) {
        console.log(pages);
        res.send(200).json(pages);
      }, function(err) {
        console.log(err);
        res.status(500);
      });

    // const resultSet =  pages.filter(function (page) {
    //   return page.websiteId === websiteId;
    // });
    // if (resultSet) {
    //   console.log('find pages for user: success');
    //   res.json(resultSet);
    // } else {
    //   console.log('find pages for user: not found');
    //   res.json({});
    // }
  }

  function findPageById(req, res) {
    const pageId = req.params['pageId'];
    pageModel.findPageById(pageId)
      .then(function(page) {
        console.log(page);
        res.status(200).json(page);
      }, function(err) {
        console.log(err);
        res.status(500);
    });
    //
    // const page = pages.find(function (page) {
    //   return page._id === pageId;
    // });
    // if (page) {
    //   console.log('find page by id: ' + page._id + ' ' + page.name);
    //   res.json(page);
    // } else {
    //   console.log('find page by id: not found');
    //   res.json({});
    // }
  }

  function updatePage(req, res) {
    const pageId = req.params['pageId'];
    const page = req.body;
    pageModel.updatePage(pageId, page)
      .then(function(response) {
        res.send(200).json(response);
      }, function(err) {
        console.log(err);
        res.send(500);
      });

    // for (const i in pages) {
    //   if (pages[i]._id === pageId) {
    //     console.log(req.body);
    //     console.log("update page: " + pageId + " " + page.name);
    //
    //     pages[i].name = page.name;
    //     pages[i].title = page.title;
    //     res.status(200).send(page);
    //     return;
    //   }
    // }
    // res.status(404).send("not found!");
  }

  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    // const websiteId = req.params['websiteId'];
    pageModel.deletePage(pageId)
      .then(function(status){
        res.send(status);
      });

    // for (const i in pages) {
    //   if (pages[i]._id === pageId) {
    //     const j = +i;
    //     res.json(pages[i]);
    //     console.log('delete page: ' + pageId);
    //     pages.splice(j, 1);
    //     return;
    //   }
    // }
  }
};
