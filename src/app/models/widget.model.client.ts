export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  name: String;

  constructor(_id, type, pageId, size= '', text = '', width = '', url = '', name = '') {
    this._id = _id;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.name = name;
    this.text = text;
  }
}
