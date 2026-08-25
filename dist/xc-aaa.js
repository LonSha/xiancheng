/* XC 3A Beautification System v1.0
 * Character-themed colors, animations, GALGAME bubbles, global CSS injection
 * CDN-hosted at dist/xc-aaa.js
 */
(function() {
  'use strict';
  if (window.__XC_AAA_V1) return;
  window.__XC_AAA_V1 = true;

  // ========== CHARACTER THEME DATA ==========
window.__XC_CHAR_THEMES = {
  '孙翌童': {hue:38,sat:74,light:62,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '杨小雪': {hue:194,sat:32,light:74,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '林葭': {hue:40,sat:17,light:59,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '黎昭': {hue:228,sat:44,light:52,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '李南星': {hue:196,sat:43,light:70,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '金晶晶': {hue:175,sat:46,light:76,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '刘予安': {hue:306,sat:64,light:39,anim:'pulse-dark',bubble:'dark-glow',group:'dark_complex'},
  '许明薇': {hue:40,sat:16,light:58,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '韩冰娇': {hue:53,sat:20,light:51,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '刘恩泽': {hue:237,sat:53,light:52,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '郭雨瑶': {hue:306,sat:43,light:33,anim:'pulse-dark',bubble:'dark-glow',group:'dark_complex'},
  '苏晚棠': {hue:250,sat:48,light:45,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '苏紫宁': {hue:277,sat:56,light:44,anim:'pulse-dark',bubble:'dark-glow',group:'dark_complex'},
  '陈思雨': {hue:238,sat:36,light:48,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '祝绝响': {hue:49,sat:24,light:59,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '沈漾': {hue:55,sat:21,light:51,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '荣柔柔': {hue:353,sat:79,light:53,anim:'sharp-twitch',bubble:'sharp-pointed',group:'sharp_bold'},
  '朱玥': {hue:55,sat:24,light:59,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '马青青': {hue:288,sat:52,light:32,anim:'pulse-dark',bubble:'dark-glow',group:'dark_complex'},
  '珞珈': {hue:182,sat:48,light:75,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '珞花': {hue:47,sat:23,light:61,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '周语彤': {hue:248,sat:40,light:50,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '白晓雪': {hue:231,sat:41,light:48,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '文馨': {hue:56,sat:15,light:57,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '文澜': {hue:53,sat:20,light:64,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '温若宁': {hue:50,sat:16,light:59,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '刘祈音': {hue:203,sat:38,light:58,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '林闻夏': {hue:237,sat:36,light:40,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '江静屿': {hue:228,sat:44,light:45,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '许愿/许愿姬': {hue:94,sat:42,light:51,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '林墨': {hue:256,sat:44,light:40,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '阳灿': {hue:9,sat:72,light:59,anim:'sharp-twitch',bubble:'sharp-pointed',group:'sharp_bold'},
  '淑静': {hue:187,sat:41,light:77,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '安琳': {hue:36,sat:78,light:59,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '兰心': {hue:329,sat:50,light:54,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '孙琦': {hue:44,sat:78,light:64,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '兰心关系分析': {hue:56,sat:29,light:60,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '赵诗晴': {hue:49,sat:25,light:57,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '韦青青': {hue:40,sat:16,light:62,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '林见夏': {hue:8,sat:68,light:54,anim:'sharp-twitch',bubble:'sharp-pointed',group:'sharp_bold'},
  '林听晚': {hue:182,sat:32,light:69,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '珞珈': {hue:182,sat:48,light:75,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '智允': {hue:195,sat:35,light:78,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '胡静': {hue:346,sat:66,light:59,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '汤加琳': {hue:35,sat:77,light:62,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '兰叶': {hue:323,sat:58,light:58,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '黄淑仪': {hue:27,sat:81,light:62,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '张子薇': {hue:46,sat:72,light:63,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '陈晓北': {hue:256,sat:42,light:44,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '珞曼': {hue:135,sat:39,light:48,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '赵雅琴': {hue:54,sat:82,light:58,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '文素': {hue:264,sat:50,light:49,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '让娜·库兹涅佐娃': {hue:59,sat:25,light:65,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '庞咏萱': {hue:223,sat:41,light:48,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '祝佩玲': {hue:347,sat:53,light:56,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '柳青': {hue:46,sat:27,light:53,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '吴海文': {hue:80,sat:36,light:50,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '孙瑞希': {hue:325,sat:65,light:60,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '祝叶谷': {hue:38,sat:76,light:65,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '伦欣桐': {hue:52,sat:83,light:60,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '文馨': {hue:258,sat:36,light:47,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '文澜': {hue:225,sat:31,light:59,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '洪欣彤': {hue:337,sat:55,light:55,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '贺玲': {hue:45,sat:82,light:58,anim:'float',bubble:'rounded-warm',group:'warm_lively'},
  '庞颖': {hue:49,sat:24,light:60,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '刘佳佳': {hue:42,sat:15,light:59,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '独孤春儿': {hue:103,sat:51,light:45,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '张薇薇': {hue:278,sat:42,light:41,anim:'pulse-dark',bubble:'dark-glow',group:'dark_complex'},
  '朱清': {hue:354,sat:80,light:53,anim:'sharp-twitch',bubble:'sharp-pointed',group:'sharp_bold'},
  '汤倩': {hue:217,sat:32,light:54,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '韩真真': {hue:239,sat:45,light:53,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '雅陶': {hue:228,sat:27,light:49,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '文鸢': {hue:355,sat:71,light:55,anim:'sharp-twitch',bubble:'sharp-pointed',group:'sharp_bold'},
  '苏雨': {hue:97,sat:52,light:43,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '陈书婷': {hue:55,sat:20,light:61,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '马琪': {hue:58,sat:27,light:56,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '源丽萍': {hue:50,sat:27,light:61,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '董世青': {hue:277,sat:62,light:44,anim:'pulse-dark',bubble:'dark-glow',group:'dark_complex'},
  '陈莹莹': {hue:326,sat:51,light:55,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '林安安': {hue:187,sat:41,light:76,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '安春生': {hue:2,sat:68,light:59,anim:'sharp-twitch',bubble:'sharp-pointed',group:'sharp_bold'},
  '那可': {hue:341,sat:58,light:52,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '芍药': {hue:106,sat:40,light:42,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '明香香': {hue:49,sat:24,light:61,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '温若宁': {hue:50,sat:16,light:59,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '方敏': {hue:53,sat:23,light:54,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '林沐宜': {hue:43,sat:25,light:62,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '裴姝权': {hue:112,sat:43,light:53,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '孙翌童': {hue:49,sat:20,light:61,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '丁曼红': {hue:40,sat:16,light:58,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '赵小满': {hue:52,sat:17,light:60,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '金宁': {hue:56,sat:16,light:65,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '文素': {hue:264,sat:50,light:49,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '孙苑清': {hue:210,sat:37,light:60,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '海霖': {hue:254,sat:51,light:54,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '周灵': {hue:301,sat:58,light:40,anim:'pulse-dark',bubble:'dark-glow',group:'dark_complex'},
  '赵自由': {hue:261,sat:53,light:46,anim:'fade-flicker',bubble:'misty',group:'wistful_melancholy'},
  '云伊': {hue:53,sat:21,light:58,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '沛涵': {hue:47,sat:21,light:58,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '沈幼楚': {hue:195,sat:37,light:77,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '萧容鱼': {hue:208,sat:43,light:45,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '珞曼': {hue:237,sat:29,light:53,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '文茜': {hue:197,sat:32,light:73,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '刘福堂': {hue:48,sat:17,light:59,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '珞珈': {hue:182,sat:48,light:75,anim:'gentle-sway',bubble:'soft-rounded',group:'gentle_soft'},
  '朱城': {hue:110,sat:54,light:42,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '沈静宜': {hue:105,sat:38,light:42,anim:'slow-grow',bubble:'organic',group:'earth_nature'},
  '夏祈': {hue:332,sat:68,light:59,anim:'luxe-shimmer',bubble:'elegant-rose',group:'complex_feminine'},
  '唐蜜': {hue:48,sat:19,light:54,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
  '魏莱': {hue:228,sat:44,light:55,anim:'breathe',bubble:'angular-cool',group:'cool_guarded'},
  '林野': {hue:60,sat:27,light:51,anim:'minimal-blink',bubble:'clean-minimal',group:'neutral_observant'},
};

  // ========== ANIMATION KEYFRAMES (9 types) ==========
  var animStyle = document.createElement('style');
  animStyle.id = 'xc-aaa-animations';
  animStyle.textContent = `
    /* float - warm/lively characters */
    @keyframes xc-float {
      0%,100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-6px) scale(1.01); }
    }
    /* breathe - cool/guarded characters */
    @keyframes xc-breathe {
      0%,100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.015); opacity: 0.96; }
    }
    /* pulse-dark - dark/complex characters */
    @keyframes xc-pulse-dark {
      0%,100% { filter: brightness(1) saturate(1); transform: scale(1); }
      50% { filter: brightness(0.85) saturate(1.3); transform: scale(1.008); }
    }
    /* gentle-sway - gentle/soft characters */
    @keyframes xc-gentle-sway {
      0%,100% { transform: translateX(0) rotate(0deg); }
      25% { transform: translateX(2px) rotate(0.3deg); }
      75% { transform: translateX(-2px) rotate(-0.3deg); }
    }
    /* sharp-twitch - sharp/bold characters */
    @keyframes xc-sharp-twitch {
      0%,100% { transform: translate(0,0) rotate(0); }
      10% { transform: translate(-1px,1px) rotate(-0.5deg); }
      20% { transform: translate(1px,-1px) rotate(0.5deg); }
      30% { transform: translate(0,0) rotate(0); }
    }
    /* slow-grow - earth/nature characters */
    @keyframes xc-slow-grow {
      0%,100% { transform: scale(1); filter: brightness(1); }
      50% { transform: scale(1.012); filter: brightness(1.08); }
    }
    /* fade-flicker - wistful/melancholy characters */
    @keyframes xc-fade-flicker {
      0%,100% { opacity: 1; filter: brightness(1); }
      30% { opacity: 0.92; filter: brightness(0.95); }
      60% { opacity: 1; filter: brightness(1.05); }
      80% { opacity: 0.96; }
    }
    /* luxe-shimmer - complex/feminine characters */
    @keyframes xc-luxe-shimmer {
      0%,100% { filter: hue-rotate(0deg) brightness(1); }
      33% { filter: hue-rotate(-3deg) brightness(1.08); }
      66% { filter: hue-rotate(3deg) brightness(1.05); }
    }
    /* minimal-blink - neutral/observant characters */
    @keyframes xc-minimal-blink {
      0%,92%,100% { opacity: 1; }
      96% { opacity: 0.97; }
    }

    /* Animation duration mapping */
    .xc-anim-float { animation: xc-float 4s ease-in-out infinite; }
    .xc-anim-breathe { animation: xc-breathe 5s ease-in-out infinite; }
    .xc-anim-pulse-dark { animation: xc-pulse-dark 3.5s ease-in-out infinite; }
    .xc-anim-gentle-sway { animation: xc-gentle-sway 6s ease-in-out infinite; }
    .xc-anim-sharp-twitch { animation: xc-sharp-twitch 8s ease-in-out infinite; }
    .xc-anim-slow-grow { animation: xc-slow-grow 7s ease-in-out infinite; }
    .xc-anim-fade-flicker { animation: xc-fade-flicker 5s ease-in-out infinite; }
    .xc-anim-luxe-shimmer { animation: xc-luxe-shimmer 4s ease-in-out infinite; }
    .xc-anim-minimal-blink { animation: xc-minimal-blink 6s ease-in-out infinite; }

    /* Respect reduced motion */
    @media (prefers-reduced-motion: reduce) {
      [class*="xc-anim-"] { animation: none !important; }
    }
  `;
  document.head.appendChild(animStyle);

  // ========== BUBBLE STYLE SYSTEM (9 types) ==========
  var bubbleStyle = document.createElement('style');
  bubbleStyle.id = 'xc-aaa-bubbles';
  bubbleStyle.textContent = `
    /* Base bubble */
    .xc-bubble {
      position: relative;
      padding: 12px 18px;
      border-radius: 16px;
      margin: 8px 0;
      max-width: 80%;
      font-size: 15px;
      line-height: 1.6;
      transition: all 0.3s ease;
    }
    .xc-bubble::before {
      content: '';
      position: absolute;
      width: 0; height: 0;
    }

    /* rounded-warm - warm/lively */
    .xc-bubble-rounded-warm {
      border-radius: 20px 20px 20px 4px;
      border: 1.5px solid hsla(var(--xc-hue,38), var(--xc-sat,74%), var(--xc-light,62%), 0.35);
      background: hsla(var(--xc-hue,38), var(--xc-sat,74%), var(--xc-light,62%), 0.08);
      box-shadow: 0 2px 12px hsla(var(--xc-hue,38), 70%, 55%, 0.15);
    }
    .xc-bubble-rounded-warm::before {
      left: -8px; bottom: 12px;
      border: 8px solid transparent;
      border-right-color: hsla(var(--xc-hue,38), var(--xc-sat,74%), var(--xc-light,62%), 0.25);
    }

    /* angular-cool - cool/guarded */
    .xc-bubble-angular-cool {
      border-radius: 4px 16px 16px 4px;
      border-left: 3px solid hsl(var(--xc-hue,228), var(--xc-sat,44%), var(--xc-light,52%));
      background: hsla(var(--xc-hue,228), var(--xc-sat,44%), var(--xc-light,52%), 0.06);
      backdrop-filter: blur(8px);
    }
    .xc-bubble-angular-cool::before {
      left: -6px; top: 10px;
      border: 6px solid transparent;
      border-right-color: hsl(var(--xc-hue,228), var(--xc-sat,44%), var(--xc-light,52%));
    }

    /* dark-glow - dark/complex */
    .xc-bubble-dark-glow {
      border-radius: 14px;
      background: hsla(var(--xc-hue,306), 40%, 15%, 0.85);
      border: 1px solid hsla(var(--xc-hue,306), 60%, 50%, 0.4);
      box-shadow: 0 0 20px hsla(var(--xc-hue,306), 60%, 50%, 0.2), inset 0 0 10px hsla(var(--xc-hue,306), 50%, 30%, 0.3);
      color: hsl(var(--xc-hue,306), 30%, 85%);
    }
    .xc-bubble-dark-glow::before {
      left: -7px; bottom: 14px;
      border: 7px solid transparent;
      border-right-color: hsla(var(--xc-hue,306), 40%, 15%, 0.85);
    }

    /* soft-rounded - gentle/soft */
    .xc-bubble-soft-rounded {
      border-radius: 24px;
      border: 1px solid hsla(var(--xc-hue,194), var(--xc-sat,32%), var(--xc-light,74%), 0.25);
      background: hsla(var(--xc-hue,194), var(--xc-sat,32%), var(--xc-light,74%), 0.1);
      box-shadow: 0 4px 16px hsla(var(--xc-hue,194), 30%, 70%, 0.1);
    }
    .xc-bubble-soft-rounded::before {
      left: -7px; bottom: 16px;
      border: 7px solid transparent;
      border-right-color: hsla(var(--xc-hue,194), var(--xc-sat,32%), var(--xc-light,74%), 0.15);
    }

    /* sharp-pointed - sharp/bold */
    .xc-bubble-sharp-pointed {
      border-radius: 2px 2px 12px 2px;
      border: 2px solid hsl(var(--xc-hue,353), var(--xc-sat,79%), var(--xc-light,53%));
      background: hsla(var(--xc-hue,353), var(--xc-sat,79%), var(--xc-light,53%), 0.08);
      clip-path: polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%);
      box-shadow: 2px 2px 8px hsla(var(--xc-hue,353), 70%, 50%, 0.2);
    }
    .xc-bubble-sharp-pointed::before {
      left: -1px; bottom: -1px;
      border: 0;
      width: 10px; height: 10px;
      background: hsl(var(--xc-hue,353), var(--xc-sat,79%), var(--xc-light,53%));
      clip-path: polygon(0 100%, 100% 0, 100% 100%);
    }

    /* organic - earth/nature */
    .xc-bubble-organic {
      border-radius: 50% 50% 50% 50% / 30% 30% 50% 50%;
      border: 1.5px solid hsla(var(--xc-hue,103), var(--xc-sat,51%), var(--xc-light,45%), 0.3);
      background: linear-gradient(135deg, hsla(var(--xc-hue,103), 40%, 40%, 0.06), hsla(var(--xc-hue,103), 45%, 50%, 0.1));
    }
    .xc-bubble-organic::before {
      left: -6px; bottom: 18px;
      border: 6px solid transparent;
      border-right-color: hsla(var(--xc-hue,103), var(--xc-sat,51%), var(--xc-light,45%), 0.2);
    }

    /* misty - wistful/melancholy */
    .xc-bubble-misty {
      border-radius: 16px 16px 16px 2px;
      border: 1px solid hsla(var(--xc-hue,250), 48%, 60%, 0.2);
      background: hsla(var(--xc-hue,250), 40%, 55%, 0.06);
      backdrop-filter: blur(12px) saturate(0.9);
      box-shadow: 0 0 30px hsla(var(--xc-hue,250), 40%, 60%, 0.08);
    }
    .xc-bubble-misty::before {
      left: -6px; bottom: 10px;
      border: 6px solid transparent;
      border-right-color: hsla(var(--xc-hue,250), 48%, 60%, 0.12);
    }

    /* elegant-rose - complex/feminine */
    .xc-bubble-elegant-rose {
      border-radius: 18px 18px 18px 6px;
      border: 1.5px solid hsla(var(--xc-hue,346), 66%, 59%, 0.3);
      background: linear-gradient(135deg, hsla(var(--xc-hue,346), 60%, 65%, 0.08), hsla(var(--xc-hue,346), 50%, 55%, 0.04));
      box-shadow: 0 2px 16px hsla(var(--xc-hue,346), 55%, 60%, 0.12);
    }
    .xc-bubble-elegant-rose::before {
      left: -7px; bottom: 14px;
      border: 7px solid transparent;
      border-right-color: hsla(var(--xc-hue,346), 60%, 65%, 0.15);
    }

    /* clean-minimal - neutral/observant */
    .xc-bubble-clean-minimal {
      border-radius: 4px 4px 4px 14px;
      border-left: 2px solid hsla(var(--xc-hue,40), 20%, 59%, 0.4);
      background: hsla(var(--xc-hue,40), 15%, 59%, 0.04);
    }
    .xc-bubble-clean-minimal::before {
      display: none;
    }
  `;
  document.head.appendChild(bubbleStyle);

  // ========== GLOBAL THEME INJECTION ==========
  var globalStyle = document.createElement('style');
  globalStyle.id = 'xc-aaa-global';
  globalStyle.textContent = `
    /* Ambient background based on active character theme */
    .xc-themed-bg {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background: radial-gradient(ellipse at 50% 30%,
        hsla(var(--xc-active-hue, 40), var(--xc-active-sat, 30%), var(--xc-active-light, 59%), 0.03),
        transparent 70%);
      transition: background 1.5s ease;
    }
    .xc-themed-bg::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 80% 80%,
        hsla(var(--xc-active-hue, 40), 20%, 50%, 0.02),
        transparent 60%);
    }

    /* Message container enhancement */
    .xc-msg-themed {
      border-left: 2px solid hsla(var(--xc-hue, 40), var(--xc-sat, 30%), var(--xc-light, 59%), 0.3);
      padding-left: 10px;
      transition: border-color 0.5s ease;
    }

    /* Character name badge */
    .xc-name-badge {
      display: inline-block;
      padding: 2px 10px;
      border-radius: 10px;
      font-size: 0.85em;
      font-weight: 600;
      background: hsla(var(--xc-hue, 40), var(--xc-sat, 50%), var(--xc-light, 55%), 0.15);
      color: hsl(var(--xc-hue, 40), var(--xc-sat, 60%), calc(var(--xc-light, 55%) - 15%));
      border: 1px solid hsla(var(--xc-hue, 40), var(--xc-sat, 50%), var(--xc-light, 55%), 0.25);
    }

    /* Typewriter cursor for bubble text */
    .xc-typing-cursor::after {
      content: '█';
      animation: xc-cursor-blink 0.8s step-end infinite;
      color: hsl(var(--xc-hue, 40), var(--xc-sat, 50%), var(--xc-light, 55%));
    }
    @keyframes xc-cursor-blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    /* Character portrait frame */
    .xc-portrait-frame {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid hsla(var(--xc-hue, 40), var(--xc-sat, 50%), var(--xc-light, 55%), 0.3);
      box-shadow: 0 0 20px hsla(var(--xc-hue, 40), var(--xc-sat, 50%), var(--xc-light, 55%), 0.1);
      transition: all 0.4s ease;
    }
    .xc-portrait-frame:hover {
      border-color: hsla(var(--xc-hue, 40), var(--xc-sat, 60%), var(--xc-light, 60%), 0.5);
      box-shadow: 0 0 30px hsla(var(--xc-hue, 40), var(--xc-sat, 60%), var(--xc-light, 60%), 0.2);
      transform: scale(1.02);
    }

    /* Emotion tag */
    .xc-emotion-tag {
      display: inline-block;
      padding: 1px 8px;
      border-radius: 4px;
      font-size: 0.75em;
      margin-right: 4px;
      background: hsla(var(--xc-hue, 40), var(--xc-sat, 50%), 50%, 0.12);
      color: hsl(var(--xc-hue, 40), var(--xc-sat, 50%), 40%);
    }

    /* Scene transition overlay */
    .xc-scene-transition {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.6s ease;
      background: radial-gradient(circle at center,
        hsla(var(--xc-active-hue, 40), 40%, 50%, 0.15),
        hsla(var(--xc-active-hue, 40), 30%, 30%, 0.3),
        hsla(0, 0%, 10%, 0.5));
    }
    .xc-scene-transition.xc-active {
      opacity: 1;
    }
  `;
  document.head.appendChild(globalStyle);

  // ========== RUNTIME: Apply character themes to messages ==========
  var ANIM_MAP = {
    'float': 'xc-anim-float',
    'breathe': 'xc-anim-breathe',
    'pulse-dark': 'xc-anim-pulse-dark',
    'gentle-sway': 'xc-anim-gentle-sway',
    'sharp-twitch': 'xc-anim-sharp-twitch',
    'slow-grow': 'xc-anim-slow-grow',
    'fade-flicker': 'xc-anim-fade-flicker',
    'luxe-shimmer': 'xc-anim-luxe-shimmer',
    'minimal-blink': 'xc-anim-minimal-blink',
  };

  function getTheme(name) {
    if (!name) return null;
    // Try exact match
    if (window.__XC_CHAR_THEMES && window.__XC_CHAR_THEMES[name]) {
      return window.__XC_CHAR_THEMES[name];
    }
    // Try fuzzy match (contains)
    if (window.__XC_CHAR_THEMES) {
      var keys = Object.keys(window.__XC_CHAR_THEMES);
      for (var i = 0; i < keys.length; i++) {
        if (name.indexOf(keys[i]) >= 0 || keys[i].indexOf(name) >= 0) {
          return window.__XC_CHAR_THEMES[keys[i]];
        }
      }
    }
    return null;
  }

  function applyThemeToElement(el, name) {
    var theme = getTheme(name);
    if (!theme) return;
    el.style.setProperty('--xc-hue', theme.hue);
    el.style.setProperty('--xc-sat', theme.sat + '%');
    el.style.setProperty('--xc-light', theme.light + '%');
    var animClass = ANIM_MAP[theme.anim];
    if (animClass && el.classList) {
      el.classList.add(animClass);
    }
  }

  function setGlobalActiveTheme(name) {
    var theme = getTheme(name);
    if (!theme) return;
    document.documentElement.style.setProperty('--xc-active-hue', theme.hue);
    document.documentElement.style.setProperty('--xc-active-sat', theme.sat + '%');
    document.documentElement.style.setProperty('--xc-active-light', theme.light + '%');
  }

  // ========== OBSERVE DOM FOR CHARACTER MESSAGES ==========
  function scanForCharacters() {
    // Look for character names in message blocks
    var msgBlocks = document.querySelectorAll('[class*="mes"], [class*="message"], [class*="chat"]');
    msgBlocks.forEach(function(block) {
      if (block.dataset.xcThemed) return;
      var text = block.textContent || '';
      if (window.__XC_CHAR_THEMES) {
        var keys = Object.keys(window.__XC_CHAR_THEMES);
        for (var i = 0; i < keys.length; i++) {
          if (text.indexOf(keys[i]) >= 0 && keys[i].length >= 2) {
            applyThemeToElement(block, keys[i]);
            block.dataset.xcThemed = '1';
            break;
          }
        }
      }
    });
  }

  // Init ambient bg
  var bg = document.createElement('div');
  bg.className = 'xc-themed-bg';
  document.body.appendChild(bg);

  // Scan periodically
  var scanTimer = setInterval(scanForCharacters, 2000);
  scanForCharacters();

  // Expose API
  window.XCAAA = {
    getTheme: getTheme,
    applyTheme: applyThemeToElement,
    setActive: setGlobalActiveTheme,
    createBubble: function(name, text, emotion) {
      var theme = getTheme(name);
      var div = document.createElement('div');
      div.className = 'xc-bubble';
      if (theme) {
        div.className += ' xc-bubble-' + theme.bubble;
        div.style.setProperty('--xc-hue', theme.hue);
        div.style.setProperty('--xc-sat', theme.sat + '%');
        div.style.setProperty('--xc-light', theme.light + '%');
        var animClass = ANIM_MAP[theme.anim];
        if (animClass) div.classList.add(animClass);
      } else {
        div.className += ' xc-bubble-clean-minimal';
      }
      if (emotion) {
        var tag = document.createElement('span');
        tag.className = 'xc-emotion-tag';
        tag.textContent = emotion;
        div.appendChild(tag);
      }
      var span = document.createElement('span');
      span.textContent = text;
      div.appendChild(span);
      return div;
    },
    rescan: scanForCharacters,
  };

  console.log('[XC-AAA] 3A Beautification v1.0 loaded -', Object.keys(window.__XC_CHAR_THEMES || {}).length, 'characters');
})();