import { ZTime } from "../../../STATIC";
import { v1 } from "uuid";


class MockChatbotEngine {

  static RecordAns(){

  }

  static GetUser(){
    return {
      ID: "1",
      name: "Gambot",
      avatar: "/Images/Icon/gambot.png"
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
          text: "請提供相片",
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
          text: "此觀察是什麼性質?",
          quickReplies: [
            {
              title: "良好質量事項",
              payload: "yes",
              color: "green"
            },
            {
              title: "不良質量事項",
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
          text: "請描述你的觀察"
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
          text: "工作性質是?"
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
          text: "工作活動是?"
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
          text: "公司"
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
          text: "工作地點是"
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
          text: "採取了什麼行動?",
          quickReplies: [
            {
              title: "一般提醒",
              payload: "0"
            },
            {
              title: "口頭警告",
              payload: "1"
            },
            {
              title: "停工",
              payload: "2",
              color: "red"
            },
            {
              title: "停工 (口頭)",
              payload: "3",
              color: "red"
            },
            {
              title: "停工 (停工紙)",
              payload: "4",
              color: "red"
            },
            {
              title: "於零傷害卡打洞",
              payload: "5"
            },
            {
              title: "罰款",
              payload: "6"
            },
            {
              title: "離場",
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
          text: "有更多相片提供?"
        }
      }
    ];
  }

}

export default MockChatbotEngine;