var constants = {
  PAGE_LIMIT: 10,
  NAME_LIMIT: 100,
  HTTP_METHOD: {
    GET: {
      request_body: false,
      default_tab: "query"
    },
    POST: {
      request_body: true,
      default_tab: "body"
    },
    PUT: {
      request_body: true,
      default_tab: "body"
    },
    DELETE: {
      request_body: true,
      default_tab: "body"
    },
    HEAD: {
      request_body: false,
      default_tab: "query"
    },
    OPTIONS: {
      request_body: false,
      default_tab: "query"
    },
    PATCH: {
      request_body: true,
      default_tab: "body"
    }
  },
  PROJECT_COLOR: {
    blue: "#2395f1",
    green: "#00a854",
    yellow: "#ffbf00",
    red: "#f56a00",
    pink: "#f5317f",
    cyan: "#00a2ae",
    gray: "#bfbfbf",
    purple: "#7265e6"
  },
  PROJECT_ICON: ["code-o", "swap", "clock-circle-o", "unlock", "calendar", "play-circle-o", "file-text", "desktop", "hdd", "appstore-o", "line-chart", "mail", "mobile", "notification", "picture", "poweroff", "search", "setting", "share-alt", "shopping-cart", "tag-o", "video-camera", "cloud-o", "star-o", "environment-o", "camera-o", "team", "customer-service", "pay-circle-o", "rocket", "database", "tool", "wifi", "idcard", "medicine-box", "coffee", "safety", "global", "api", "fork", "android-o", "apple-o"],
  HTTP_REQUEST_HEADER: ["Accept", "Accept-Charset", "Accept-Encoding", "Accept-Language", "Accept-Datetime", "Authorization", "Cache-Control", "Connection", "Cookie", "Content-Disposition", "Content-Length", "Content-MD5", "Content-Type", "Date", "Expect", "From", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Max-Forwards", "Origin", "Pragma", "Proxy-Authorization", "Range", "Referer", "TE", "User-Agent", "Upgrade", "Via", "Warning", "X-Requested-With", "DNT", "X-Forwarded-For", "X-Forwarded-Host", "X-Forwarded-Proto", "Front-End-Https", "X-Http-Method-Override", "X-ATT-DeviceId", "X-Wap-Profile", "Proxy-Connection", "X-UIDH", "X-Csrf-Token"],
  METHOD_COLOR: {
    post: {
      bac: "#d2eafb",
      color: "#108ee9"
    },
    get: {
      bac: "#cfefdf",
      color: "#00a854"
    },
    put: {
      bac: "#fff3cf",
      color: "#ffbf00"
    },
    delete: {
      bac: "#fcdbd9",
      color: "#f04134"
    },
    head: {
      bac: "#fff3cf",
      color: "#ffbf00"
    },
    patch: {
      bac: "#fff3cf",
      color: "#ffbf00"
    },
    options: {
      bac: "#fff3cf",
      color: "#ffbf00"
    }
  },
  MOCK_SOURCE: [{
    name: "\u5B57\u7B26\u4E32",
    mock: "@string"
  }, {
    name: "\u81EA\u7136\u6570",
    mock: "@natural"
  }, {
    name: "\u6D6E\u70B9\u6570",
    mock: "@float"
  }, {
    name: "\u5B57\u7B26",
    mock: "@character"
  }, {
    name: "\u5E03\u5C14",
    mock: "@boolean"
  }, {
    name: "url",
    mock: "@url"
  }, {
    name: "\u57DF\u540D",
    mock: "@domain"
  }, {
    name: "ip\u5730\u5740",
    mock: "@ip"
  }, {
    name: "id",
    mock: "@id"
  }, {
    name: "guid",
    mock: "@guid"
  }, {
    name: "\u5F53\u524D\u65F6\u95F4",
    mock: "@now"
  }, {
    name: "\u65F6\u95F4\u6233",
    mock: "@timestamp"
  }, {
    name: "\u65E5\u671F",
    mock: "@date"
  }, {
    name: "\u65F6\u95F4",
    mock: "@time"
  }, {
    name: "\u65E5\u671F\u65F6\u95F4",
    mock: "@datetime"
  }, {
    name: "\u56FE\u7247\u8FDE\u63A5",
    mock: "@image"
  }, {
    name: "\u56FE\u7247data",
    mock: "@imageData"
  }, {
    name: "\u989C\u8272",
    mock: "@color"
  }, {
    name: "\u989C\u8272hex",
    mock: "@hex"
  }, {
    name: "\u989C\u8272rgba",
    mock: "@rgba"
  }, {
    name: "\u989C\u8272rgb",
    mock: "@rgb"
  }, {
    name: "\u989C\u8272hsl",
    mock: "@hsl"
  }, {
    name: "\u6574\u6570",
    mock: "@integer"
  }, {
    name: "email",
    mock: "@email"
  }, {
    name: "\u5927\u6BB5\u6587\u672C",
    mock: "@paragraph"
  }, {
    name: "\u53E5\u5B50",
    mock: "@sentence"
  }, {
    name: "\u5355\u8BCD",
    mock: "@word"
  }, {
    name: "\u5927\u6BB5\u4E2D\u6587\u6587\u672C",
    mock: "@cparagraph"
  }, {
    name: "\u4E2D\u6587\u6807\u9898",
    mock: "@ctitle"
  }, {
    name: "\u6807\u9898",
    mock: "@title"
  }, {
    name: "\u59D3\u540D",
    mock: "@name"
  }, {
    name: "\u4E2D\u6587\u59D3\u540D",
    mock: "@cname"
  }, {
    name: "\u4E2D\u6587\u59D3",
    mock: "@cfirst"
  }, {
    name: "\u4E2D\u6587\u540D",
    mock: "@clast"
  }, {
    name: "\u82F1\u6587\u59D3",
    mock: "@first"
  }, {
    name: "\u82F1\u6587\u540D",
    mock: "@last"
  }, {
    name: "\u4E2D\u6587\u53E5\u5B50",
    mock: "@csentence"
  }, {
    name: "\u4E2D\u6587\u8BCD\u7EC4",
    mock: "@cword"
  }, {
    name: "\u5730\u5740",
    mock: "@region"
  }, {
    name: "\u7701\u4EFD",
    mock: "@province"
  }, {
    name: "\u57CE\u5E02",
    mock: "@city"
  }, {
    name: "\u5730\u533A",
    mock: "@county"
  }, {
    name: "\u8F6C\u6362\u4E3A\u5927\u5199",
    mock: "@upper"
  }, {
    name: "\u8F6C\u6362\u4E3A\u5C0F\u5199",
    mock: "@lower"
  }, {
    name: "\u6311\u9009\uFF08\u679A\u4E3E\uFF09",
    mock: "@pick"
  }, {
    name: "\u6253\u4E71\u6570\u7EC4",
    mock: "@shuffle"
  }, {
    name: "\u534F\u8BAE",
    mock: "@protocol"
  }],
  IP_REGEXP: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/,
  docHref: {
    adv_mock_case: "https://hellosean1025.github.io/yapi/documents/mock.html",
    adv_mock_script: "https://hellosean1025.github.io/yapi/documents/adv_mock.html"
  }
};
export { constants as c };
