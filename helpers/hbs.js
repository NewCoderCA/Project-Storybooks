const moment = require("moment");

module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format);
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let newStr = str + " ";
      newStr = str.substr(0, len);
      newStr = str.substr(0, newStr.lastIndexOf(" "));
      newStr = newStr.length > 0 ? newStr : str.substr(0, len);
      return newStr + "...";
    }
    return str;
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },
  editIcon: function (storyUser, loggedUser, storyId) {
    console.log(storyId);
    console.log(storyUser);
    if (storyUser._id.toString() === loggedUser._id.toString()) {
      return `<a href="/stories/edit/{{storyId}}" class="btn blue">Edit</a>`;
    } else {
      return "";
    }
  },
};
