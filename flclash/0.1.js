// ============================================================
// FlClash 覆写脚本：DNS 覆写 v0.1
//
// 用法：
//   1. FlClash → 配置 → 脚本 → 新增脚本，URL 填本文件的直链，保存后点“更新”；
//   2. 进入目标订阅 → 覆写 → 脚本，选中该脚本。
//
// 说明：
//   FlClash 在 QuickJS 中执行 main(config)，config 是订阅解析后的配置对象，
//   main 返回的对象会替换原配置。合并语义与 Clash Verge Rev 的覆写一致：
//   对象递归合并，数组整体替换，未在下方声明的字段保持不变。
// ============================================================

const dnsOverride = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "use-hosts": true,
  "use-system-hosts": false,
  "ipv6": true,
  "ipv6-timeout": 100,
  "respect-rules": false,
  "prefer-h3": false,
  "cache-algorithm": "arc",
  "cache-max-size": 1024,
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-range6": "fdfe:dcba:9876::1/64",
  "fake-ip-filter": [
    "*.lan",
    "*.local",
    "localhost.ptlogin2.qq.com",
    "time.*.com",
    "ntp.*.com",
    "*.stun.*",
    "*.msftconnecttest.com",
    "*.msftncsi.com"
  ],
  "fake-ip-filter-mode": "blacklist",
  "fake-ip-ttl": 300,
  "default-nameserver": [
    "119.29.29.29",
    "223.5.5.5"
  ],
  "nameserver-policy": {
    "geosite:cn": "127.0.0.1:5591"
  },
  "nameserver": [
    "127.0.0.1:5591"
  ],
  "fallback": [
    "https://cloudflare-dns.com/dns-query#RULES",
    "https://dns.google/dns-query#RULES"
  ],
  "fallback-lazy-query": true,
  "proxy-server-nameserver": [
    "https://doh.pub/dns-query",
    "https://dns.alidns.com/dns-query"
  ],
  "direct-nameserver": [
    "127.0.0.1:5591"
  ],
  "direct-nameserver-follow-policy": false,
  "fallback-filter": {
    "geoip": true,
    "geoip-code": "CN",
    "geosite": [],
    "ipcidr": [
      "240.0.0.0/4"
    ],
    "domain": [
      "+.google.com",
      "+.facebook.com",
      "+.youtube.com",
      "+.googleapis.com"
    ]
  }
};

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function merge(target, source) {
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (isPlainObject(value) && isPlainObject(target[key])) {
      target[key] = merge(target[key], value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

function main(config) {
  config.dns = merge(isPlainObject(config.dns) ? config.dns : {}, dnsOverride);
  console.log("dns 覆写完成：" + JSON.stringify(config.dns));
  return config;
}
