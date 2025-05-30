import { Vec2 } from "cc";

/* 日志级别 */
enum DebugLevel {
    DEBUG,
    INFO,
    WARNING,
    ERROR
}

export class GameDefine {
    public static gameStart = false;  //游戏是否启动
    public static gameOver = false;  //游戏结束
    public static gameTouch = false; //触摸移动

    public static frameTime = 0.016; //固定帧时间
    public static defaultFrameTime = 0.016; //固定帧默认时间

    public static viewWidth = 750;
    public static viewHeight = 1334;


    public static ScreenShakeLevel = 1;//屏幕震动等级
    public static ScreenShakeCount = 1;//屏幕震动次数
    public static ScreenShakeInteval = 0.0333;//屏幕震动时间参数

    public static DebugLevel = DebugLevel.DEBUG;//日志级别设置

}
