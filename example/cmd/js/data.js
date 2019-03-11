var data = {
    0:"2019/03/11  14:39    &lt;DIR&gt;          .",
    1:"2019/03/11  14:39    &lt;DIR&gt;          ..",
    2:"2019/03/07  17:44               349 .bash_history",
    3:"2019/02/28  13:51    &lt;DIR&gt;          .config",
    4:"2019/02/28  14:14                60 .gitconfig",
    5:"2019/02/28  13:43    &lt;DIR&gt;          .ssh",
    6:"2019/02/27  13:09    &lt;DIR&gt;          .vscode",
    7:"2019/02/27  12:44    &lt;DIR&gt;          .WebStorm2017.2",
    8:"2019/02/18  18:18    &lt;DIR&gt;          3D Objects",
    9:"2019/02/27  13:40             1,136 ae.lnk",
    10:"2019/02/27  13:33             1,409 ai.lnk",
    11:"2019/02/27  11:51             2,441 chrome.lnk",
    12:"2019/02/18  18:18    &lt;DIR&gt;          Contacts",
    13:"2019/03/11  14:39    &lt;DIR&gt;          Desktop",
    14:"2019/02/28  14:46    &lt;DIR&gt;          Documents",
    15:"2019/03/11  14:40    &lt;DIR&gt;          Downloads",
    16:"2019/02/18  18:18    &lt;DIR&gt;          Favorites",
    17:"2019/02/28  11:17    &lt;DIR&gt;          Links",
    18:"2019/02/18  18:18    &lt;DIR&gt;          Music",
    19:"2019/03/11  14:38    &lt;DIR&gt;          OneDrive",
    20:"2019/03/01  10:05    &lt;DIR&gt;          Pictures",
    21:"2019/03/01  10:02             1,397 ps.lnk",
    22:"2019/03/11  14:38             1,315 qq.lnk",
    23:"2019/02/18  18:18    &lt;DIR&gt;          Saved Games",
    24:"2019/02/18  18:19    &lt;DIR&gt;          Searches",
    25:"2019/02/18  18:18    &lt;DIR&gt;          Videos",
    26:"2019/02/28  11:16             1,468 webstorm.lnk",
    27:"2019/03/01  10:23    &lt;DIR&gt;          WeChatProjects",
    28:"2019/02/28  17:00               990 xampp.lnk",
    29:"9 个文件         10,565 字节",
    30:"20 个目录 85,454,708,736 可用字节",
    31:"...",
    32:"...",
    33:" ",
    34:"Usage: npm &lt;command&gt;",
    35:" ",
    36:"where &lt;command&gt; is one of:",
    37:"access, adduser, bin, bugs, c, cache, completion, config,",
    38:"ddp, dedupe, deprecate, dist-tag, docs, doctor, edit,",
    39:"explore, get, help, help-search, i, init, install,",
    40:"install-test, it, link, list, ln, login, logout, ls,",
    41:"outdated, owner, pack, ping, prefix, prune, publish, rb,",
    42:"rebuild, repo, restart, root, run, run-script, s, se,",
    43:"search, set, shrinkwrap, star, stars, start, stop, t, team,",
    44:"test, tst, un, uninstall, unpublish, unstar, up, update, v,",
    45:"version, view, whoami",
    46:" ",
    47:" ",
    48:" ",
    49:" ",
    50:"num",
    51:"HACK progress:38%",
    52:" ",
    53:" ",
    54:" ",
    55:" ",
    56:" ",
    57:"    npm &lt;command&gt; -h     quick help on &lt;command&gt;",
    58:"    npm -l           display full usage info",
    59:"    npm -l           display full usage info",
    60:"    npm help &lt;term&gt;  search for help on &lt;term&gt;",
    61:"    npm help npm     involved overview",
    62:" ",
    63:"        Specify configs in the ini-formatted file:",
    64:"        C:\\Users\\secoo\\.npmrc",
    65:"        or on the command line via: npm &lt;command&gt; --key value",
    66:"        Config info can be viewed via: npm help config",
    67:"",
    68:"Windows IP 配置",
    69:"以太网适配器 以太网:",
    70:" ",
    71:"    媒体状态  . . . . . . . . . . . . : 媒体已断开连接",
    72:" ",
    73:"连接特定的 DNS 后缀 . . . . . . . :",
    74:" ",
    75:"无线局域网适配器 本地连接* 1:",
    76:" ",
    77:"媒体状态  . . . . . . . . . . . . : 媒体已断开连接",
    78:"连接特定的 DNS 后缀 . . . . . . . :",
    79:" ",
    80:"无线局域网适配器 本地连接* 3:",
    81:" ",
    82:"媒体状态  . . . . . . . . . . . . : 媒体已断开连接",
    83:"连接特定的 DNS 后缀 . . . . . . . :",
    84:" ",
    85:"无线局域网适配器 WLAN:",
    86:" ",
    87:"    连接特定的 DNS 后缀 . . . . . . . :",
    88:"    本地链接 IPv6 地址. . . . . . . . : fe80::3475:8e18:bf71:e60a%13",
    89:"    IPv4 地址 . . . . . . . . . . . . : 192.168.116.180",
    90:"    子网掩码  . . . . . . . . . . . . : 255.255.248.0",
    91:"    默认网关. . . . . . . . . . . . . : 192.168.112.1",
    92:" ",
    93:"以太网适配器 蓝牙网络连接:",
    94:"    媒体状态  . . . . . . . . . . . . : 媒体已断开连接",
    95:"    连接特定的 DNS 后缀 . . . . . . . :",
    96:" ",
    97:" ",
    98:"'use strict'",
    99:"const utils = require('./utils')",
    100:"const config = require('../config')",
    101:"const isProduction = process.env.NODE_ENV === 'production'",
    102:"const sourceMapEnabled = isProduction",
    103:"    ? config.build.productionSourceMap",
    104:"    : config.dev.cssSourceMap",
    105:" ",
    106:"module.exports = {",
    107:"loaders: utils.cssLoaders({",
    108:"    sourceMap: sourceMapEnabled,",
    109:"    extract: isProduction",
    110:"}),",
    111:"cssSourceMap: sourceMapEnabled,",
    112:"cacheBusting: config.dev.cacheBusting,",
    113:"transformToRequire: {",
    114:"    video: ['src', 'poster'],",
    115:"    source: 'src',",
    116:"    img: 'src',",
    117:"    image: 'xlink:href'",
    118:"}",
    119:"}",
    120:"---------------------------------------",
    121:"开始写入资料...",
    122:"姓名：彭小龙",
    123:"年龄：27",
    124:"...",
    125:"...",
    126:"职业：前端开发工程师",
    127:"...",
    128:".",
    129:".",
    130:".",
    131:".",
    132:".",
    133:".",
    134:".",
    135:"哎呀，黑你电脑好费劲啊",
    136:"...",
    137:".",
    138:"...",
    139:"你还是直接点击下载我的简历吧...",
    140:".",
    141:".",
    142:".",
    143:".",
    144:"一会会有一个弹窗，你点击一下就可以下载了！",
    145:".",
    146:".",
    147:".",
    148:".",
    149:".",
    150:"."
}






























