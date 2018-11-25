(function () {
  angular.module('app').factory('operations', ['$state', '$filter', function ($state, $filter) {
    var operationFactory = {};

    var currentUser = {
      "id": "9e9705935bfa86752d763395",
      "userName": "akhil",
      "fullName": "Akhil",
      "isOnline": true,
      "profilePic": "https://picsum.photos/200/200",
    }

    operationFactory.getCurrentUser = function () {
      return currentUser;
    };

    operationFactory.getRecentConversations = function (id) {
      //Get server call to get friends list using socketio
      return dataWithConversation;
    }

    operationFactory.searchConversation = function (string) {
      //Get server call to get friends list using socketio
      return dataWithConversation;
    }

    operationFactory.addMessageToChat = function (conversationId, model) {
      var convo = $filter('filter')(conversations, function (m) {
        return m.id == conversationId;
      })[0];

      convo.conversation.push(model);
    };

    operationFactory.getUserById = function (userId) {
      var user = $filter('filter')(dataWithConversation, function (m) {
        return m.id == userId;
      })[0];
      return user;
    };

    operationFactory.getAllConversations = function () {
      return conversations;
    };

    operationFactory.getConversations = function (userId) {
      var convs = $filter('filter')(conversations, function (m) {
        return m.converseUserId == userId;
      })[0];
      return convs;
    };


    var dataWithConversation = [
      {
        "id": "5bfad7637f78f3f44185eb10",
        "userName": "Knowles",
        "fullName": "Reilly",
        "lastMessageTimestamp": "Sun Aug 02 2015 20:04:10 GMT+0000",
        "lastMessage": "Exercitation deserunt magna fugiat elit laborum occaecat ut adipisicing.",
        "isOnline": false,
        "isReceived": false,
        "seen": false,
        "sent": false,
        "profilePic": "https://picsum.photos/173/271",
        "isGroup": false
      },
      {
        "id": "5bfad763009e70c5ccf2c9e3",
        "userName": "Hendrix",
        "fullName": "Janie",
        "lastMessageTimestamp": "Wed Feb 07 2018 09:11:39 GMT+0000",
        "lastMessage": "Culpa aliquip et non ullamco quis laborum ut ad.",
        "isOnline": true,
        "isReceived": true,
        "seen": true,
        "sent": true,
        "profilePic": "https://picsum.photos/197/237",
        "isGroup": true
      },
      {
        "id": "5bfad763a177a24575b33ed4",
        "userName": "Cline",
        "fullName": "Whitney",
        "lastMessageTimestamp": "Mon Oct 31 2016 18:37:06 GMT+0000",
        "lastMessage": "Laboris dolore duis incididunt est non pariatur velit mollit qui elit tempor culpa nisi cillum.",
        "isOnline": false,
        "isReceived": true,
        "seen": true,
        "sent": false,
        "profilePic": "https://picsum.photos/139/261",
        "isGroup": true
      },
      {
        "id": "5bfad7632870810466c98e06",
        "userName": "Logan",
        "fullName": "Kathy",
        "lastMessageTimestamp": "Fri Jul 25 2014 04:11:34 GMT+0000",
        "lastMessage": "Veniam mollit non ea tempor et reprehenderit proident commodo occaecat esse cillum.",
        "isOnline": false,
        "isReceived": false,
        "seen": true,
        "sent": false,
        "profilePic": "https://picsum.photos/145/240",
        "isGroup": false
      },
      {
        "id": "5bfad7639d4db9a931511ecc",
        "userName": "Hartman",
        "fullName": "Sandra",
        "lastMessageTimestamp": "Fri Mar 25 2016 16:15:46 GMT+0000",
        "lastMessage": "Est duis exercitation velit minim voluptate ut excepteur.",
        "isOnline": false,
        "isReceived": true,
        "seen": false,
        "sent": false,
        "profilePic": "https://picsum.photos/197/296",
        "isGroup": false
      },
      {
        "id": "5bfad763f98d7a4a6c2b5a36",
        "userName": "Rosales",
        "fullName": "Tessa",
        "lastMessageTimestamp": "Fri Feb 20 2015 16:29:08 GMT+0000",
        "lastMessage": "Irure aliqua ut est elit elit exercitation tempor qui velit exercitation consequat voluptate.",
        "isOnline": false,
        "isReceived": false,
        "seen": true,
        "sent": false,
        "profilePic": "https://picsum.photos/170/252",
        "isGroup": false
      },
      {
        "id": "5bfad76356ebe02a72a03104",
        "userName": "Simpson",
        "fullName": "Clarissa",
        "lastMessageTimestamp": "Fri Nov 02 2018 01:55:32 GMT+0000",
        "lastMessage": "Tempor fugiat in excepteur reprehenderit tempor anim duis adipisicing aliqua cupidatat voluptate enim quis.",
        "isOnline": true,
        "isReceived": true,
        "seen": false,
        "sent": true,
        "profilePic": "https://picsum.photos/116/278",
        "isGroup": false
      },
      {
        "id": "5bfad7630869e97525937395",
        "userName": "melisa",
        "fullName": "Melisa",
        "lastMessageTimestamp": new Date(),
        "lastMessage": "Adipisicing occaecat aute nulla ex amet cillum aute anim consequat.",
        "isOnline": false,
        "isReceived": true,
        "seen": true,
        "sent": false,
        "profilePic": "https://picsum.photos/122/203",
        "isGroup": false
      },
      {
        "id": "5bfad76300c6838f0bad2bdc",
        "userName": "Tate",
        "fullName": "Heath",
        "lastMessageTimestamp": "Mon Jun 09 2014 06:38:12 GMT+0000",
        "lastMessage": "Voluptate ut id sit minim irure.",
        "isOnline": false,
        "isReceived": false,
        "seen": false,
        "sent": false,
        "profilePic": "https://picsum.photos/176/300",
        "isGroup": false
      },
      {
        "id": "5bfad763a8be5756edf3a117",
        "userName": "Moss",
        "fullName": "Ballard",
        "lastMessageTimestamp": "Sat Feb 22 2014 18:13:35 GMT+0000",
        "lastMessage": "Labore incididunt aliqua id ea enim consequat eiusmod tempor ut mollit voluptate ut aute nisi.",
        "isOnline": true,
        "isReceived": true,
        "seen": true,
        "sent": true,
        "profilePic": "https://picsum.photos/184/289",
        "isGroup": false
      },
      {
        "id": "5bfad763198fef27a44a22d2",
        "userName": "Mckee",
        "fullName": "Teresa",
        "lastMessageTimestamp": new Date(),
        "lastMessage": "Laborum duis occaecat elit velit nisi et exercitation consectetur enim commodo voluptate minim excepteur.",
        "isOnline": false,
        "isReceived": false,
        "seen": false,
        "sent": false,
        "profilePic": "https://picsum.photos/183/261",
        "isGroup": true
      },
      {
        "id": "5bfad763b6bfc5debe80b218",
        "userName": "Price",
        "fullName": "Katharine",
        "lastMessageTimestamp": "Sat Sep 12 2015 18:48:04 GMT+0000",
        "lastMessage": "Laboris incididunt quis esse occaecat.",
        "isOnline": true,
        "isReceived": false,
        "seen": true,
        "sent": true,
        "profilePic": "https://picsum.photos/189/286",
        "isGroup": false
      },
      {
        "id": "5bfad76304e0499050d70b49",
        "userName": "travis",
        "fullName": "Travis",
        "lastMessageTimestamp": "Sat Apr 21 2018 05:59:26 GMT+0000",
        "lastMessage": "Nostrud exercitation irure ullamco aute tempor quis in reprehenderit do exercitation quis.",
        "isOnline": true,
        "isReceived": false,
        "seen": false,
        "sent": true,
        "profilePic": "https://picsum.photos/177/257",
        "isGroup": true
      },
      {
        "id": "5bfad763a51a095ebf1de426",
        "userName": "Gillespie",
        "fullName": "Carla",
        "lastMessageTimestamp": "Wed Feb 18 2015 06:08:45 GMT+0000",
        "lastMessage": "Sit ad commodo elit incididunt tempor aliqua est elit adipisicing Lorem minim incididunt.",
        "isOnline": true,
        "isReceived": true,
        "seen": false,
        "sent": false,
        "profilePic": "https://picsum.photos/154/280",
        "isGroup": true
      }
    ];

    var conversations = [
      {
        "id": "5bfafaeb0c909f79fd724d1a",
        "converseUser": "melisa",
        "converseUserId": "5bfad7630869e97525937395",
        "lastMessage": "Adipisicing occaecat aute nulla ex amet cillum aute anim consequat.",
        "isGroup": false,
        "conversation": [{
            "messageId": "5bfafaeb6854fc48fccc8dde",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 16 2016 13:17:53 GMT+0000"),
            "message": "Nostrud consectetur enim deserunt eiusmod occaecat sit anim id exercitation reprehenderit."
          },
          {
            "messageId": "5bfafaeba173f446bd994762",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 16 2016 13:18:53 GMT+0000"),
            "message": "Id fugiat veniam velit aliqua enim incididunt enim consequat veniam."
          },
          {
            "messageId": "5bfafaeb4c7dfbbe8744777e",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 16 2016 13:19:53 GMT+0000"),
            "message": "Incididunt voluptate do dolor tempor aliquip."
          },
          {
            "messageId": "5bfafaeba803438a35285485",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Sun Oct 16 2016 14:20:13 GMT+0000"),
            "message": "Labore labore aliquip officia anim aliqua esse occaecat irure ipsum et est."
          },
          {
            "messageId": "5bfafaebdc1423f83b72164f",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 16 2016 14:45:37 GMT+0000"),
            "message": "Adipisicing est sint esse esse aliquip excepteur laboris ipsum nostrud."
          },
          {
            "messageId": "5bfafaeba95c9966f51363f4",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Sun Oct 16 2016 14:50:37 GMT+0000"),
            "message": "Pariatur ipsum aliqua consequat est laborum id consectetur tempor elit Lorem."
          },
          {
            "messageId": "5bfafaebee9b9d5a535496b7",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 16 2016 15:10:37 GMT+0000"),
            "message": "Fugiat irure sint velit occaecat esse qui nisi."
          },
          {
            "messageId": "5bfafaeba6e69e828be8d273",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Sun Oct 16 2016 15:25:37 GMT+0000"),
            "message": "Non id cillum ea sunt dolor proident in aliqua cupidatat mollit magna anim."
          },
          {
            "messageId": "5bfafaebb9fd217e05a9b230",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Sun Oct 16 2016 16:10:37 GMT+0000"),
            "message": "Incididunt in cillum ad laboris irure reprehenderit."
          },
          {
            "messageId": "5bfafaeb8999cf93cc9e8380",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 18 2016 15:10:37 GMT+0000"),
            "message": "Ea duis in ea laborum dolore dolore quis exercitation exercitation nostrud est in."
          },
          {
            "messageId": "5bfafaeb6f3f964ea2a181ca",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Sun Oct 18 2016 16:10:37 GMT+0000"),
            "message": "Cupidatat veniam duis consequat esse exercitation qui in ea id amet proident."
          },
          {
            "messageId": "5bfafaebd9cd985a4ba992b0",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Sun Oct 18 2016 16:20:37 GMT+0000"),
            "message": "Occaecat culpa deserunt fugiat ea cillum in aliquip nisi consequat excepteur culpa aute."
          },
          {
            "messageId": "5bfafaeb529631dd5075293a",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 18 2016 16:20:40 GMT+0000"),
            "message": "Cupidatat aliqua Lorem aliquip sint laborum ex Lorem nostrud occaecat magna commodo quis."
          },
          {
            "messageId": "5bfafaebcf2916eba9c5d372",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 18 2016 16:30:40 GMT+0000"),
            "message": "Dolore mollit ullamco nulla consectetur labore exercitation fugiat incididunt."
          },
          {
            "messageId": "5bfafaebe42d53622ad88b37",
            "formUser": "melisa",
            "formUserId": "5bfad7630869e97525937395",
            "timeStamp": new Date("Sun Oct 18 2016 17:20:40 GMT+0000"),
            "message": "Adipisicing occaecat aute nulla ex amet cillum aute anim consequat.",
          }
        ]
      },
      {
        "id": "5bfafaebeeef4f22ac786b2b",
        "converseUser": "travis",
        "converseUserId": "5bfad76304e0499050d70b49",
        "lastMessage": "Elit est consequat adipisicing amet deserunt ut.",
        "isGroup": false,
        "conversation": [{
            "messageId": "5bfafaeb099f75d071b61076",
            "formUser": "travis",
            "formUserId": "5bfad76304e0499050d70b49",
            "timeStamp": new Date("Tue Jul 17 2018 07:12:14 GMT+0000"),
            "message": "Proident ut excepteur non consectetur voluptate aliquip incididunt velit aliquip aliqua."
          },
          {
            "messageId": "5bfafaebed6616c4061c292a",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Tue Jul 17 2018 07:15:14 GMT+0000"),
            "message": "Labore ipsum mollit duis labore culpa velit adipisicing sint occaecat."
          },
          {
            "messageId": "5bfafaebfcc37f2a5dccd66e",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Tue Jul 17 2018 07:15:20 GMT+0000"),
            "message": "Deserunt laboris ullamco nulla labore ipsum ut anim."
          },
          {
            "messageId": "5bfafaeb914a0f827c4aac7f",
            "formUser": "travis",
            "formUserId": "5bfad76304e0499050d70b49",
            "timeStamp": new Date("Tue Jul 17 2018 07:16:20 GMT+0000"),
            "message": "Nisi eiusmod ipsum velit laboris qui enim culpa aliqua mollit deserunt enim."
          },
          {
            "messageId": "5bfafaeb0fdf8dcffe4bb48c",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Tue Jul 17 2018 08:00:20 GMT+0000"),
            "message": "Deserunt velit irure dolore cillum sit consequat sint nisi labore."
          },
          {
            "messageId": "5bfafaebe7be3c741cd297bf",
            "formUser": "travis",
            "formUserId": "5bfad76304e0499050d70b49",
            "timeStamp": new Date("Tue Jul 17 2018 08:10:20 GMT+00000"),
            "message": "Ex Lorem cupidatat laborum non anim labore."
          },
          {
            "messageId": "5bfafaebe7be3c741cd297bf",
            "formUser": currentUser.userName,
            "formUserId": currentUser.id,
            "timeStamp": new Date("Tue Jul 17 2018 08:25:20 GMT+00000"),
            "message": "Nostrud exercitation irure ullamco aute tempor quis in reprehenderit do exercitation quis.",
          }
        ]
      }
    ];


    return operationFactory;
  }]);

})();