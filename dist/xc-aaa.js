/* XC 3A Beautification System v2.0
 * Visible character-themed styling for SillyTavern messages
 */
(function() {
  'use strict';
  if (window.__XC_AAA_V2) return;
  window.__XC_AAA_V2 = true;

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

  // ========== CSS INJECTION ==========
  var style = document.createElement('style');
  style.id = 'xc-aaa-v2';
  style.textContent = `
    @keyframes xc-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
    @keyframes xc-breathe { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.02);opacity:.95} }
    @keyframes xc-pulse-dark { 0%,100%{filter:brightness(1) saturate(1)} 50%{filter:brightness(.8) saturate(1.4)} }
    @keyframes xc-gentle-sway { 0%,100%{transform:translateX(0) rotate(0)} 25%{transform:translateX(2px) rotate(.5deg)} 75%{transform:translateX(-2px) rotate(-.5deg)} }
    @keyframes xc-sharp-twitch { 0%,90%,100%{transform:translate(0,0)} 93%{transform:translate(-1px,1px)} 96%{transform:translate(1px,-1px)} }
    @keyframes xc-slow-grow { 0%,100%{transform:scale(1);filter:brightness(1)} 50%{transform:scale(1.015);filter:brightness(1.1)} }
    @keyframes xc-fade-flicker { 0%,100%{opacity:1} 40%{opacity:.85} 60%{opacity:1} 80%{opacity:.93} }
    @keyframes xc-luxe-shimmer { 0%,100%{filter:hue-rotate(0) brightness(1)} 50%{filter:hue-rotate(5deg) brightness(1.12)} }
    @keyframes xc-minimal-blink { 0%,90%,100%{opacity:1} 95%{opacity:.95} }

    .xc-anim-float{animation:xc-float 4s ease-in-out infinite}
    .xc-anim-breathe{animation:xc-breathe 5s ease-in-out infinite}
    .xc-anim-pulse-dark{animation:xc-pulse-dark 3.5s ease-in-out infinite}
    .xc-anim-gentle-sway{animation:xc-gentle-sway 6s ease-in-out infinite}
    .xc-anim-sharp-twitch{animation:xc-sharp-twitch 8s ease-in-out infinite}
    .xc-anim-slow-grow{animation:xc-slow-grow 7s ease-in-out infinite}
    .xc-anim-fade-flicker{animation:xc-fade-flicker 5s ease-in-out infinite}
    .xc-anim-luxe-shimmer{animation:xc-luxe-shimmer 4s ease-in-out infinite}
    .xc-anim-minimal-blink{animation:xc-minimal-blink 6s ease-in-out infinite}

    .mes.xc-themed {
      border-left: 3px solid hsl(var(--xc-hue,40), var(--xc-sat,50%), var(--xc-light,55%)) !important;
      background: linear-gradient(90deg,
        hsla(var(--xc-hue,40), var(--xc-sat,50%), var(--xc-light,55%), 0.08),
        transparent 40%) !important;
      transition: border-color 0.5s ease, background 0.5s ease !important;
    }
    .mes.xc-themed .ch_name {
      color: hsl(var(--xc-hue,40), calc(var(--xc-sat,50%) * 0.6 + 20%), calc(var(--xc-light,55%) * 0.5 + 35%)) !important;
      text-shadow: 0 0 10px hsla(var(--xc-hue,40), var(--xc-sat,50%), var(--xc-light,55%), 0.4) !important;
    }
    .mes.xc-themed img.avatar,
    .mes.xc-themed .mes_avatar img,
    .mes.xc-themed .avatar img {
      border: 2px solid hsla(var(--xc-hue,40), var(--xc-sat,50%), var(--xc-light,55%), 0.5) !important;
      box-shadow: 0 0 15px hsla(var(--xc-hue,40), var(--xc-sat,50%), var(--xc-light,55%), 0.3) !important;
    }
    .xc-char-badge {
      display: inline-block;
      padding: 1px 8px;
      border-radius: 8px;
      font-size: 0.8em;
      background: hsla(var(--xc-hue,40), var(--xc-sat,50%), var(--xc-light,55%), 0.2);
      border: 1px solid hsla(var(--xc-hue,40), var(--xc-sat,50%), var(--xc-light,55%), 0.4);
      color: hsl(var(--xc-hue,40), var(--xc-sat,50%), calc(var(--xc-light,55%) - 20%));
      margin-left: 6px;
    }
    #xc-ambient {
      position: fixed; inset: 0; pointer-events: none; z-index: 0;
      background: radial-gradient(ellipse at 50% 0%,
        hsla(var(--xc-active-hue,40), 30%, 50%, 0.06),
        transparent 60%);
      transition: background 2s ease;
    }
    #xc-aaa-status {
      position: fixed; bottom: 4px; right: 4px; z-index: 99999;
      font-size: 10px; padding: 2px 6px; border-radius: 4px;
      background: rgba(0,0,0,0.7); color: #0f0;
      font-family: monospace; pointer-events: none; opacity: 0.7;
    }
    @media (prefers-reduced-motion: reduce) {
      [class*="xc-anim-"]{animation:none!important}
    }
  `;
  document.head.appendChild(style);

  var ambient = document.createElement('div');
  ambient.id = 'xc-ambient';
  document.body.appendChild(ambient);

  var status = document.createElement('div');
  status.id = 'xc-aaa-status';
  status.textContent = 'XC-3A: init...';
  document.body.appendChild(status);

  var ANIM_MAP = {
    'float':'xc-anim-float','breathe':'xc-anim-breathe','pulse-dark':'xc-anim-pulse-dark',
    'gentle-sway':'xc-anim-gentle-sway','sharp-twitch':'xc-anim-sharp-twitch','slow-grow':'xc-anim-slow-grow',
    'fade-flicker':'xc-anim-fade-flicker','luxe-shimmer':'xc-anim-luxe-shimmer','minimal-blink':'xc-anim-minimal-blink'
  };

  function getTheme(name) {
    if (!name || !window.__XC_CHAR_THEMES) return null;
    if (window.__XC_CHAR_THEMES[name]) return window.__XC_CHAR_THEMES[name];
    var keys = Object.keys(window.__XC_CHAR_THEMES);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].length >= 2 && (name.indexOf(keys[i]) >= 0 || keys[i].indexOf(name) >= 0))
        return window.__XC_CHAR_THEMES[keys[i]];
    }
    return null;
  }

  var themedCount = 0;
  var activeHue = 40;

  function applyToMessage(mes) {
    if (mes.dataset.xcThemed) return;
    var nameEl = mes.querySelector('.ch_name');
    var charName = '';
    if (nameEl) charName = nameEl.textContent.trim();
    if (!charName) {
      var textEl = mes.querySelector('.mes_text');
      if (textEl) {
        var text = textEl.textContent.trim().slice(0, 20);
        var keys = Object.keys(window.__XC_CHAR_THEMES || {});
        for (var k of keys) {
          if (k.length >= 2 && text.indexOf(k) >= 0) { charName = k; break; }
        }
      }
    }
    if (!charName) return;
    var theme = getTheme(charName);
    if (!theme) return;
    mes.dataset.xcThemed = '1';
    mes.classList.add('xc-themed');
    mes.style.setProperty('--xc-hue', theme.hue);
    mes.style.setProperty('--xc-sat', theme.sat + '%');
    mes.style.setProperty('--xc-light', theme.light + '%');
    var animClass = ANIM_MAP[theme.anim];
    if (animClass) {
      var avatar = mes.querySelector('img.avatar, .mes_avatar img, .avatar img');
      if (avatar) avatar.classList.add(animClass);
      if (nameEl) nameEl.classList.add(animClass);
    }
    if (nameEl && !nameEl.querySelector('.xc-char-badge')) {
      var badge = document.createElement('span');
      badge.className = 'xc-char-badge';
      badge.textContent = '\u2728';
      nameEl.appendChild(badge);
    }
    activeHue = theme.hue;
    document.documentElement.style.setProperty('--xc-active-hue', theme.hue);
    themedCount++;
  }

  function scanAll() {
    var messages = document.querySelectorAll('.mes');
    var total = messages.length;
    messages.forEach(applyToMessage);
    status.textContent = 'XC-3A: ' + themedCount + '/' + total + ' | h=' + activeHue;
  }

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mut) {
      mut.addedNodes.forEach(function(node) {
        if (node.classList && node.classList.contains('mes')) applyToMessage(node);
        if (node.querySelectorAll) node.querySelectorAll('.mes').forEach(applyToMessage);
      });
    });
  });
  observer.observe(document.body, {childList: true, subtree: true});

  scanAll();
  setInterval(scanAll, 3000);

  window.XCAAA = {
    getTheme: getTheme,
    rescan: scanAll,
    version: '2.0',
    count: function() { return themedCount; }
  };

  console.log('[XC-AAA] v2.0 loaded -', Object.keys(window.__XC_CHAR_THEMES || {}).length, 'characters');
})();
