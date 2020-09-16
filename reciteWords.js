// 冒号前面是英文单词，后面是中文含义,冒号前边和后边的字符都用英文的单引号或双引号扩上;
// 冒号和逗号都用英文的;
// 这是样本：
// var data = {
//   '单词1': '含义1',
//   '单词2': '含义2'
// }
// 快速创建用的data对象
var data = {
  // 第一页
  "now that": "既然",
  "presently": "现在眼下",
  "prior to": "在。。之前",
  "emotionally": "感情上",
  "emotional": "感情上的",
  "crash": "碰撞",
  "in the form of": "以。。的形式出现",
  "visa": "签证",
  "fill out": "填写",
  "paperwork": "文书工作",
  "book": "预订",
  "in total": "合计",
  "make friends(with sb)": "交朋友",
  "meet up": "会面",
  // 第二页
  "sightseeing": "观光",
  "excursion": "远足",
  "lingo": "方言",
  "for once": "就这一回",
  "awkward": "笨拙的",
  "stress out": "疲惫不堪",
  "employment": "受雇",
  "alongside": "在。。旁边",
  "trade": "相互交换",
  "suck": "吮吸",
  "clue": "线索",
  "save up": "储蓄",
  // 第三页
  "hostel": "招待所",
  "capture": "录制",
  "zone": "地区",
  "embrace": "欣然接受",
  "solo": "单独的",
  "wanderlust": "强烈的旅行欲",
  "run through": "贯穿于",
  "expat": "移居国外的人",
  "by one`s side": "在某人的身边",
  "but then": "然而",
  "nest": "安家",
  "settle down": "定居",
  "browse": "浏览",
  "craft": "手工艺",
  "blog": "博客",
  "be obsessed": "着迷于",
  "version": "版本",
  "cable": "电缆",
  "kind of": "有点儿",
  "follow one`s heart": "做某人想做的事",
  // 第四页
  "the other way around": "相反地",
  "character-building": "性格塑造",
  "homesickness": "思乡",
  // 第五页
  "feel at home": "感觉自在",
  "parliament": "国会",
  "a couple of": "一些",
  "bad-tempered": "易怒的",
  "be/become fond of": "喜欢",
  "ski": "滑雪",
  "resort": "度假胜地",
  "beat doing": "胜过于",
  "sleepy": "安静的",
  "dot": "散布于",
  "sneaky": "偷偷摸摸的",
  "rotate": "轮换",
  "occupation": "职业",
  "revolve around": "以。。为中心",
  "labour": "从事体力劳动",
  "outdoors": "户外",
  "monger": "商人",
  "package": "包装，包裹",
  "fryer": "油炸锅",
  "burger": "汉堡包",
  // 第六页
  "fillet": "去掉骨头",
  "housekeeper": "旅馆服务员",
  "boutique": "精品小旅馆",
  "loom": "隐约出现",
  "guesthouse": "家庭旅馆",
  "remainder": "剩余部分",
  "peak season": "旅游高峰季节",
  "cafe": "小餐厅",
  "plot": "小块地",
  "serve as": "当作",
  "head out to": "朝特定方向出发",
  "thin": "稀疏",
  "tedious": "单调乏味",
  "hindsight": "后见之明",
  "meditative": "沉思的",
  "spider": "蜘蛛",
  "in no time": "马上",
  "hold onto": "紧紧抓住",
  "fleeting": "短暂的",
  "ownership": "所有权",
  // 第七页
  "backpacker": "背包客",
  "mainlander": "大陆人",
  "stall": "停滞不前",
  "in need of": "需要",
  "scenery": "环境，风景",
  "at the foot of": "在。。的脚下",
  "potential": "潜力",
  "run down": "使破败",
  "inadequate": "不足的",
  "deteriorate": "使变坏，使恶化",
  // 第八页
  "blend into": "融入",
  "dire": "悲惨的",
  "friendless": "孤独无助的",
  "have in mind": "打算",
  "minimum": "最小的",
  "hourly": "每小时的",
  "cheer up": "高兴起来",
  "confined": "有限的",
  "hold on": "坚持",
  "downbeat": "悲观的",
  "tune": "情绪",
  "learned": "博学的",
  "make money": "挣钱",
  "quit": "离开",
  "hop on": "跳上",
  "in company with": "与。。一起",
  "set free": "使自由",
  // 第九页
  "tackle": "解决，应付",
  "alien": "陌生的",
  "by god": "由命运安排",
  "fate": "命运",
  "in store": "即将发生",
  "mould": "制造",
  "hang around": "待在一起，厮混"
};
var english = [];
var chineses = [];
// 计算对象长度
function objLength(obj) {
  var count = 0;
  var flag = "";
  if (obj.type) {
    flag = "result";
  }
  for (var i in obj) {
    if (flag != "result") {
      english.push(i);
      chineses.push(obj[i]);
    }
    count++;
  }
  return count;
}
var fastCreateBtn = document.querySelector('.fastCreateBtn');
// 滚动切换定位
var btns = document.querySelector(".btns");
var wordTable = document.querySelector(".wordTable");
var wordTableTop = wordTable.offsetTop;
var btnsTop = btns.offsetTop - wordTableTop;
document.addEventListener('scroll', function () {
  if (window.pageYOffset >= wordTableTop) {
    btns.style.position = 'fixed';
    btns.style.top = btnsTop + 'px';
  } else {
    btns.style.position = 'absolute';
    btns.style.top = '300px';
  }
})
// 快速创建
fastCreateBtn.onclick = function () {
  btns.style.position = 'absolute';
  btns.style.top = "300px";
  let count = objLength(data);
  if (count != 0) {
    fillInfo(count);
    let words = document.querySelectorAll('.words');
    let chinese = document.querySelectorAll('.chinese');
    quickFill(words, chinese);
  } else {
    alert('data对象在reciteWords.js文件里，现在data对象里没有数据')
  }
  // 禁用按钮
  fastCreateBtn.disabled = "disabled";
}
// 快速填写数据
function quickFill(words, chinese) {
  for (let i = 0; i < words.length; i++) {
    words[i].value = english[i];
  }
  for (let i = 0; i < chinese.length; i++) {
    chinese[i].value = chineses[i];
  }
}
// 填充数据
function fillInfo(num) {
  let tbody = document.querySelector('.main');
  let arr = [];
  let inputName = ["words", "chinese", "checkWords", "checkChinese", "delete"]
  for (let i = 0; i < num; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
      let td = document.createElement('td');
      arr[j] = document.createElement('input');
      if (inputName[j] == "delete") {
        arr[j] = document.createElement('td');
        arr[j].innerText = "删除";
      }
      td.append(arr[j]);
      arr[j].className = inputName[j];
      tr.append(td);
    }
    tbody.append(tr);
  }
  arr = [];
}
var createBtn = document.querySelector('.createBtn');
var num = document.querySelector('.num');
createBtn.onclick = function () {
  btns.style.position = 'absolute';
  btns.style.top = "300px";
  fillInfo(num.value);
};
// 隐藏与显示
function HideAndAppear(type, operate) {
  let words = document.querySelectorAll('.words');
  let chinese = document.querySelectorAll('.chinese');
  if (words.length != 0) {
    if (type == 'chinese') {
      if (operate == 'hide') {
        for (let i = 0; i < chinese.length; i++) {
          chinese[i].type = 'password';
        }
      } else if (operate == 'appear') {
        for (let i = 0; i < chinese.length; i++) {
          chinese[i].type = 'text';
        }
      }
    } else if (type == 'words') {
      if (operate == 'hide') {
        for (let i = 0; i < words.length; i++) {
          words[i].type = 'password';
        }
      } else if (operate == 'appear') {
        for (let i = 0; i < chinese.length; i++) {
          words[i].type = 'text';
        }
      }
    }
  } else {
    alert('请先创建词单！');
  }
}
// 第几次点击检查按钮
var checkEnglish = 0;
var checkChineses = 0;
var checkType = '';
// 验证自己写的错与对
function check(type) {
  let result = {
    "type": "result"
  };
  if (type == "words") {
    checkType = "英文"
    checkEnglish++;
    let checkWords = document.querySelectorAll('.checkWords');
    for (let i = 0; i < checkWords.length; i++) {
      if (checkWords[i].value !== english[i]) {
        if (checkWords[i].value == "") {
          result[i + 1] = english[i];
        } else {
          result[checkWords[i].value] = english[i];
        }
      }
    }
  } else if (type == "chinese") {
    checkType = "中文"
    checkChineses++;
    let checkChinese = document.querySelectorAll('.checkChinese');
    for (let i = 0; i < checkChinese.length; i++) {
      if (checkChinese[i].value !== chineses[i]) {
        if (checkChinese[i].value == "") {
          result[i + 1] = chineses[i];
        } else {
          result[checkChinese[i].value] = chineses[i];
        }
      }
    }
  }
  if (objLength(result) - 1 == 0) {
    alert("全对了！");
    return false;
  } else if (objLength(result) - 1 == english.length) {
    alert("全错了！");
  } else {
    let count = objLength(result) - 1;
    alert("你错了：" + count + "个\n查看具体信息可在点击确定后按F12查看（左边是你写的，右边是正确答案,如果你没填的话，左边就是第几个）");
  }
  delete result.type;
  if (type == "chinese") {
    console.log(`这是第${checkChineses}次检查${checkType}结果`);
  } else if (type == "words") {
    console.log(`这是第${checkEnglish}次检查${checkType}结果`);
  }
  console.log(result)
}
// 清空
function clearWord(type) {
  if (type == "words") {
    let checkWords = document.querySelectorAll('.checkWords');
    for (let i = 0; i < checkWords.length; i++) {
      checkWords[i].value = ""
    }
  } else if (type == "chinese") {
    let checkChinese = document.querySelectorAll('.checkChinese');
    for (let i = 0; i < checkChinese.length; i++) {
      checkChinese[i].value = ""
    }
  }
}

// 填一个删除单词的功能（没完事）    // https://www.cnblogs.com/bwnnxxx123/p/12988073.html
function deleteWords() {
  var deleteTds = document.querySelector(".delete");
  deleteTds.onclick = function () {
    console.log(this);
    this.remove(); //点击删除
  }
  for (var k in data) {
    english.pop(data);
    chineses.pop(data[k]);
  }
}
