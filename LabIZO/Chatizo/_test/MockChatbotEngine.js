import { ZTime } from "../../../STATIC";
import { v1 } from "uuid";

const gambotIcon = require("../../../../../assets/Icons/gambot.png");
const favIcon = require("../../../../../assets/favicon.png");

class MockChatbotEngine {

  static Test(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: null,
        msg: {
          system: "Testing - System",
        }
      },
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "Testing - Text",
          image: [
            {
              src: "https://picsum.photos/200"
            },
            {
              src: "https://picsum.photos/200"
            },
            {
              src: "https://picsum.photos/200"
            }
          ],
          imgButtons: [
            {
              image: favIcon,
              title: "Testing - imgBtn 1",
              payload: "Testing1",
              type: "inapp",
              showText: true
            },
            {
              image: "https://picsum.photos/200",
              title: "Testing - imgBtn 2",
              payload: "Testing2",
              type: "inapp",
              showText: false
            },
            {
              image: "https://picsum.photos/200",
              title: "Testing - imgBtn 3",
              payload: "https://picsum.photos/200",
              type: "web",
              showText: false
            }
          ],
          buttons: [
            {
              title: "Testing - Button 1",
              payload: "btn 1",
              color: "red"
            },
            {
              title: "Testing - Button 2",
              payload: "btn 2",
              color: "green"
            }
          ],
          quickReplies: [
            {
              title: "Testing - quickReplies 1",
              payload: "btn 1",
              color: "red"
            },
            {
              title: "Testing - quickReplies 2",
              payload: "btn 2",
              color: "green"
            }
          ]
        }
      }
    ];
  }

  static Start(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "Hi! I am Gambot, what can I help you?",
          imgButtons: [
            {
              image: favIcon,
              title: "View all activities",
              payload: "ViewAllActivies",
              type: "inapp",
              showText: true
            }
          ]
        }
      }
    ];
  }

  static RecordAns(){

  }

  static GetUser(){
    return {
      ID: "1",
      name: "Gambot",
      avatar: gambotIcon
    };
  }

  static GetResponse(step){
    switch(step){
      default: case 0: return MockChatbotEngine.Step0();
      case 1: return MockChatbotEngine.Step1();
      case 2: return MockChatbotEngine.Step2();
      case 3: return MockChatbotEngine.Step3();
      case 4: return MockChatbotEngine.Step4();
      case 5: return MockChatbotEngine.Step5();
      case 6: return MockChatbotEngine.Step6();
      case 7: return MockChatbotEngine.Step7();
      case 8: return MockChatbotEngine.Step8();
    }
  }

  static Step0(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: null,
        msg: {
          system: "You are using SIO reporting system."
        }
      },
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "???????????????",
        }
      }
    ];
  }

  static Step1(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "?????????????????????????",
          quickReplies: [
            {
              title: "??????????????????",
              payload: "yes",
              color: "green"
            },
            {
              title: "??????????????????",
              payload: "no",
              color: "red"
            },
            {
              title: "N/A",
              payload: "na",
              color: "purple"
            }
          ]
        }
      }
    ];
  }

  static Step2(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "?????????????????????"
        }
      }
    ];
  }

  static Step3(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "????????????????"
        },
        next: {
          autoComplete: "workNature"
        }
      }
    ];
  }

  static Step4(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "????????????????"
        },
        next: {
          autoComplete: "workActivities"
        }
      }
    ];
  }

  static Step5(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "??????"
        },
        next: {
          autoComplete: "companies"
        }
      }
    ];
  }

  static Step6(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "???????????????"
        },
        next: {
          autoComplete: "locations"
        }
      }
    ];
  }

  static Step7(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "??????????????????????",
          quickReplies: [
            {
              title: "????????????",
              payload: "0"
            },
            {
              title: "????????????",
              payload: "1"
            },
            {
              title: "??????",
              payload: "2",
              color: "red"
            },
            {
              title: "?????? (??????)",
              payload: "3",
              color: "red"
            },
            {
              title: "?????? (?????????)",
              payload: "4",
              color: "red"
            },
            {
              title: "?????????????????????",
              payload: "5"
            },
            {
              title: "??????",
              payload: "6"
            },
            {
              title: "??????",
              payload: "7"
            },
          ]
        }
      }
    ];
  }

  static Step8(){
    let user = MockChatbotEngine.GetUser();
    return [
      {
        _id: v1(),
        createdAt: ZTime.Now(),
        lapseTime: 0.5,
        user: user,
        msg: {
          text: "??????????????????????"
        }
      }
    ];
  }

}

export default MockChatbotEngine;