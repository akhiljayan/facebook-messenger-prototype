angular.module('templateChacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/chatBox/chatBox.html',
    "<div class=\"col-md-12 no-padding\" ng-if=\"vm.userDetails\">\r" +
    "\n" +
    "    <div class=\"col-md-12 no-padding text-center main-user-details\">\r" +
    "\n" +
    "        <div class=\"main-text\">{{vm.userDetails.fullName}}</div>\r" +
    "\n" +
    "        <div class=\"conversation-text\">\r" +
    "\n" +
    "            <span ng-if=\"vm.userDetails.isOnline\">Online</span>\r" +
    "\n" +
    "            <span ng-if=\"!vm.userDetails.isOnline\">Offline</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-12 chat-list\" id=\"chat-box\">\r" +
    "\n" +
    "        <div ng-repeat=\"chat in vm.chatHistory.conversation | orderBy: orderByDate\">\r" +
    "\n" +
    "            <div ng-if=\"chat.formUserId == vm.currentUser.id\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row justify-content-end\">\r" +
    "\n" +
    "                    <div class=\"col-md-7 padding-top-bottom-10 inline-block\" style=\"float:right\">\r" +
    "\n" +
    "                        <div class=\"my-message\">\r" +
    "\n" +
    "                            {{chat.message}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"chat.formUserId != vm.currentUser.id\">\r" +
    "\n" +
    "                <div class=\"row pull-left padding-top-bottom-10\">\r" +
    "\n" +
    "                    <div class=\"col-md-1 inline-block user-image\">\r" +
    "\n" +
    "                        <img ng-src=\"{{vm.userDetails.profilePic}}\" class=\"conversation-mesage-detail-img\" alt=\"Avatar\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-8 inline-block no-padding-left\">\r" +
    "\n" +
    "                        <div class=\"conversation-text\">{{vm.userDetails.fullName}}</div>\r" +
    "\n" +
    "                        <div class=\"friend-message\">\r" +
    "\n" +
    "                            {{chat.message}}\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-10 footer-right\">\r" +
    "\n" +
    "        <div class=\"row chat-box-form\">\r" +
    "\n" +
    "            <form ng-submit=\"vm.sentMessage()\" name=\"vm.chat\" class=\"form\">\r" +
    "\n" +
    "                <div class=\"col-md-10 inline-block\">\r" +
    "\n" +
    "                    <input type=\"text\" ng-model=\"vm.message\" placeholder=\"Aa\" class=\"form-control chat-input\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-1 inline-block\">\r" +
    "\n" +
    "                    <button type=\"submit\" class=\"btn message-sent-arrow\">\r" +
    "\n" +
    "                        <i class=\"fas fa-location-arrow\"></i>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('components/conversationBlock/conversationBlock.html',
    "<div class=\"row conversation-block\" ng-click=\"vm.userSelected(vm.conversation.id)\">\r" +
    "\n" +
    "    <div class=\"col-md-2 inline-block user-image\">\r" +
    "\n" +
    "        <img ng-src=\"{{vm.conversation.profilePic}}\" class=\"conversation-block-img\" alt=\"Avatar\">\r" +
    "\n" +
    "        <div class=\"online-icon\" ng-if=\"vm.conversation.isOnline\">\r" +
    "\n" +
    "            <i class=\"fas fa-circle\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-8 inline-block\">\r" +
    "\n" +
    "        <div class=\"main-text\">{{vm.conversation.fullName}}</div>\r" +
    "\n" +
    "        <div class=\"conversation-text truncate\">{{vm.conversation.lastMessage}}</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-2 no-padding inline-block\">\r" +
    "\n" +
    "        <div class=\"conversation-text\">{{vm.getDate(vm.conversation.lastMessageTimestamp)}}</div>\r" +
    "\n" +
    "        <div class=\"conversation-text pull-right\" ng-if=\"vm.conversation.sent && !vm.conversation.seen && !vm.conversation.isReceived\">\r" +
    "\n" +
    "            <i class=\"far fa-check-circle message-indication\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"conversation-text  pull-right\" ng-if=\"vm.conversation.sent && !vm.conversation.seen && vm.conversation.isReceived\">\r" +
    "\n" +
    "            <i class=\"fas fa-check-circle message-indication\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div ng-if=\"vm.conversation.sent && vm.conversation.seen && vm.conversation.isReceived\">\r" +
    "\n" +
    "            <img ng-src=\"{{vm.conversation.profilePic}}\" class=\"conversation-seen-img\" alt=\"Avatar\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('components/friendsList/friendsList.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12 no-padding-right search-conversation\">\r" +
    "\n" +
    "        <input class=\"form-control search-box\" type=\"text\" placeholder=\"Search\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-12 conversation-list\">\r" +
    "\n" +
    "        <div ng-repeat=\"conversation in vm.latestConversations | orderBy: orderByDate\">\r" +
    "\n" +
    "            <conversation-block model=\"conversation\" user-click=\"vm.userClicked($event)\"></conversation-block>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-3 footer\">\r" +
    "\n" +
    "        <div class=\"row list-settings\">\r" +
    "\n" +
    "            <div class=\"col-md-4 inline-block text-center\">\r" +
    "\n" +
    "                <i class=\"far fa-clock\"></i><br>\r" +
    "\n" +
    "                <div class=\"conversation-text truncate\">Home</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-4 inline-block text-center\">\r" +
    "\n" +
    "                <i class=\"fas fa-list-ul\"></i><br>\r" +
    "\n" +
    "                <div class=\"conversation-text truncate\">People</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-4 inline-block text-center\">\r" +
    "\n" +
    "                <i class=\"fas fa-cog\"></i><br>\r" +
    "\n" +
    "                <div class=\"conversation-text truncate\">Settings</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('components/home/home.html',
    "<div class=\"main-app-title\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <h5>Messenger</h5>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"page-wrap\">\r" +
    "\n" +
    "    <div class=\"row no-margin-right\">\r" +
    "\n" +
    "        <div class=\"col-md-3\">\r" +
    "\n" +
    "            <friends-list user-selected=\"vm.userSelected($event)\"></friends-list>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-9 no-padding\">\r" +
    "\n" +
    "            <chat-box selected-user-id=\"vm.userId\"></chat-box>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/formInput/formInput.html',
    "<div class=\"content\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-1 inline-block text-align-left\">\r" +
    "\n" +
    "            <a href=\"#\" style=\"vertical-align: sub\" ng-click=\"vm.goBack()\"><i class=\"fas font-20 fa-arrow-alt-circle-left\"></i></a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-10 inline-block text-align-centre\">\r" +
    "\n" +
    "            <h2>Form Input</h2>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-1 inline-block\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\" style=\"text-align: center\">\r" +
    "\n" +
    "        <form name=\"vm.empform\" ng-submit=\"vm.submitTable()\" style=\"width:100%\">\r" +
    "\n" +
    "            <div class=\"row text-align-centre padding-bottom-10\" ng-if=\"vm.employees.length > 0\">\r" +
    "\n" +
    "                <div class=\"col-1\">#</div>\r" +
    "\n" +
    "                <div class=\"col-4\">Employee Name</div>\r" +
    "\n" +
    "                <div class=\"col-2\">Gender</div>\r" +
    "\n" +
    "                <div class=\"col-4\">Manager</div>\r" +
    "\n" +
    "                <div class=\"col-1\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"row text-align-centre padding-bottom-5\" ng-repeat=\"emp in vm.employees\">\r" +
    "\n" +
    "                <div class=\"hidden\" style=\"display:none\">{{emp.id = $index + 1}}</div>\r" +
    "\n" +
    "                <div class=\"col-1\">{{$index + 1}}</div>\r" +
    "\n" +
    "                <div class=\"col-4\">\r" +
    "\n" +
    "                    <input type=\"text\" ng-required=\"true\" ng-model=\"emp.name\" class=\"form-control\" placeholder=\"Name\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-2\">\r" +
    "\n" +
    "                    <select class=\"custom-select form-control\" ng-required=\"true\" ng-model=\"emp.gender\"\r" +
    "\n" +
    "                        aria-placeholder=\"Gender\">\r" +
    "\n" +
    "                        <option value=\"\">Gender</option>\r" +
    "\n" +
    "                        <option value=\"M\">Male</option>\r" +
    "\n" +
    "                        <option value=\"F\">Female</option>\r" +
    "\n" +
    "                    </select>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-4\">\r" +
    "\n" +
    "                    <input type=\"text\" ng-model=\"emp.manager\" ng-required=\"true\" class=\"form-control\" placeholder=\"Manager\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-1\" style=\"padding-left:0px\">\r" +
    "\n" +
    "                    <button class=\"btn btn-danger link-btn\" ng-click=\"vm.removeInput($index)\"><i class=\"fas fa-times\"></i></button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div style=\"margin-top:10px\">\r" +
    "\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"vm.addFormField()\">Add Employee</button>\r" +
    "\n" +
    "                <button class=\"btn btn-success\" ng-disabled=\"!vm.employees.length\" type='submit'>Find Secret Santas</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/jsonInput/jsonInput.html',
    "<div class=\"content\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-1 inline-block text-align-left\">\r" +
    "\n" +
    "            <a href=\"#\" style=\"vertical-align: sub\" ng-click=\"vm.goBack()\"><i class=\"fas font-20 fa-arrow-alt-circle-left\"></i></a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-10 inline-block text-align-centre\">\r" +
    "\n" +
    "            <h2>Json Input</h2>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-1 inline-block\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-12\">\r" +
    "\n" +
    "            <span>Please give input in following format:</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-12\">\r" +
    "\n" +
    "            <pre>{{vm.format | json}}</pre>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\" style=\"text-align: center\">\r" +
    "\n" +
    "        <div style=\"width:100%\">\r" +
    "\n" +
    "            <textarea ng-model=\"vm.obj\" id=\"myTextArea\" cols=50 rows=10 placeholder=\"Json Input\"></textarea>\r" +
    "\n" +
    "            <div style=\"margin-top:10px\">\r" +
    "\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"vm.prettyPrint()\">Format Json</button>\r" +
    "\n" +
    "                <button class=\"btn btn-success\" ng-click=\"vm.test()\">Find Secret Santas</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/showSecretSanta/showSecretSanta.html',
    "<div class=\"content\" id=\"secret-santa\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-1 inline-block text-align-left\">\r" +
    "\n" +
    "            <a href=\"#\" style=\"vertical-align: sub\" ng-click=\"vm.goBack()\"><i class=\"fas font-20 fa-arrow-alt-circle-left\"></i></a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-9 inline-block text-align-centre\">\r" +
    "\n" +
    "            <h2>Secret Santas</h2>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-2 inline-block\">\r" +
    "\n" +
    "            <span class=\"maleIndication\"></span>&nbsp;Male\r" +
    "\n" +
    "            <span Class=\"femaleIndication\"></span>&nbsp;Female\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"container margin-bottom-10\" ng-if=\"vm.secretsantasPairs.length\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-5 col-grid\" ng-repeat=\"pairs in vm.secretsantasPairs\" ng-class=\"{'background-female': pairs[0].gender == 'f', 'background-male': pairs[0].gender == 'm'}\">\r" +
    "\n" +
    "                <div class=\"row text-align-centre\">\r" +
    "\n" +
    "                    <div class=\"col-5\">\r" +
    "\n" +
    "                        <h5 style=\"font-weight:bolder\">\r" +
    "\n" +
    "                            {{pairs[0].name}}\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                        <p style=\"font-size: 12px\">(Manager: {{pairs[0].manager}})</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-1\">\r" +
    "\n" +
    "                        <i class=\"fas fa-exchange-alt\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-5\">\r" +
    "\n" +
    "                        <h5 style=\"font-weight:bolder\">\r" +
    "\n" +
    "                            {{pairs[1].name}}\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                        <p style=\"font-size: 12px\">(Manager: {{pairs[1].manager}})</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container\" ng-if=\"vm.secretsantasNonPairs.length\">\r" +
    "\n" +
    "        <span style=\"display: inline-block; padding-bottom:5px\">\r" +
    "\n" +
    "            <b>Sorry!! could not find a pair for the following employees.</b>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div ng-repeat=\"np in vm.secretsantasNonPairs\" class=\"col-3 col-grid-low\">\r" +
    "\n" +
    "                <h5 style=\"font-weight:bolder\">\r" +
    "\n" +
    "                    {{np.name}}\r" +
    "\n" +
    "                </h5>\r" +
    "\n" +
    "                <p style=\"font-size: 12px; margin:0px\">Gender: {{np.gender == 'm' ? 'Male' : 'Female'}}</p>\r" +
    "\n" +
    "                <p style=\"font-size: 12px; margin:0px\">Manager: {{np.manager}}</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container text-align-centre\" ng-if=\"vm.secretsantasPairs.length || vm.secretsantasNonPairs.length\">\r" +
    "\n" +
    "        <div style=\"margin-top:10px\">\r" +
    "\n" +
    "            <button class=\"btn btn-danger\" ng-click=\"vm.goBack()\"><i class=\"fas fa-times\"></i> &nbsp;Close</button>\r" +
    "\n" +
    "            <button class=\"btn btn-success\" ng-click=\"vm.printDiv()\"><i class=\"fas fa-print\"></i> &nbsp;Print</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );

}]);
